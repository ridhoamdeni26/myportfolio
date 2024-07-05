import InputLabel from "@/Components/InputLabel";
import InputErrorBackend from "../partials/InputErrorBackend";
import TextInput from "@/Components/TextInput";
import TextAreaInput from "@/Components/TextAreaInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { useToasts } from "react-toast-notifications";
import { Icon } from "@iconify/react";
import DatePicker from "../DatePicker";

function CreateForm({ isOpen, closeModal, nameModal }) {
    const { addToast } = useToasts();
    const [fileImageThumbnail, setImageThumbnail] = useState(null);
    const [fileImageDescription, setFileImageDescription] = useState(null);
    const [fileImageDescription2, setFileImageDescription2] = useState(null);
    const [fileImageDescription3, setFileImageDescription3] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);

    const { data, setData, errors, post, reset, processing } = useForm({
        title: "",
        client_name: "",
        category: "",
        description: "",
        image_thumbnail: "",
        image_description: "",
        image_description2: "",
        image_description3: "",
        selectedDate: null,
    });

    useEffect(() => {
        return () => {
            reset(
                "title",
                "client_name",
                "category",
                "description",
                "image_thumbnail",
                "image_description",
                "image_description2",
                "image_description3",
                "selectedDate"
            );
        };
    }, []);

    const handleDatePickerChange = (date) => {
        const selectedDate = date[0];

        const year = selectedDate.getFullYear();
        const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
        const day = String(selectedDate.getDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;

        setData('selectedDate', formattedDate);
    };

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

    const createPortfolio = (e) => {
        e.preventDefault();

        post(route("portfolio.create"), {
            ...data,
            onSuccess: (page) => {
                setImageThumbnail(null);
                setFileImageDescription(null);
                setFileImageDescription2(null);
                setFileImageDescription3(null);
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
                            <form onSubmit={createPortfolio}>
                                <div className="card">
                                    <div className="card-body flex flex-col p-6">
                                        <div className="card-text h-full space-y-4">
                                            <div className="input-area">
                                                <InputLabel
                                                    htmlFor="title"
                                                    value="Title"
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
                                                    htmlFor="client_name"
                                                    value="Client Name"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                />

                                                <div className="relative">
                                                    <TextInput
                                                        type="text"
                                                        name="client_name"
                                                        className={`form-control !pr-9 ${errors.client_name
                                                            ? "!border-danger-500"
                                                            : ""
                                                            }`}
                                                        onChange={(e) =>
                                                            setData(
                                                                "client_name",
                                                                e.target.value
                                                            )
                                                        }
                                                        value={data.client_name}
                                                        autoComplete="off"
                                                    />
                                                    {errors.client_name && (
                                                        <Icon
                                                            className={`absolute top-1/2 right-3 -translate-y-1/2 text-danger-500 text-xl`}
                                                            icon="mdi:warning-octagon-outline"
                                                        ></Icon>
                                                    )}
                                                </div>

                                                <InputErrorBackend
                                                    message={errors.client_name}
                                                />
                                            </div>

                                            <div className="input-area">
                                                <InputLabel
                                                    htmlFor="category"
                                                    value="Category"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                />

                                                <div className="relative">
                                                    <TextInput
                                                        type="text"
                                                        name="category"
                                                        className={`form-control !pr-9 ${errors.category
                                                            ? "!border-danger-500"
                                                            : ""
                                                            }`}
                                                        onChange={(e) =>
                                                            setData(
                                                                "category",
                                                                e.target.value
                                                            )
                                                        }
                                                        value={data.category}
                                                        autoComplete="off"
                                                    />
                                                    {errors.category && (
                                                        <Icon
                                                            className={`absolute top-1/2 right-3 -translate-y-1/2 text-danger-500 text-xl`}
                                                            icon="mdi:warning-octagon-outline"
                                                        ></Icon>
                                                    )}
                                                </div>

                                                <InputErrorBackend
                                                    message={errors.category}
                                                />
                                            </div>

                                            <div className="input-area">
                                                <InputLabel
                                                    htmlFor="date"
                                                    value="Date"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                />

                                                <div className="relative">
                                                    <DatePicker autoComplete="off" value={selectedDate} onChange={handleDatePickerChange} name="selectedDate" className={`${errors.selectedDate
                                                        ? "!border-danger-500"
                                                        : ""
                                                        }`} />
                                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-full border-l border-l-slate-200 dark:border-l-slate-700 flex items-center justify-center">
                                                        <iconify-icon icon="heroicons-solid:calendar-days"></iconify-icon>
                                                    </div>
                                                    {errors.selectedDate && (
                                                        <Icon
                                                            className={`absolute top-1/2 right-3 -translate-y-1/2 text-danger-500 text-xl`}
                                                            icon="mdi:warning-octagon-outline"
                                                        ></Icon>
                                                    )}
                                                </div>

                                                <InputErrorBackend
                                                    message={errors.selectedDate}
                                                />
                                            </div>

                                            <div className="input-area">
                                                <InputLabel
                                                    htmlFor="description"
                                                    value="Description"
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

                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7">
                                                <div className="input-area">
                                                    <InputLabel
                                                        htmlFor="image_thumbnail"
                                                        value="Image Thumbnail"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    />

                                                    <div className="relative">
                                                        <>
                                                            <label>
                                                                <TextInput
                                                                    type="file"
                                                                    className="w-full hidden"
                                                                    name="image_thumbnail"
                                                                    accept=".jpg, .jpeg, .png"
                                                                    onChange={(e) =>
                                                                        handleFileChange(
                                                                            e,
                                                                            setImageThumbnail,
                                                                            "image_thumbnail"
                                                                        )
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
                                                            {fileImageThumbnail && (
                                                                <img
                                                                    src={
                                                                        fileImageThumbnail
                                                                    }
                                                                    alt="Preview"
                                                                    className="w-full h-auto max-h-48 object-contain border border-slate-200 dark:border-slate-700 rounded-md mr-4"
                                                                />
                                                            )}
                                                        </div>

                                                        {errors.image_thumbnail && (
                                                            <Icon
                                                                className={`absolute top-1/2 right-3 -translate-y-1/2 text-danger-500 text-xl`}
                                                                icon="mdi:warning-octagon-outline"
                                                            ></Icon>
                                                        )}
                                                    </div>

                                                    <InputErrorBackend
                                                        message={errors.image_thumbnail}
                                                    />
                                                </div>

                                                <div className="input-area">
                                                    <InputLabel
                                                        htmlFor="image_description"
                                                        value="Image Descripton 1"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    />

                                                    <div className="relative">
                                                        <>
                                                            <label>
                                                                <TextInput
                                                                    type="file"
                                                                    className="w-full hidden"
                                                                    name="image_description"
                                                                    accept=".jpg, .jpeg, .png"
                                                                    onChange={(e) =>
                                                                        handleFileChange(
                                                                            e,
                                                                            setFileImageDescription,
                                                                            "image_description"
                                                                        )
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
                                                            {fileImageDescription && (
                                                                <img
                                                                    src={
                                                                        fileImageDescription
                                                                    }
                                                                    alt="Preview"
                                                                    className="w-full h-auto max-h-48 object-contain border border-slate-200 dark:border-slate-700 rounded-md mr-4"
                                                                />
                                                            )}
                                                        </div>

                                                        {errors.image_description && (
                                                            <Icon
                                                                className={`absolute top-1/2 right-3 -translate-y-1/2 text-danger-500 text-xl`}
                                                                icon="mdi:warning-octagon-outline"
                                                            ></Icon>
                                                        )}
                                                    </div>

                                                    <InputErrorBackend
                                                        message={errors.image_description}
                                                    />
                                                </div>

                                                <div className="input-area">
                                                    <InputLabel
                                                        htmlFor="image_description2"
                                                        value="Image Descripton 2"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    />

                                                    <div className="relative">
                                                        <>
                                                            <label>
                                                                <TextInput
                                                                    type="file"
                                                                    className="w-full hidden"
                                                                    name="image_description2"
                                                                    accept=".jpg, .jpeg, .png"
                                                                    onChange={(e) =>
                                                                        handleFileChange(
                                                                            e,
                                                                            setFileImageDescription2,
                                                                            "image_description2"
                                                                        )
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
                                                            {fileImageDescription2 && (
                                                                <img
                                                                    src={
                                                                        fileImageDescription2
                                                                    }
                                                                    alt="Preview"
                                                                    className="w-full h-auto max-h-48 object-contain border border-slate-200 dark:border-slate-700 rounded-md mr-4"
                                                                />
                                                            )}
                                                        </div>

                                                        {errors.image_description2 && (
                                                            <Icon
                                                                className={`absolute top-1/2 right-3 -translate-y-1/2 text-danger-500 text-xl`}
                                                                icon="mdi:warning-octagon-outline"
                                                            ></Icon>
                                                        )}
                                                    </div>

                                                    <InputErrorBackend
                                                        message={errors.image_description2}
                                                    />
                                                </div>

                                                <div className="input-area">
                                                    <InputLabel
                                                        htmlFor="image_description3"
                                                        value="Image Descripton 3"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    />

                                                    <div className="relative">
                                                        <>
                                                            <label>
                                                                <TextInput
                                                                    type="file"
                                                                    className="w-full hidden"
                                                                    name="image_description3"
                                                                    accept=".jpg, .jpeg, .png"
                                                                    onChange={(e) =>
                                                                        handleFileChange(
                                                                            e,
                                                                            setFileImageDescription3,
                                                                            "image_description3"
                                                                        )
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
                                                            {fileImageDescription3 && (
                                                                <img
                                                                    src={
                                                                        fileImageDescription3
                                                                    }
                                                                    alt="Preview"
                                                                    className="w-full h-auto max-h-48 object-contain border border-slate-200 dark:border-slate-700 rounded-md mr-4"
                                                                />
                                                            )}
                                                        </div>

                                                        {errors.image_description3 && (
                                                            <Icon
                                                                className={`absolute top-1/2 right-3 -translate-y-1/2 text-danger-500 text-xl`}
                                                                icon="mdi:warning-octagon-outline"
                                                            ></Icon>
                                                        )}
                                                    </div>

                                                    <InputErrorBackend
                                                        message={errors.image_description3}
                                                    />
                                                </div>
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
    )
}

export default CreateForm