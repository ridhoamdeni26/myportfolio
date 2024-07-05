import React, { useState, useEffect } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import Swal from "sweetalert2";
import { Icon } from "@iconify/react";
import { router } from "@inertiajs/react";
import { useToasts } from "react-toast-notifications";

function MyTable({ columns, exps, name, perPage, nowPage }) {
    const { addToast } = useToasts();
    const [pending, setPending] = useState(true);
    const [selectedRows, setSelectedRows] = useState([]);
    const [rows, setRows] = useState([]);
    const [deleteSuccess, setDeleteSuccess] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const [selectedPage, setSelectedPage] = useState(nowPage);
    const [selectedPerPage, setSelectedPerPage] = useState(perPage);
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (pageNumber, newPerPage) => {
        setSelectedPage(pageNumber);
        setSelectedPerPage(newPerPage);
        const newUrl = `/aboutme-admin?page=${pageNumber}&perPage=${newPerPage}`;
        router.visit(newUrl, { preserveState: true });
    };

    const handlePageChange = (pageNumber) => {
        handleChange(pageNumber, selectedPerPage);
    };

    const handlePerPageChange = (newPerPage) => {
        setSelectedPage(1);
        handleChange(1, newPerPage);
    };

    useEffect(() => {
        const fetchData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setRows(exps);
            setPending(false);
        };
        fetchData();
    }, [exps]);

    const handleSearchChange = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchTerm(searchTerm);
    };

    const filteredData = searchTerm
        ? exps.data.filter((exp) => {
            const year = exp.ip_address.toLowerCase();
            const job = exp.operating_system.toLowerCase();
            const place = exp.place.toLowerCase();

            return (
                year.includes(searchTerm) ||
                job.includes(searchTerm) ||
                place.includes(searchTerm)
            );
        })
        : exps.data;

    const selectedRowsChange = ({ selectedRows }) => {
        setSelectedRows(selectedRows);
        setDeleteSuccess(false);
    };

    const successDelete = () => {
        setDeleteSuccess(true);
    };

    // Theme
    const customStyles = {
        headCells: {
            style: {
                background: "#334155",
            },
            className: "table-th",
        },
        cells: {
            style: {
                paddingLeft: "1rem",
                paddingRight: "2rem",
            },
        },
    };

    createTheme(
        "solarized",
        {
            text: {
                primary: "#ffffff",
                secondary: "#9ca3af",
            },
            background: {
                default: "#1E293B",
            },
            context: {
                background: "#111827",
                text: "#ffffff",
            },
            divider: {
                default: "#374151",
            },
            action: {
                button: "#4b5563",
                hover: "#6b7280",
                disabled: "#9ca3af",
            },
        },
        "dark"
    );

    const selectedDelete = (id) => {
        const ids = selectedRows.map((row) => row.id);
        Swal.fire({
            title: "Are you sure?",
            text: `You are about to delete ${selectedRows.length} item(s)`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                const ids = selectedRows.map((row) => row.id);
                router.delete(route("aboutme.delete.selected"), {
                    data: {
                        ids: ids,
                    },
                    onSuccess: (page) => {
                        successDelete();
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
            }
        });
    };

    return (
        <>
            {loading ? (
                <div class="skeleton card overflow-hidden">
                    <div class="skeleton rounded-none card-body px-8 pb-8 w-100">
                        <div class="skeleton overflow-x-auto -mx-8 dashcode-data-table">
                            <div class="flex justify-between items-center mb-8 px-6">
                                <div class="skeleton flex-grow-0">
                                    <div class="skeleton h-8 w-24 rounded-md bg-gray-300"></div>
                                </div>
                                <div class="skeleton flex items-center">
                                    <div class="skeleton h-8 w-24 rounded-md bg-gray-300"></div>
                                </div>
                            </div>
                            <div class="inline-block min-w-full align-middle">
                                <table class="skeleton w-full">
                                    <tr>
                                        <td class="skeleton py-4"> </td>
                                        <td class="skeleton py-4"> </td>
                                        <td class="skeleton py-4"> </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="card">
                    <header className="card-header noborder">
                        <h4 className="card-title">{name} Table</h4>
                    </header>

                    {!deleteSuccess && selectedRows.length > 0 && (
                        <div className="mx-4">
                            <div className="py-[18px] px-6 font-normal text-sm rounded-md bg-danger-500 text-white">
                                <div className="flex items-center space-x-3">
                                    <button onClick={selectedDelete}>
                                        <Icon
                                            className="text-2xl flex-0"
                                            icon="heroicons:trash"
                                        />
                                    </button>
                                    <p className="flex-1 font-Inter">
                                        {selectedRows.length} items selected
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="card-body px-6 pb-6">
                        <div className="overflow-x-auto -mx-6 dashcode-data-table">
                            <div className="flex justify-end items-center mb-6 px-4">
                                <div className="flex items-center">
                                    <div className="text-white ml-4">Search</div>
                                    <input
                                        type="text"
                                        value={searchTerm}
                                        onChange={handleSearchChange}
                                        placeholder="Search..."
                                        className="border p-1"
                                    />
                                </div>
                            </div>
                            <div className="inline-block min-w-full align-middle">
                                <div className="overflow-hidden">
                                    <DataTable
                                        columns={columns}
                                        data={filteredData}
                                        progressPending={pending}
                                        pagination
                                        paginationPerPage={selectedPerPage}
                                        paginationTotalRows={exps.total}
                                        paginationRowsPerPageOptions={[
                                            10, 15, 20, 25, 30,
                                        ]}
                                        paginationServer
                                        paginationDefaultPage={selectedPage}
                                        onChangePage={handlePageChange}
                                        onChangeRowsPerPage={handlePerPageChange}
                                        selectableRows
                                        onSelectedRowsChange={selectedRowsChange}
                                        currentPage={selectedPage}
                                        customStyles={customStyles}
                                        theme="solarized"
                                        highlightOnHover
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>

    );
}

export default MyTable;
