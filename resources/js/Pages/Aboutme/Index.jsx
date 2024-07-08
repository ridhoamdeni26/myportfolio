import React, { useState } from "react";
import AuthLayout from "@/Layouts/Admin/AuthLayout";
import { Head, usePage } from "@inertiajs/react";
import { Icon } from "@iconify/react";
import DataTable from "@/Components/backend/aboutme/MyTable";
import ModalAboutMe from "@/Components/backend/aboutme/ModalAboutMe";
import CreateForm from "@/Components/backend/aboutme/CreateForm";
import DeleteForm from "@/Components/backend/aboutme/DeleteForm";
import Swal from "sweetalert2";

function Index({ auth, breadcrumb, currentPage, exp, perPage, nowPage }) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isAddProjectModalOpen, setAddProjectModalOpen] = useState(false);
    const [selectedData, setSelectedData] = useState(null);
    const [actionType, setActionType] = useState(null);

    const columns = [
        {
            name: "Company Name",
            selector: (row) => row.company_name,
            sortable: false,
        },
        {
            name: "Year",
            selector: (row) => row.year,
            sortable: true,
        },
        {
            name: "Place",
            selector: (row) => row.place,
            sortable: true,
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
        const selectedRow = exp.data.find((row) => row.id === id);
        setSelectedData(selectedRow);
        setActionType("view");
        setModalOpen(true);
    };

    const handleEdit = (id) => {
        const selectedRow = exp.data.find((row) => row.id === id);
        setSelectedData(selectedRow);
        setActionType("edit");
        setModalOpen(true);
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

    const closeModal = () => {
        setModalOpen(false);
    };

    const openAddProjectModal = () => {
        setAddProjectModalOpen(true);
    };

    const closeAddProjectModal = () => {
        setAddProjectModalOpen(false);
    };

    return (
        <AuthLayout
            user={auth.user}
            breadcrumb={breadcrumb}
            currentPage={currentPage}
        >
            <Head title="About Me" />

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
                        <span>Add Experience</span>
                    </span>
                </button>
            </div>

            <DataTable
                exps={exp}
                columns={columns}
                name="About Me"
                perPage={perPage}
                nowPage={nowPage}
            />

            <ModalAboutMe
                isOpen={isModalOpen}
                closeModal={closeModal}
                actionType={actionType}
                selectedData={selectedData}
                nameModal="Aboutme"
            />

            <CreateForm
                isOpen={isAddProjectModalOpen}
                closeModal={closeAddProjectModal}
                nameModal="Create Experience"
            />
        </AuthLayout>
    );
}

export default Index;
