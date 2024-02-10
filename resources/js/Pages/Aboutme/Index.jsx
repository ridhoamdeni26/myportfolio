import React, { useState } from "react";
import AuthLayout from "@/Layouts/Admin/AuthLayout"
import { Head, useForm } from "@inertiajs/react";
import { Icon } from '@iconify/react';
import DataTable from "@/Components/backend/MyTable";
import ModalAboutMe from "@/Components/backend/ModalAboutMe";

function Index({ auth, breadcrumb, currentPage, exp }) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedData, setSelectedData] = useState(null);
    const [actionType, setActionType] = useState(null);

    const columns = [
        {
            name: "Year",
            selector: (row) => row.year,
            sortable: false,
        },
        {
            name: "Name Job",
            selector: (row) => row.job,
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
                    <button
                        className="action-btn"
                        type="button"
                        onClick={() => handleDelete(row.id)}
                    >
                        <iconify-icon icon="heroicons:trash"></iconify-icon>
                    </button>
                </div>
            ),
        },
    ];

    const handleView = (id) => {
        const selectedRow = exp.find(row => row.id === id);
        setSelectedData(selectedRow);
        setActionType('view');
        setModalOpen(true);
    };

    const handleEdit = (id) => {
        const selectedRow = exp.find(row => row.id === id);
        setSelectedData(selectedRow);
        setActionType('edit');
        setModalOpen(true);
    };

    const handleDelete = (id) => {
        console.log(`Delete button clicked for id: ${id}`);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <AuthLayout
            user={auth.user}
            breadcrumb={breadcrumb}
            currentPage={currentPage}
        >
            <Head title="About Me" />

            <div className="grid justify-items-end">
                <button className="btn btn-sm btn-active">
                    <span className="flex items-center">
                        <Icon className="text-xl mr-1" icon="ph:plus-bold"></Icon>
                        <span>Add Project</span>
                    </span>
                </button>
            </div>

            <DataTable data={exp} columns={columns} name="About Me" />

            <ModalAboutMe isOpen={isModalOpen} closeModal={closeModal} actionType={actionType} selectedData={selectedData} nameModal="Aboutme" />
        </AuthLayout>
    )
}

export default Index