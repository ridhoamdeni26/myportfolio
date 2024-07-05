import React, { useState } from "react";
import AuthLayout from "@/Layouts/Admin/AuthLayout";
import { Head } from "@inertiajs/react";
import ContactmeTable from "@/Components/backend/Contactme/ContactmeTable";
import ViewEditForm from "@/Components/backend/Contactme/ViewEditForm";
import DeleteForm from "@/Components/backend/Contactme/DeleteForm";
import { Icon } from "@iconify/react";

function Index({ auth, breadcrumb, currentPage, contactme, nowPage, perPage }) {
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

    const columns = [
        {
            name: "Fullname",
            selector: (row) => row.fullname,
            sortable: false,
        },
        {
            name: "Email",
            selector: (row) => row.email,
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
                    <DeleteForm id={row.id} onDelete={handleDelete} />
                </div>
            ),
        },
    ];

    const handleView = (id) => {
        const selectedRow = contactme.data.find((row) => row.id === id);
        setSelectedData(selectedRow);
        setActionType("view");
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

    return (
        <AuthLayout
            user={auth.user}
            breadcrumb={breadcrumb}
            currentPage={currentPage}
        >
            <Head title="Contact Me" />

            <ContactmeTable
                contactmes={contactme}
                columns={columns}
                name="Contact Me"
                nowPage={nowPage}
                perPage={perPage}
            />

            <ViewEditForm
                isOpen={isModalOpen}
                closeModal={closeModal}
                actionType={actionType}
                selectedData={selectedData}
                nameModal="Contact Me"
            />


        </AuthLayout>
    )
}

export default Index