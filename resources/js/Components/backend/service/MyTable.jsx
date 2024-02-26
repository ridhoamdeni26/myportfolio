import React, { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import { Icon } from "@iconify/react";
import { router } from "@inertiajs/react";
import { useToasts } from "react-toast-notifications";

function myTable({ columns, services, name, nowPage, perPage }) {
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
        const newUrl = `/services-admin?page=${pageNumber}&perPage=${newPerPage}`;
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
            setRows(services);
            setPending(false);
        };
        fetchData();
    }, [services]);

    const handleSearchChange = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchTerm(searchTerm);
    };

    const filteredData = searchTerm
        ? services.data.filter((exp) => {
              const year = exp.ip_address.toLowerCase();
              const job = exp.operating_system.toLowerCase();
              const place = exp.place.toLowerCase();

              return (
                  year.includes(searchTerm) ||
                  job.includes(searchTerm) ||
                  place.includes(searchTerm)
              );
          })
        : services.data;

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
                    <div className="flex justify-between items-center mb-4 px-6">
                        <div className="flex items-center">
                            <label htmlFor="rowsPerPage" className="mr-2">
                                Rows per page:
                            </label>
                            <select
                                id="rowsPerPage"
                                value={perPage}
                                onChange={(e) =>
                                    handlePerPageChange(
                                        parseInt(e.target.value, 10)
                                    )
                                }
                                className="border p-1"
                            >
                                <option value={10}>10</option>
                                <option value={25}>25</option>
                                <option value={50}>50</option>
                                <option value={100}>100</option>
                            </select>
                        </div>
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
                                className="min-w-full divide-y table-fixed divide-slate-700"
                                columns={columns}
                                data={filteredData}
                                progressPending={pending}
                                customStyles={customStyles}
                                theme="solarized"
                                pagination
                                paginationPerPage={perPage}
                                selectableRows
                                onSelectedRowsChange={handleChange}
                                highlightOnHover
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default myTable;
