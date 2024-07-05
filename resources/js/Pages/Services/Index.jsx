import React, { useState } from "react";
import AuthLayout from "@/Layouts/Admin/AuthLayout";
import { Head } from "@inertiajs/react";
import TableService from "@/Components/backend/service/MyTable";
import CreateForm from "@/Components/backend/service/CreateForm";
import DeleteForm from "@/Components/backend/service/DeleteForm";
import ModalService from "@/Components/backend/service/ModalService";
import { Icon } from "@iconify/react";

function index({ auth, breadcrumb, currentPage, service, nowPage, perPage }) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isAddProjectModalOpen, setAddProjectModalOpen] = useState(false);
    const [selectedData, setSelectedData] = useState(null);
    const [actionType, setActionType] = useState(null);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        const formattedDay = day < 10 ? "0" + day : day;
        const formattedMonth = month < 10 ? "0" + month : month;

        return `${formattedDay}/${formattedMonth}/${year}`;
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const openAddProjectModal = () => {
        setAddProjectModalOpen(true);
    };

    const closeAddProjectModal = () => {
        setAddProjectModalOpen(false);
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will not be able to recover this data!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Deleted!", "Your data has been deleted.", "success");
            }
        });
    };


    const columns = [
        {
            name: "Title",
            selector: (row) => row.title,
            sortable: false,
        },
        {
            name: "Created Date",
            selector: (row) => formatDate(row.created_at),
            sortable: false,
        },
        {
            name: "Action",
            cell: (row) => (
                <div className="flex space-x-3">
                    <button
                        className="action-btn"
                        type="button"
                        onClick={() => handleView(row.id)}
                    >
                        <iconify-icon icon="heroicons:eye"></iconify-icon>
                    </button>
                    <button
                        className="action-btn"
                        type="button"
                        onClick={() => handleEdit(row.id)}
                    >
                        <iconify-icon icon="heroicons:pencil-square"></iconify-icon>
                    </button>
                    <DeleteForm id={row.id} onDelete={handleDelete} />
                </div>
            ),
        },
    ];

    const handleView = (id) => {
        const selectedRow = service.data.find((row) => row.id === id);
        setSelectedData(selectedRow);
        setActionType("view");
        setModalOpen(true);
    };

    const handleEdit = (id) => {
        const selectedRow = service.data.find((row) => row.id === id);
        setSelectedData(selectedRow);
        setActionType("edit");
        setModalOpen(true);
    };

    return (
        <AuthLayout
            user={auth.user}
            breadcrumb={breadcrumb}
            currentPage={currentPage}
        >
            <Head title="Services" />

            <div className="grid justify-items-end">
                <button
                    className="btn btn-sm btn-active"
                    onClick={openAddProjectModal}
                >
                    <span className="flex items-center">
                        <Icon
                            className="text-xl mr-1"
                            icon="ph:plus-bold"
                        ></Icon>
                        <span>Add Project</span>
                    </span>
                </button>
            </div>

            <TableService
                services={service}
                columns={columns}
                name="Service"
                nowPage={nowPage}
                perPage={perPage}
            />

            <ModalService
                isOpen={isModalOpen}
                closeModal={closeModal}
                actionType={actionType}
                selectedData={selectedData}
                nameModal="Service"
            />

            <CreateForm
                isOpen={isAddProjectModalOpen}
                closeModal={closeAddProjectModal}
                nameModal="Create Services"
            />
        </AuthLayout>
    );
}

export default index;
