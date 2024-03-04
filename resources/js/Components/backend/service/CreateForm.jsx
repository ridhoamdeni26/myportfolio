import InputLabel from "@/Components/InputLabel";
import InputErrorBackend from "../partials/InputErrorBackend";
import TextInput from "@/Components/TextInput";
import TextAreaInput from "@/Components/TextAreaInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { useToasts } from "react-toast-notifications";
import { Icon } from "@iconify/react";

function CreateForm({ isOpen, closeModal, nameModal }) {
    const { addToast } = useToasts();
    const [selectedImage, setSelectedImage] = useState(null);

    const { data, setData, errors, post, reset, processing } = useForm({
        title: "",
        description: ""
    });

    useEffect(() => {
        return () => {
            reset(
                "title",
                "description"
            );
        };
    }, []);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setData("image", file);
        const reader = new FileReader();
        reader.onloadend = () => {
            setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const createServices = (e) => {
        e.preventDefault();

        post(route("services.create"), {
            ...data,
            onSuccess: (page) => {
                setSelectedImage(null);
                closeModal();
                reset();
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
        <>
            {isOpen && (
                <div
                    className="modal overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[100] flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)]"
                    open
                >
                    <div className="relative p-4 w-full max-w-2xl max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-800">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    <p className="uppercase">{nameModal}</p>
                                </h3>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={closeModal}
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <form onSubmit={createServices}>
                                <div className="card">
                                    <div className="card-body flex flex-col p-6">
                                        <div className="card-text h-full space-y-4">
                                            <div className="input-area">
                                                <InputLabel
                                                    htmlFor="title"
                                                    value="Year"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                />

                                                <div className="relative">
                                                    <TextInput
                                                        type="text"
                                                        name="title"
                                                        className={`form-control !pr-9 ${errors.title
                                                            ? "!border-danger-500"
                                                            : ""
                                                            }`}
                                                        onChange={(e) =>
                                                            setData(
                                                                "title",
                                                                e.target.value
                                                            )
                                                        }
                                                        value={data.title}
                                                        isFocused={true}
                                                        autoComplete="off"
                                                    />
                                                    {errors.title && (
                                                        <Icon
                                                            className={`absolute top-1/2 right-3 -translate-y-1/2 text-danger-500 text-xl`}
                                                            icon="mdi:warning-octagon-outline"
                                                        ></Icon>
                                                    )}
                                                </div>

                                                <InputErrorBackend
                                                    message={errors.title}
                                                />
                                            </div>

                                            <div className="input-area">
                                                <InputLabel
                                                    htmlFor="description"
                                                    value="Description Short"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                />

                                                <div className="relative">
                                                    <TextAreaInput
                                                        name="description"
                                                        className={`${errors.description
                                                            ? "!border-danger-500"
                                                            : ""
                                                            }`}
                                                        value={
                                                            data.description
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                "description",
                                                                e.target.value
                                                            )
                                                        }
                                                        isFocused={true}
                                                        autoComplete="off"
                                                    />

                                                    {errors.description && (
                                                        <Icon
                                                            className={`absolute top-1/2 right-3 -translate-y-1/2 text-danger-500 text-xl`}
                                                            icon="mdi:warning-octagon-outline"
                                                        ></Icon>
                                                    )}
                                                </div>

                                                <InputErrorBackend
                                                    message={
                                                        errors.description
                                                    }
                                                />
                                            </div>

                                            <div className="input-area">
                                                <InputLabel
                                                    htmlFor="image"
                                                    value="Image"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                />

                                                <div className="relative">
                                                    <>
                                                        <label>
                                                            <TextInput
                                                                type="file"
                                                                className="w-full hidden"
                                                                name="image"
                                                                accept=".jpg, .jpeg, .png"
                                                                onChange={
                                                                    handleFileChange
                                                                }
                                                            />
                                                            <span className="!py-1 !text-xs w-full h-[40px] file-control flex items-center custom-class">
                                                                <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                                                                    <span
                                                                        id="placeholder"
                                                                        className="text-slate-400"
                                                                    >
                                                                        Choose a
                                                                        file or
                                                                        drop it
                                                                        here...
                                                                    </span>
                                                                </span>
                                                                <span className="file-name flex-none cursor-pointer border-l px-4 border-slate-200 dark:border-slate-700 h-full inline-flex items-center bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-sm rounded-tr rounded-br font-normal">
                                                                    Browse
                                                                </span>
                                                            </span>
                                                        </label>
                                                    </>

                                                    <div
                                                        id="file-preview"
                                                        className="ml-8"
                                                    >
                                                        {selectedImage && (
                                                            <img
                                                                src={
                                                                    selectedImage
                                                                }
                                                                alt="Preview"
                                                                className="w-full h-auto max-h-48 object-contain border border-slate-200 dark:border-slate-700 rounded-md mr-4"
                                                            />
                                                        )}
                                                    </div>

                                                    {errors.image && (
                                                        <Icon
                                                            className={`absolute top-1/2 right-3 -translate-y-1/2 text-danger-500 text-xl`}
                                                            icon="mdi:warning-octagon-outline"
                                                        ></Icon>
                                                    )}
                                                </div>

                                                <InputErrorBackend
                                                    message={errors.image}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                        <PrimaryButton
                                            type="submit"
                                            disabled={processing}
                                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            Submit data
                                        </PrimaryButton>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default CreateForm;
