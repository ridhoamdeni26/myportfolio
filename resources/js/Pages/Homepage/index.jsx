import AuthLayout from "@/Layouts/Admin/AuthLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { useState, useEffect } from "react";
import { useToasts } from "react-toast-notifications";

function index({ auth, breadcrumb, currentPage }) {
    const { profiles } = usePage().props;
    const { addToast } = useToasts();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const { data, setData, post, errors, processing } = useForm({
        ...profiles,
    });

    const [filePreview, setFilePreview] = useState(null);
    const [fileHomepagePreview, setFileHomepagePreview] = useState(null);

    const handleFileChange = (e, previewSetter, fieldName) => {
        const file = e.target.files[0];

        if (file) {
            setData(fieldName, file);
            const reader = new FileReader();
            reader.onloadend = () => {
                previewSetter(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setData(fieldName, null);
            previewSetter(null);
        }
    };

    const updateProfile = (e) => {
        e.preventDefault();

        if (data.image_icon === profiles.image_icon) {
            delete data.image_icon;
        }

        if (data.image_homepage === profiles.image_homepage) {
            delete data.image_homepage;
        }

        post(route("homepage.update.profile", profiles.id), {
            _method: "put",
            ...data,
            onSuccess: (page) => {
                setFilePreview(null);
                setFileHomepagePreview(null);
                if (page.props.toast) {
                    const { type, message } = page.props.toast;
                    addToast(message, {
                        appearance: type,
                        autoDismiss: true,
                        autoDismissTimeout: 5000,
                    });
                }
            },
            onError: (errors) => {
                Object.keys(errors).forEach((fieldName) => {
                    const errorMessage = errors[fieldName];
                    addToast(errorMessage, {
                        appearance: "error",
                        autoDismiss: true,
                        autoDismissTimeout: 5000,
                    });
                });
            },
        });
    };

    return (
        <AuthLayout
            user={auth.user}
            breadcrumb={breadcrumb}
            currentPage={currentPage}
        >
            <Head title="Homepage" />

            {loading ? (
                <div className="card">
                    <div className="skeleton rounded-none card-body flex flex-col p-6">
                        <header className="skeleton flex mb-5 items-center pb-5 -mx-6 px-6">
                            <div className="flex-1">
                                <div className="card-title text-slate-900 dark:text-white">
                                    <div className="animate-pulse h-6 w-32 bg-gray-300 rounded-md"></div>
                                </div>
                            </div>
                        </header>
                        <div className="skeleton card-text h-full space-y-4">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="skeleton input-area relative pl-28"
                                >
                                    <div className="skeleton mb-2 absolute left-0 top-1/2 -translate-y-1/2 block cursor-pointer font-Inter font-medium capitalize text-slate-700 dark:text-slate-50 leading-6">
                                        <div className="animate-pulse bg-gray-300 h-4 w-20 rounded-md"></div>
                                    </div>
                                    <div className="skeleton !py-1 !text-xs ml-2">
                                        <div className="animate-pulse bg-gray-300 h-8 w-100 rounded-md"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="card">
                    <div className="card-body flex flex-col p-6">
                        <header className="flex mb-5 items-center border-b border-slate-100 dark:border-slate-700 pb-5 -mx-6 px-6">
                            <div className="flex-1">
                                <div className="card-title text-slate-900 dark:text-white">
                                    Homepage Data
                                </div>
                            </div>
                        </header>
                        <form onSubmit={updateProfile}>
                            <div className="card-text h-full space-y-4">
                                <div className="input-area relative pl-28">
                                    <InputLabel
                                        htmlFor="name"
                                        value="Name"
                                        className="mb-2 absolute left-0 top-1/2 -translate-y-1/2 block cursor-pointer font-Inter font-medium capitalize text-slate-700 dark:text-slate-50 leading-6"
                                    />

                                    <TextInput
                                        id="name"
                                        type="text"
                                        name="name"
                                        autoComplete="off"
                                        className="form-control !py-1 !text-xs ml-2"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="input-area relative pl-28">
                                    <InputLabel
                                        htmlFor="age"
                                        value="Age"
                                        className="mb-2 absolute left-0 top-1/2 -translate-y-1/2 block cursor-pointer font-Inter font-medium capitalize text-slate-700 dark:text-slate-50 leading-6"
                                    />

                                    <TextInput
                                        id="age"
                                        type="text"
                                        name="age"
                                        autoComplete="off"
                                        className="form-control !py-1 !text-xs ml-2"
                                        value={data.age}
                                        onChange={(e) =>
                                            setData("age", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.age}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="input-area relative pl-28">
                                    <InputLabel
                                        htmlFor="city"
                                        value="City"
                                        className="mb-2 absolute left-0 top-1/2 -translate-y-1/2 block cursor-pointer font-Inter font-medium capitalize text-slate-700 dark:text-slate-50 leading-6"
                                    />

                                    <TextInput
                                        id="city"
                                        type="text"
                                        name="city"
                                        autoComplete="off"
                                        className="form-control !py-1 !text-xs ml-2"
                                        value={data.city}
                                        onChange={(e) =>
                                            setData("city", e.target.value)
                                        }
                                    />

                                    <InputError
                                        messcity={errors.city}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="input-area relative pl-28">
                                    <InputLabel
                                        htmlFor="country"
                                        value="Country"
                                        className="mb-2 absolute left-0 top-1/2 -translate-y-1/2 block cursor-pointer font-Inter font-medium capitalize text-slate-700 dark:text-slate-50 leading-6"
                                    />

                                    <TextInput
                                        id="country"
                                        type="text"
                                        name="country"
                                        autoComplete="off"
                                        className="form-control !py-1 !text-xs ml-2"
                                        value={data.country}
                                        onChange={(e) =>
                                            setData("country", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.country}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="input-area relative pl-28">
                                    <InputLabel
                                        htmlFor="phone"
                                        value="Phone"
                                        className="mb-2 absolute left-0 top-1/2 -translate-y-1/2 block cursor-pointer font-Inter font-medium capitalize text-slate-700 dark:text-slate-50 leading-6"
                                    />

                                    <TextInput
                                        id="phone"
                                        type="text"
                                        name="phone"
                                        autoComplete="off"
                                        className="form-control !py-1 !text-xs ml-2"
                                        value={data.phone}
                                        onChange={(e) =>
                                            setData("phone", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.phone}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="input-area relative pl-28">
                                    <InputLabel
                                        htmlFor="email"
                                        value="Email"
                                        className="mb-2 absolute left-0 top-1/2 -translate-y-1/2 block cursor-pointer font-Inter font-medium capitalize text-slate-700 dark:text-slate-50 leading-6"
                                    />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        autoComplete="off"
                                        className="form-control !py-1 !text-xs ml-2"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="input-area relative pl-28">
                                    <InputLabel
                                        htmlFor="address"
                                        value="Address"
                                        className="mb-2 absolute left-0 top-1/2 -translate-y-1/2 block cursor-pointer font-Inter font-medium capitalize text-slate-700 dark:text-slate-50 leading-6"
                                    />

                                    <TextInput
                                        id="address"
                                        type="text"
                                        name="address"
                                        autoComplete="off"
                                        className="form-control !py-1 !text-xs ml-2"
                                        value={data.address}
                                        onChange={(e) =>
                                            setData("address", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.address}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="input-area relative pl-28">
                                    <InputLabel
                                        htmlFor="typed"
                                        value="Typed"
                                        className="mb-2 absolute left-0 top-1/2 -translate-y-1/2 block cursor-pointer font-Inter font-medium capitalize text-slate-700 dark:text-slate-50 leading-6"
                                    />

                                    <TextInput
                                        id="typed"
                                        type="text"
                                        name="typed"
                                        autoComplete="off"
                                        className="form-control !py-1 !text-xs ml-2"
                                        value={data.typed}
                                        onChange={(e) =>
                                            setData("typed", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.typed}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="input-area relative pl-28">
                                    <InputLabel
                                        htmlFor="image_icon"
                                        value="Image Icon"
                                        className="mb-2 absolute left-0 top-1/2 -translate-y-1/2 block cursor-pointer font-Inter font-medium capitalize text-slate-700 dark:text-slate-50 leading-6"
                                    />

                                    <label>
                                        <TextInput
                                            type="file"
                                            className="w-full hidden"
                                            name="image_icon"
                                            accept=".jpg, .jpeg, .png"
                                            onChange={(e) =>
                                                handleFileChange(
                                                    e,
                                                    setFilePreview,
                                                    "image_icon"
                                                )
                                            }
                                        />
                                        <span className="!py-1 !text-xs ml-2 w-full h-[40px] file-control flex items-center custom-class">
                                            <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                                                <span
                                                    id="placeholder"
                                                    className="text-slate-400"
                                                >
                                                    Choose a file or drop it
                                                    here...
                                                </span>
                                            </span>
                                            <span className="file-name flex-none cursor-pointer border-l px-4 border-slate-200 dark:border-slate-700 h-full inline-flex items-center bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-sm rounded-tr rounded-br font-normal">
                                                Browse
                                            </span>
                                        </span>
                                    </label>
                                    <div id="file-preview" className="ml-8">
                                        {profiles.image_icon && (
                                            <img
                                                src={`/storage/${profiles.image_icon}`}
                                                alt="Profile"
                                                className="w-12 h-12 object-cover rounded-full border border-slate-200 dark:border-slate-700"
                                            />
                                        )}
                                        {filePreview && (
                                            <img
                                                src={filePreview}
                                                alt="Preview"
                                                className="w-full h-auto max-h-48 object-contain border border-slate-200 dark:border-slate-700 rounded-md mr-4"
                                            />
                                        )}
                                    </div>
                                </div>

                                <div className="input-area relative pl-28">
                                    <InputLabel
                                        htmlFor="image_homepage"
                                        value="Image Homepage"
                                        className="mb-2 absolute left-0 top-1/2 -translate-y-1/2 block cursor-pointer font-Inter font-medium capitalize text-slate-700 dark:text-slate-50 leading-6"
                                    />

                                    <label>
                                        <TextInput
                                            type="file"
                                            className="w-full hidden"
                                            name="image_homepage"
                                            accept=".jpg, .jpeg, .png"
                                            onChange={(e) =>
                                                handleFileChange(
                                                    e,
                                                    setFileHomepagePreview,
                                                    "image_homepage"
                                                )
                                            }
                                        />
                                        <span className="!py-1 !text-xs ml-2 w-full h-[40px] file-control flex items-center custom-class">
                                            <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                                                <span
                                                    id="placeholder"
                                                    className="text-slate-400"
                                                >
                                                    Choose a file or drop it
                                                    here...
                                                </span>
                                            </span>
                                            <span className="file-name flex-none cursor-pointer border-l px-4 border-slate-200 dark:border-slate-700 h-full inline-flex items-center bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-sm rounded-tr rounded-br font-normal">
                                                Browse
                                            </span>
                                        </span>
                                    </label>
                                    <div id="file-preview" className="ml-8">
                                        {profiles.image_homepage && (
                                            <img
                                                src={`/storage/${profiles.image_homepage}`}
                                                alt="Profile"
                                                className="w-12 h-12 object-cover rounded-full border border-slate-200 dark:border-slate-700"
                                            />
                                        )}
                                        {fileHomepagePreview && (
                                            <img
                                                src={fileHomepagePreview}
                                                alt="Homepage Preview"
                                                className="w-full h-auto max-h-48 object-contain border border-slate-200 dark:border-slate-700 rounded-md mr-4"
                                            />
                                        )}
                                    </div>
                                </div>

                                <div className="flex justify-end mt-4">
                                    <PrimaryButton
                                        type="submit"
                                        disabled={processing}
                                        className="btn btn-wide btn-md inline-flex justify-center btn-dark rounded-[100px]"
                                    >
                                        Submit
                                    </PrimaryButton>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AuthLayout>
    );
}

export default index;
