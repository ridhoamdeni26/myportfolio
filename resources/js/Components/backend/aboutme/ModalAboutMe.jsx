import InputLabel from "@/Components/InputLabel";
import InputErrorBackend from "../partials/InputErrorBackend";
import TextInput from "@/Components/TextInput";
import TextAreaInput from "@/Components/TextAreaInput";
import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import { useToasts } from "react-toast-notifications";
import { Icon } from "@iconify/react";

function ModalAboutMe({
    isOpen,
    closeModal,
    actionType,
    nameModal,
    selectedData,
}) {
    const { addToast } = useToasts();

    const [filePreview, setFilePreview] = useState(null);
    const isViewAction = actionType === "view";

    useEffect(() => {
        if (selectedData) {
            setData({ ...selectedData });
        }
    }, [selectedData]);

    const { data, setData, post, errors, processing } = useForm({
        ...selectedData,
    });

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
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

    const updateAboutMe = (e) => {
        e.preventDefault();

        if (data.image === selectedData.image) {
            delete data.image;
        }

        post(route("aboutme.update", selectedData.id), {
            ...data,
            onSuccess: (page) => {
                setFilePreview(null);
                closeModal();
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
                                    <p className="uppercase">
                                        {actionType} {nameModal}
                                    </p>
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
                            <form onSubmit={updateAboutMe}>
                                <div className="card">
                                    <div className="card-body flex flex-col p-6">
                                        <div className="card-text h-full space-y-4">
                                            <div className="input-area">
                                                <InputLabel
                                                    htmlFor="company_name"
                                                    value="Company Name"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                />

                                                <div className="relative">
                                                    <TextInput
                                                        id="company_name"
                                                        type="text"
                                                        name="company_name"
                                                        className={`form-control !pr-9 ${errors.company_name
                                                            ? "!border-danger-500"
                                                            : ""
                                                            }`}
                                                        value={data.company_name}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        disabled={isViewAction}
                                                        autoComplete="off"
                                                    />
                                                    {errors.company_name && (
                                                        <Icon
                                                            className={`absolute top-1/2 right-3 -translate-y-1/2 text-danger-500 text-xl`}
                                                            icon="mdi:warning-octagon-outline"
                                                        ></Icon>
                                                    )}
                                                </div>

                                                <InputErrorBackend
                                                    message={errors.company_name}
                                                />
                                            </div>

                                            <div className="input-area">
                                                <InputLabel
                                                    htmlFor="year"
                                                    value="Year"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                />

                                                <div className="relative">
                                                    <TextInput
                                                        id="year"
                                                        type="text"
                                                        name="year"
                                                        className={`form-control !pr-9 ${errors.year
                                                            ? "!border-danger-500"
                                                            : ""
                                                            }`}
                                                        value={data.year}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        disabled={isViewAction}
                                                        autoComplete="off"
                                                    />
                                                    {errors.year && (
                                                        <Icon
                                                            className={`absolute top-1/2 right-3 -translate-y-1/2 text-danger-500 text-xl`}
                                                            icon="mdi:warning-octagon-outline"
                                                        ></Icon>
                                                    )}
                                                </div>

                                                <InputErrorBackend
                                                    message={errors.year}
                                                />
                                            </div>

                                            <div className="input-area">
                                                <InputLabel
                                                    htmlFor="job"
                                                    value="Job"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                />

                                                <div className="relative">
                                                    <TextInput
                                                        id="job"
                                                        type="text"
                                                        name="job"
                                                        className={`form-control !pr-9 ${errors.job
                                                            ? "!border-danger-500"
                                                            : ""
                                                            }`}
                                                        value={data.job}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        disabled={isViewAction}
                                                        autoComplete="off"
                                                    />

                                                    {errors.job && (
                                                        <Icon
                                                            className={`absolute top-1/2 right-3 -translate-y-1/2 text-danger-500 text-xl`}
                                                            icon="mdi:warning-octagon-outline"
                                                        ></Icon>
                                                    )}
                                                </div>

                                                <InputErrorBackend
                                                    message={errors.job}
                                                />
                                            </div>

                                            <div className="input-area">
                                                <InputLabel
                                                    htmlFor="place"
                                                    value="Place"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                />

                                                <div className="relative">
                                                    <TextInput
                                                        id="place"
                                                        type="text"
                                                        name="place"
                                                        className={`form-control !pr-9 ${errors.place
                                                            ? "!border-danger-500"
                                                            : ""
                                                            }`}
                                                        value={data.place}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        disabled={isViewAction}
                                                        autoComplete="off"
                                                    />

                                                    {errors.place && (
                                                        <Icon
                                                            className={`absolute top-1/2 right-3 -translate-y-1/2 text-danger-500 text-xl`}
                                                            icon="mdi:warning-octagon-outline"
                                                        ></Icon>
                                                    )}
                                                </div>

                                                <InputErrorBackend
                                                    message={errors.place}
                                                />
                                            </div>

                                            <div className="input-area">
                                                <InputLabel
                                                    htmlFor="description_short"
                                                    value="Description Short"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                />

                                                <div className="relative">
                                                    <TextAreaInput
                                                        id="description_short"
                                                        name="description_short"
                                                        className={`${errors.description_short
                                                            ? "!border-danger-500"
                                                            : ""
                                                            }`}
                                                        value={
                                                            data.description_short
                                                        }
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        disabled={isViewAction}
                                                        autoComplete="off"
                                                    />
                                                    {errors.description_short && (
                                                        <Icon
                                                            className={`absolute top-1/2 right-3 -translate-y-1/2 text-danger-500 text-xl`}
                                                            icon="mdi:warning-octagon-outline"
                                                        ></Icon>
                                                    )}
                                                </div>

                                                <InputErrorBackend
                                                    message={
                                                        errors.description_short
                                                    }
                                                />
                                            </div>

                                            <div className="input-area">
                                                <InputLabel
                                                    htmlFor="description_long"
                                                    value="Description Long"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                />

                                                <div className="relative">
                                                    <TextAreaInput
                                                        id="description_long"
                                                        name="description_long"
                                                        className={`${errors.description_long
                                                            ? "!border-danger-500"
                                                            : ""
                                                            }`}
                                                        value={
                                                            data.description_long
                                                        }
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        disabled={isViewAction}
                                                        autoComplete="off"
                                                    />
                                                    {errors.description_long && (
                                                        <Icon
                                                            className={`absolute top-1/2 right-3 -translate-y-1/2 text-danger-500 text-xl`}
                                                            icon="mdi:warning-octagon-outline"
                                                        ></Icon>
                                                    )}
                                                </div>

                                                <InputErrorBackend
                                                    message={
                                                        errors.description_long
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
                                                    {!isViewAction && (
                                                        <>
                                                            <label>
                                                                <TextInput
                                                                    type="file"
                                                                    className="w-full hidden"
                                                                    name="image"
                                                                    accept=".jpg, .jpeg, .png"
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        handleFileChange(
                                                                            e,
                                                                            setFilePreview,
                                                                            "image"
                                                                        )
                                                                    }
                                                                />
                                                                <span className="!py-1 !text-xs w-full h-[40px] file-control flex items-center custom-class">
                                                                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                                                                        <span
                                                                            id="placeholder"
                                                                            className="text-slate-400"
                                                                        >
                                                                            Choose
                                                                            a
                                                                            file
                                                                            or
                                                                            drop
                                                                            it
                                                                            here...
                                                                        </span>
                                                                    </span>
                                                                    <span className="file-name flex-none cursor-pointer border-l px-4 border-slate-200 dark:border-slate-700 h-full inline-flex items-center bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-sm rounded-tr rounded-br font-normal">
                                                                        Browse
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </>
                                                    )}

                                                    <div
                                                        id="file-preview"
                                                        className="ml-8"
                                                    >
                                                        {selectedData.image && (
                                                            <img
                                                                src={`/storage/${selectedData.image}`}
                                                                alt="Profile"
                                                                className="w-12 h-12 object-cover rounded-full border border-slate-200 dark:border-slate-700"
                                                            />
                                                        )}

                                                        {!isViewAction &&
                                                            filePreview && (
                                                                <img
                                                                    src={
                                                                        filePreview
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

                                    {!isViewAction && (
                                        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                            <PrimaryButton
                                                type="submit"
                                                disabled={processing}
                                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            >
                                                Submit data
                                            </PrimaryButton>
                                        </div>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ModalAboutMe;
