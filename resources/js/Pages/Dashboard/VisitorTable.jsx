import { router } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import DataTable, { createTheme } from "react-data-table-component";

function VisitorTable({ visitors, perPage, nowPage }) {
    const [selectedPage, setSelectedPage] = useState(nowPage);
    const [selectedPerPage, setSelectedPerPage] = useState(perPage);
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (pageNumber, newPerPage) => {
        setSelectedPage(pageNumber);
        setSelectedPerPage(newPerPage);
        const newUrl = `/dashboard?page=${pageNumber}&perPage=${newPerPage}`;
        router.visit(newUrl, { preserveState: true });
    };

    const handlePageChange = (pageNumber) => {
        handleChange(pageNumber, selectedPerPage);
    };

    const handlePerPageChange = (newPerPage) => {
        setSelectedPage(1);
        handleChange(1, newPerPage);
    };

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

    const columns = [
        {
            name: "Ip Address",
            selector: (row) => row.ip_address,
            sortable: true,
        },
        {
            name: "Operating System",
            selector: (row) => row.operating_system,
            sortable: true,
        },
        {
            name: "Visit Time",
            selector: (row) => row.visit_time,
            sortable: false,
        },
        {
            name: "City",
            selector: (row) => row.city,
            sortable: true,
        },
        {
            name: "Region",
            selector: (row) => row.region,
            sortable: true,
        },
    ];

    const handleSearchChange = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchTerm(searchTerm);
    };

    const filteredData = searchTerm
        ? visitors.data.filter((visitor) => {
              const ipAddress = visitor.ip_address.toLowerCase();
              const operatingSystem = visitor.operating_system.toLowerCase();
              const city = visitor.city.toLowerCase();
              const region = visitor.region.toLowerCase();

              return (
                  ipAddress.includes(searchTerm) ||
                  operatingSystem.includes(searchTerm) ||
                  city.includes(searchTerm) ||
                  region.includes(searchTerm)
              );
          })
        : visitors.data;

    return (
        <div className="card">
            <header className="card-header noborder">
                <h4 className="card-title">Visitor Table</h4>
            </header>

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
                                pagination
                                paginationPerPage={selectedPerPage}
                                paginationTotalRows={visitors.total}
                                paginationRowsPerPageOptions={[
                                    10, 15, 20, 25, 30,
                                ]}
                                paginationServer
                                paginationDefaultPage={selectedPage}
                                onChangePage={handlePageChange}
                                onChangeRowsPerPage={handlePerPageChange}
                                currentPage={selectedPage}
                                customStyles={customStyles}
                                theme="solarized"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VisitorTable;
