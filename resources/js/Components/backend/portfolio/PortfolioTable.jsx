import React, { useState, useEffect } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import Swal from "sweetalert2";
import { Icon } from "@iconify/react";
import { router } from "@inertiajs/react";
import { useToasts } from "react-toast-notifications";

function PortfolioTable({ columns, portfolios, name, perPage, nowPage }) {
    const { addToast } = useToasts();
    const [pending, setPending] = useState(true);
    const [selectedRows, setSelectedRows] = useState([]);
    const [rows, setRows] = useState([]);
    const [deleteSuccess, setDeleteSuccess] = useState(false);

    const [selectedPage, setSelectedPage] = useState(nowPage);
    const [selectedPerPage, setSelectedPerPage] = useState(perPage);
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (pageNumber, newPerPage) => {
        setSelectedPage(pageNumber);
        setSelectedPerPage(newPerPage);
        const newUrl = `/portfolio-admin?page=${pageNumber}&perPage=${newPerPage}`;
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
            setRows(portfolios);
            setPending(false);
        };
        fetchData();
    }, [portfolios]);

    const handleSearchChange = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchTerm(searchTerm);
    };

    const filteredData = searchTerm
        ? portfolios.data.filter((portfolio) => {
            const title = portfolio.title.toLowerCase();
            const client_name = portfolio.client_name.toLowerCase();
            const category = portfolio.category.toLowerCase();

            return (
                title.includes(searchTerm) ||
                client_name.includes(searchTerm) ||
                category.includes(searchTerm)
            );
        })
        : portfolios.data;

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
    return (
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
                                paginationTotalRows={portfolios.total}
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
    )
}

export default PortfolioTable