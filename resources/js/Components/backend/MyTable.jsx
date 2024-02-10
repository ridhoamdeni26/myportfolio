import React, { useState, useEffect } from "react";
import DataTable, { createTheme } from "react-data-table-component";

function MyTable({ columns, data, name }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [perPage, setPerPage] = useState(10);
    const [pending, setPending] = useState(true);
    const [rows, setRows] = useState([]);

    const handlePerPageChange = (newPerPage) => {
        setPerPage(newPerPage);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        const fetchData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setRows(data);
            setPending(false);
        };
        fetchData();
    }, [data]);

    const filteredData = data.filter((item) =>
        Object.values(item).some(
            (value) =>
                typeof value === "string" &&
                value.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const handleChange = ({ selectedRows }) => {
        console.log("Selected Rows: ", selectedRows);
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

            <div className="card-body px-6 pb-6">
                <div className="overflow-x-auto -mx-6 dashcode-data-table">
                    <div className="flex justify-between items-center mb-2 px-6">
                        <div className="flex items-center">
                            <label htmlFor="rowsPerPage" className="mr-2">
                                Rows per page:
                            </label>
                            <select
                                id="rowsPerPage"
                                value={perPage}
                                onChange={(e) => handlePerPageChange(parseInt(e.target.value, 10))}
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
    )
}

export default MyTable