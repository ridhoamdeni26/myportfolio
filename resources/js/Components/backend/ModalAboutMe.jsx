import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import TextAreaInput from "@/Components/TextAreaInput";
import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import { useToasts } from "react-toast-notifications";

function ModalAboutMe({ isOpen, closeModal, actionType, selectedData, onSubmit, nameModal }) {
    const { addToast } = useToasts();

    const [filePreview, setFilePreview] = useState(null);
    const isViewAction = actionType === 'view';

    const { data, setData, put, errors, processing } = useForm({
        ...selectedData
    });

    useEffect(() => {
        setData(selectedData);
    }, [selectedData, setData]);



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

        put(route("aboutme.update", selectedData.id), {
            onSuccess: (page) => {
                setFilePreview(null);
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
                <div className="modal overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[100] flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)]" open>
                    <div className="relative p-4 w-full max-w-2xl max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-800">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    <p className="uppercase">{actionType} {nameModal}</p>
                                </h3>
                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={closeModal}>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <form onSubmit={updateAboutMe}>
                                <div className="p-4 md:p-5">
                                    <div className="space-y-4">
                                        <div className="">
                                            <InputLabel
                                                htmlFor="year"
                                                value="Year"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            />

                                            <TextInput
                                                id="year"
                                                type="text"
                                                name="year"
                                                autoComplete="off"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm !rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                value={data ? data.year : ''}
                                                onChange={(e) =>
                                                    setData("year", e.target.value)
                                                }
                                                disabled={isViewAction}
                                            />

                                            <InputError
                                                message={errors.year}
                                                className="mt-2"
                                            />
                                        </div>

                                        <div>
                                            <InputLabel
                                                htmlFor="job"
                                                value="Job"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            />

                                            <TextInput
                                                id="job"
                                                type="text"
                                                name="job"
                                                autoComplete="off"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm !rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                defaultValue={data ? data.job : ''}
                                                onChange={(e) =>
                                                    setData("job", e.target.value)
                                                }
                                                disabled={isViewAction}
                                            />

                                            <InputError
                                                message={errors.job}
                                                className="mt-2"
                                            />
                                        </div>

                                        <div>
                                            <InputLabel
                                                htmlFor="place"
                                                value="Place"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            />

                                            <TextInput
                                                id="place"
                                                type="text"
                                                name="place"
                                                autoComplete="off"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm !rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                defaultValue={data ? data.place : ''}
                                                onChange={(e) =>
                                                    setData("place", e.target.value)
                                                }
                                                disabled={isViewAction}
                                            />

                                            <InputError
                                                message={errors.place}
                                                className="mt-2"
                                            />
                                        </div>

                                        <div>
                                            <InputLabel
                                                htmlFor="description_short"
                                                value="Description Short"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            />

                                            <TextAreaInput
                                                id="description_short"
                                                name="description_short"
                                                defaultValue={data ? data.description_short : ''}
                                                onChange={(e) => setData("description_short", e.target.value)}
                                                disabled={isViewAction}
                                            />

                                            <InputError
                                                message={errors.description_short}
                                                className="mt-2"
                                            />
                                        </div>

                                        <div>
                                            <InputLabel
                                                htmlFor="description_long"
                                                value="Description Long"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            />

                                            <TextAreaInput
                                                id="description_long"
                                                name="description_long"
                                                defaultValue={data ? data.description_long : ''}
                                                onChange={(e) => setData("description_long", e.target.value)}
                                                disabled={isViewAction}
                                            />

                                            <InputError
                                                message={errors.description_long}
                                                className="mt-2"
                                            />
                                        </div>

                                        <div>
                                            <InputLabel
                                                htmlFor="image"
                                                value="Image"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            />

                                            {!isViewAction && (
                                                <>
                                                    <InputLabel
                                                        htmlFor="image"
                                                        value="Image Icon"
                                                        className="hidden mb-2 absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer font-Inter font-medium capitalize text-slate-700 dark:text-slate-50 leading-6"
                                                    />

                                                    <label>
                                                        <TextInput
                                                            type="file"
                                                            className="w-full hidden"
                                                            name="image"
                                                            accept=".jpg, .jpeg, .png"
                                                            onChange={(e) => handleFileChange(e, setFilePreview, 'image')}
                                                        />
                                                        <span className="!py-1 !text-xs ml-2 w-full h-[40px] file-control flex items-center custom-class">
                                                            <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                                                                <span id="placeholder" className="text-slate-400">Choose a file or drop it here...</span>
                                                            </span>
                                                            <span className="file-name flex-none cursor-pointer border-l px-4 border-slate-200 dark:border-slate-700 h-full inline-flex items-center bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-sm rounded-tr rounded-br font-normal">Browse</span>
                                                        </span>
                                                    </label>
                                                </>
                                            )}

                                            <div id="file-preview" className="ml-8">
                                                {selectedData.image && (
                                                    <img
                                                        src={selectedData.image}
                                                        alt="Profile"
                                                        className="w-12 h-12 object-cover rounded-full border border-slate-200 dark:border-slate-700"
                                                    />
                                                )}

                                                {!isViewAction && filePreview && (
                                                    <img
                                                        src={filePreview}
                                                        alt="Preview"
                                                        className="w-full h-auto max-h-48 object-contain border border-slate-200 dark:border-slate-700 rounded-md mr-4"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {!isViewAction && (
                                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">

                                        <PrimaryButton type="submit" disabled={processing} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit data</PrimaryButton>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ModalAboutMe