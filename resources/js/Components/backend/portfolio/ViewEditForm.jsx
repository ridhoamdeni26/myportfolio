import InputLabel from "@/Components/InputLabel";
import InputErrorBackend from "../partials/InputErrorBackend";
import TextInput from "@/Components/TextInput";
import TextAreaInput from "@/Components/TextAreaInput";
import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import { useToasts } from "react-toast-notifications";
import { Icon } from "@iconify/react";
import DatePicker from "../DatePicker";

function ViewEditForm({
    isOpen,
    closeModal,
    actionType,
    nameModal,
    selectedData,
}) {
    const { addToast } = useToasts();
    const isViewAction = actionType === "view";

    const [fileImageThumbnail, setImageThumbnail] = useState(null);
    const [fileImageDescription1, setFileImageDescription1] = useState(null);
    const [fileImageDescription2, setFileImageDescription2] = useState(null);
    const [fileImageDescription3, setFileImageDescription3] = useState(null);
    const [fileImageicon1, setFileImageicon1] = useState(null);
    const [fileImageicon2, setFileImageicon2] = useState(null);
    const [fileImageicon3, setFileImageicon3] = useState(null);
    const [fileImageicon4, setFileImageicon4] = useState(null);

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

    const handleDatePickerChange = (datePick) => {
        if (Array.isArray(datePick) && datePick.length === 0) {
            setData("date", ""); // Set tanggal ke kosong jika datePick adalah array kosong
        } else {
            const date = datePick[0];

            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const day = String(date.getDate()).padStart(2, "0");

            const formattedDate = `${year}-${month}-${day}`;

            setData("date", formattedDate);
        }
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

    const updatePortfolio = (e) => {
        e.preventDefault();

        if (data.image_thumbnail === selectedData.image_thumbnail) {
            delete data.image_thumbnail;
        }

        if (data.image_description1 === selectedData.image_description1) {
            delete data.image_description1;
        }

        if (data.image_description2 === selectedData.image_description2) {
            delete data.image_description2;
        }

        if (data.image_description3 === selectedData.image_description3) {
            delete data.image_description3;
        }

        if (data.icon1 === selectedData.icon1) {
            delete data.icon1;
        }

        if (data.icon2 === selectedData.icon2) {
            delete data.icon2;
        }

        if (data.icon3 === selectedData.icon3) {
            delete data.icon3;
        }

        if (data.icon4 === selectedData.icon4) {
            delete data.icon4;
        }

        console.log(selectedData.icon3, data.icon3);

        post(route("portfolio.update", selectedData.id), {
            ...data,
            onSuccess: (page) => {
                setImageThumbnail(null);
                setFileImageDescription1(null);
                setFileImageDescription2(null);
                setFileImageDescription3(null);
                setFileImageicon1(null);
                setFileImageicon2(null);
                setFileImageicon3(null);
                setFileImageicon4(null);
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
                            <form onSubmit={updatePortfolio}>
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
                                                        id="title"
                                                        type="text"
                                                        name="title"
                                                        className={`form-control !pr-9 ${
                                                            errors.title
                                                                ? "!border-danger-500"
                                                                : ""
                                                        }`}
                                                        value={data.title}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        disabled={isViewAction}
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
                                                        id="client_name"
                                                        type="text"
                                                        name="client_name"
                                                        className={`form-control !pr-9 ${
                                                            errors.client_name
                                                                ? "!border-danger-500"
                                                                : ""
                                                        }`}
                                                        value={data.client_name}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        disabled={isViewAction}
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
                                                        id="category"
                                                        type="text"
                                                        name="category"
                                                        className={`form-control !pr-9 ${
                                                            errors.category
                                                                ? "!border-danger-500"
                                                                : ""
                                                        }`}
                                                        value={data.category}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        disabled={isViewAction}
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
                                                    <DatePicker
                                                        autoComplete="off"
                                                        name="date"
                                                        className={`${
                                                            errors.date
                                                                ? "!border-danger-500"
                                                                : ""
                                                        }`}
                                                        disabled={isViewAction}
                                                        value={data.date}
                                                        onChange={
                                                            handleDatePickerChange
                                                        }
                                                    />
                                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-full border-l border-l-slate-200 dark:border-l-slate-700 flex items-center justify-center">
                                                        <Icon icon="heroicons-solid:calendar-days"></Icon>
                                                    </div>
                                                    {errors.date && (
                                                        <Icon
                                                            className={`absolute top-1/2 right-3 -translate-y-1/2 text-danger-500 text-xl`}
                                                            icon="mdi:warning-octagon-outline"
                                                        ></Icon>
                                                    )}
                                                </div>

                                                <InputErrorBackend
                                                    message={errors.date}
                                                />
                                            </div>

                                            <div className="input-area">
                                                <InputLabel
                                                    htmlFor="link"
                                                    value="Link Website"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                />

                                                <div className="relative">
                                                    <TextInput
                                                        id="link"
                                                        type="text"
                                                        name="link"
                                                        className={`form-control !pr-9 ${
                                                            errors.link
                                                                ? "!border-danger-500"
                                                                : ""
                                                        }`}
                                                        value={data.link}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        disabled={isViewAction}
                                                        autoComplete="off"
                                                    />
                                                    {errors.link && (
                                                        <Icon
                                                            className={`absolute top-1/2 right-3 -translate-y-1/2 text-danger-500 text-xl`}
                                                            icon="mdi:warning-octagon-outline"
                                                        ></Icon>
                                                    )}
                                                </div>

                                                <InputErrorBackend
                                                    message={errors.link}
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
                                                        id="description"
                                                        name="description"
                                                        className={`${
                                                            errors.description
                                                                ? "!border-danger-500"
                                                                : ""
                                                        }`}
                                                        value={data.description}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        disabled={isViewAction}
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
                                                    message={errors.description}
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7">
                                                {/* Image Description */}
                                                <div className="input-area">
                                                    <InputLabel
                                                        htmlFor="image_thumbnail"
                                                        value="Image Thumbnail"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    />

                                                    <div className="relative">
                                                        {!isViewAction && (
                                                            <>
                                                                <label>
                                                                    <TextInput
                                                                        type="file"
                                                                        className="w-full hidden"
                                                                        name="image_thumbnail"
                                                                        accept=".jpg, .jpeg, .png"
                                                                        onChange={(
                                                                            e
                                                                        ) =>
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
                                                            {selectedData.image_thumbnail && (
                                                                <img
                                                                    src={`/storage/${selectedData.image_thumbnail}`}
                                                                    alt="Profile"
                                                                    className="w-12 h-12 object-cover rounded-full border border-slate-200 dark:border-slate-700"
                                                                />
                                                            )}

                                                            {!isViewAction &&
                                                                fileImageThumbnail && (
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
                                                        message={
                                                            errors.image_thumbnail
                                                        }
                                                    />
                                                </div>

                                                <div className="input-area">
                                                    <InputLabel
                                                        htmlFor="image_description1"
                                                        value="Image Description 1"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    />

                                                    <div className="relative">
                                                        {!isViewAction && (
                                                            <>
                                                                <label>
                                                                    <TextInput
                                                                        type="file"
                                                                        className="w-full hidden"
                                                                        name="image_description1"
                                                                        accept=".jpg, .jpeg, .png"
                                                                        onChange={(
                                                                            e
                                                                        ) =>
                                                                            handleFileChange(
                                                                                e,
                                                                                setFileImageDescription1,
                                                                                "image_description1"
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
                                                            {selectedData.image_description1 && (
                                                                <img
                                                                    src={`/storage/${selectedData.image_description1}`}
                                                                    alt="Profile"
                                                                    className="w-12 h-12 object-cover rounded-full border border-slate-200 dark:border-slate-700"
                                                                />
                                                            )}

                                                            {!isViewAction &&
                                                                fileImageDescription1 && (
                                                                    <img
                                                                        src={
                                                                            fileImageDescription1
                                                                        }
                                                                        alt="Preview"
                                                                        className="w-full h-auto max-h-48 object-contain border border-slate-200 dark:border-slate-700 rounded-md mr-4"
                                                                    />
                                                                )}
                                                        </div>

                                                        {errors.image_description1 && (
                                                            <Icon
                                                                className={`absolute top-1/2 right-3 -translate-y-1/2 text-danger-500 text-xl`}
                                                                icon="mdi:warning-octagon-outline"
                                                            ></Icon>
                                                        )}
                                                    </div>

                                                    <InputErrorBackend
                                                        message={
                                                            errors.image_description1
                                                        }
                                                    />
                                                </div>

                                                <div className="input-area">
                                                    <InputLabel
                                                        htmlFor="image_description2"
                                                        value="Image Description 2"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    />

                                                    <div className="relative">
                                                        {!isViewAction && (
                                                            <>
                                                                <label>
                                                                    <TextInput
                                                                        type="file"
                                                                        className="w-full hidden"
                                                                        name="image_description2"
                                                                        accept=".jpg, .jpeg, .png"
                                                                        onChange={(
                                                                            e
                                                                        ) =>
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
                                                            {selectedData.image_description2 && (
                                                                <img
                                                                    src={`/storage/${selectedData.image_description2}`}
                                                                    alt="Profile"
                                                                    className="w-12 h-12 object-cover rounded-full border border-slate-200 dark:border-slate-700"
                                                                />
                                                            )}

                                                            {!isViewAction &&
                                                                fileImageDescription2 && (
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
                                                        message={
                                                            errors.image_description2
                                                        }
                                                    />
                                                </div>

                                                <div className="input-area">
                                                    <InputLabel
                                                        htmlFor="image_description3"
                                                        value="Image Description 3"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    />

                                                    <div className="relative">
                                                        {!isViewAction && (
                                                            <>
                                                                <label>
                                                                    <TextInput
                                                                        type="file"
                                                                        className="w-full hidden"
                                                                        name="image_description3"
                                                                        accept=".jpg, .jpeg, .png"
                                                                        onChange={(
                                                                            e
                                                                        ) =>
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
                                                            {selectedData.image_description3 && (
                                                                <img
                                                                    src={`/storage/${selectedData.image_description3}`}
                                                                    alt="Profile"
                                                                    className="w-12 h-12 object-cover rounded-full border border-slate-200 dark:border-slate-700"
                                                                />
                                                            )}

                                                            {!isViewAction &&
                                                                fileImageDescription3 && (
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
                                                        message={
                                                            errors.image_description3
                                                        }
                                                    />
                                                </div>

                                                {/* Image Icon */}
                                                <div className="input-area">
                                                    <InputLabel
                                                        htmlFor="icon1"
                                                        value="Icon 1"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    />

                                                    <div className="relative">
                                                        {!isViewAction && (
                                                            <>
                                                                <label>
                                                                    <TextInput
                                                                        type="file"
                                                                        className="w-full hidden"
                                                                        name="icon1"
                                                                        accept=".jpg, .jpeg, .png"
                                                                        onChange={(
                                                                            e
                                                                        ) =>
                                                                            handleFileChange(
                                                                                e,
                                                                                setFileImageicon1,
                                                                                "icon1"
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
                                                            {selectedData.icon1 && (
                                                                <img
                                                                    src={`/storage/${selectedData.icon1}`}
                                                                    alt="Profile"
                                                                    className="w-12 h-12 object-cover rounded-full border border-slate-200 dark:border-slate-700"
                                                                />
                                                            )}

                                                            {!isViewAction &&
                                                                fileImageicon1 && (
                                                                    <img
                                                                        src={
                                                                            fileImageicon1
                                                                        }
                                                                        alt="Preview"
                                                                        className="w-full h-auto max-h-48 object-contain border border-slate-200 dark:border-slate-700 rounded-md mr-4"
                                                                    />
                                                                )}
                                                        </div>

                                                        {errors.icon1 && (
                                                            <Icon
                                                                className={`absolute top-1/2 right-3 -translate-y-1/2 text-danger-500 text-xl`}
                                                                icon="mdi:warning-octagon-outline"
                                                            ></Icon>
                                                        )}
                                                    </div>

                                                    <InputErrorBackend
                                                        message={errors.icon1}
                                                    />
                                                </div>

                                                <div className="input-area">
                                                    <InputLabel
                                                        htmlFor="icon2"
                                                        value="Icon 1"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    />

                                                    <div className="relative">
                                                        {!isViewAction && (
                                                            <>
                                                                <label>
                                                                    <TextInput
                                                                        type="file"
                                                                        className="w-full hidden"
                                                                        name="icon2"
                                                                        accept=".jpg, .jpeg, .png"
                                                                        onChange={(
                                                                            e
                                                                        ) =>
                                                                            handleFileChange(
                                                                                e,
                                                                                setFileImageicon2,
                                                                                "icon2"
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
                                                            {selectedData.icon2 && (
                                                                <img
                                                                    src={`/storage/${selectedData.icon2}`}
                                                                    alt="Profile"
                                                                    className="w-12 h-12 object-cover rounded-full border border-slate-200 dark:border-slate-700"
                                                                />
                                                            )}

                                                            {!isViewAction &&
                                                                fileImageicon2 && (
                                                                    <img
                                                                        src={
                                                                            fileImageicon2
                                                                        }
                                                                        alt="Preview"
                                                                        className="w-full h-auto max-h-48 object-contain border border-slate-200 dark:border-slate-700 rounded-md mr-4"
                                                                    />
                                                                )}
                                                        </div>

                                                        {errors.icon2 && (
                                                            <Icon
                                                                className={`absolute top-1/2 right-3 -translate-y-1/2 text-danger-500 text-xl`}
                                                                icon="mdi:warning-octagon-outline"
                                                            ></Icon>
                                                        )}
                                                    </div>

                                                    <InputErrorBackend
                                                        message={errors.icon2}
                                                    />
                                                </div>

                                                <div className="input-area">
                                                    <InputLabel
                                                        htmlFor="icon3"
                                                        value="Icon 1"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    />

                                                    <div className="relative">
                                                        {!isViewAction && (
                                                            <>
                                                                <label>
                                                                    <TextInput
                                                                        type="file"
                                                                        className="w-full hidden"
                                                                        name="icon3"
                                                                        accept=".jpg, .jpeg, .png"
                                                                        onChange={(
                                                                            e
                                                                        ) =>
                                                                            handleFileChange(
                                                                                e,
                                                                                setFileImageicon3,
                                                                                "icon3"
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
                                                            {selectedData.icon3 && (
                                                                <img
                                                                    src={`/storage/${selectedData.icon3}`}
                                                                    alt="Profile"
                                                                    className="w-12 h-12 object-cover rounded-full border border-slate-200 dark:border-slate-700"
                                                                />
                                                            )}

                                                            {!isViewAction &&
                                                                fileImageicon3 && (
                                                                    <img
                                                                        src={
                                                                            fileImageicon3
                                                                        }
                                                                        alt="Preview"
                                                                        className="w-full h-auto max-h-48 object-contain border border-slate-200 dark:border-slate-700 rounded-md mr-4"
                                                                    />
                                                                )}
                                                        </div>

                                                        {errors.icon3 && (
                                                            <Icon
                                                                className={`absolute top-1/2 right-3 -translate-y-1/2 text-danger-500 text-xl`}
                                                                icon="mdi:warning-octagon-outline"
                                                            ></Icon>
                                                        )}
                                                    </div>

                                                    <InputErrorBackend
                                                        message={errors.icon3}
                                                    />
                                                </div>

                                                <div className="input-area">
                                                    <InputLabel
                                                        htmlFor="icon4"
                                                        value="Icon 1"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    />

                                                    <div className="relative">
                                                        {!isViewAction && (
                                                            <>
                                                                <label>
                                                                    <TextInput
                                                                        type="file"
                                                                        className="w-full hidden"
                                                                        name="icon4"
                                                                        accept=".jpg, .jpeg, .png"
                                                                        onChange={(
                                                                            e
                                                                        ) =>
                                                                            handleFileChange(
                                                                                e,
                                                                                setFileImageicon4,
                                                                                "icon4"
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
                                                            {selectedData.icon4 && (
                                                                <img
                                                                    src={`/storage/${selectedData.icon4}`}
                                                                    alt="Profile"
                                                                    className="w-12 h-12 object-cover rounded-full border border-slate-200 dark:border-slate-700"
                                                                />
                                                            )}

                                                            {!isViewAction &&
                                                                fileImageicon4 && (
                                                                    <img
                                                                        src={
                                                                            fileImageicon4
                                                                        }
                                                                        alt="Preview"
                                                                        className="w-full h-auto max-h-48 object-contain border border-slate-200 dark:border-slate-700 rounded-md mr-4"
                                                                    />
                                                                )}
                                                        </div>

                                                        {errors.icon4 && (
                                                            <Icon
                                                                className={`absolute top-1/2 right-3 -translate-y-1/2 text-danger-500 text-xl`}
                                                                icon="mdi:warning-octagon-outline"
                                                            ></Icon>
                                                        )}
                                                    </div>

                                                    <InputErrorBackend
                                                        message={errors.icon4}
                                                    />
                                                </div>
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

export default ViewEditForm;
