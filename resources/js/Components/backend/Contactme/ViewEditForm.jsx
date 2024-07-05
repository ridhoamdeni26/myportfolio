import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import TextAreaInput from "@/Components/TextAreaInput";
import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import { useToasts } from "react-toast-notifications";
import { Icon } from "@iconify/react";

function ViewEditForm({ isOpen,
    closeModal,
    actionType,
    nameModal,
    selectedData }) {
    const { addToast } = useToasts();
    const isViewAction = actionType === "view";

    useEffect(() => {
        if (selectedData) {
            setData({ ...selectedData });
        }
    }, [selectedData]);

    const { data, setData, errors } = useForm({
        ...selectedData,
    });

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
                            <div className="card">
                                <div className="card-body flex flex-col p-6">
                                    <div className="card-text h-full space-y-4">
                                        <div className="input-area">
                                            <InputLabel
                                                htmlFor="fullname"
                                                value="Fullname"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            />

                                            <div className="relative">
                                                <TextInput
                                                    id="fullname"
                                                    type="text"
                                                    name="fullname"
                                                    className={`form-control !pr-9 ${errors.fullname
                                                        ? "!border-danger-500"
                                                        : ""
                                                        }`}
                                                    value={data.fullname}
                                                    disabled={isViewAction}
                                                    autoComplete="off"
                                                />
                                            </div>
                                        </div>

                                        <div className="input-area">
                                            <InputLabel
                                                htmlFor="email"
                                                value="Email"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            />

                                            <div className="relative">
                                                <TextInput
                                                    id="email"
                                                    type="Fullname"
                                                    name="email"
                                                    className={`form-control !pr-9 ${errors.email
                                                        ? "!border-danger-500"
                                                        : ""
                                                        }`}
                                                    value={data.email}
                                                    disabled={isViewAction}
                                                    autoComplete="off"
                                                />
                                            </div>
                                        </div>

                                        <div className="input-area">
                                            <InputLabel
                                                htmlFor="message"
                                                value="Message"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            />

                                            <div className="relative">
                                                <TextAreaInput
                                                    id="message"
                                                    name="message"
                                                    className={`${errors.message
                                                        ? "!border-danger-500"
                                                        : ""
                                                        }`}
                                                    value={
                                                        data.message
                                                    }
                                                    disabled={isViewAction}
                                                    autoComplete="off"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ViewEditForm