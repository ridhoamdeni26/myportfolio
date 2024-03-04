import React, { useState } from "react";
import AuthLayout from "@/Layouts/Admin/AuthLayout";
import { Head, usePage } from "@inertiajs/react";
import { Icon } from "@iconify/react";
import PortfolioTable from "@/Components/backend/portfolio/PortfolioTable";
import ModalAboutMe from "@/Components/backend/aboutme/ModalAboutMe";
import CreateForm from "@/Components/backend/portfolio/CreateForm";
import DeleteForm from "@/Components/backend/aboutme/DeleteForm";
import Swal from "sweetalert2";

function Index({ auth, breadcrumb, currentPage, portfolio, perPage, nowPage }) {
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

    const columns = [
        {
            name: "Title",
            selector: (row) => row.title,
            sortable: false,
        },
        {
            name: "Client Name",
            selector: (row) => row.client_name,
            sortable: true,
        },
        {
            name: "Category",
            selector: (row) => row.category,
            sortable: true,
        },
        {
            name: "Date",
            selector: (row) => formatDate(row.date),
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
            <Head title="Portfolio Admin" />

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

            <PortfolioTable
                portfolios={portfolio}
                columns={columns}
                name="portfolio"
                nowPage={nowPage}
                perPage={perPage}
            />

            <CreateForm
                isOpen={isAddProjectModalOpen}
                closeModal={closeAddProjectModal}
                nameModal="Create Portfolio"
                portfolios={portfolio}
            />
        </AuthLayout>
    )
}

export default Index