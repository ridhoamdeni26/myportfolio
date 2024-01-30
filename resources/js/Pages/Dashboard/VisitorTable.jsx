import { Link } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import { Icon } from '@iconify/react';

function VisitorTable({ visitors }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [perPage, setPerPage] = useState(10);

    const handlePerPageChange = (newPerPage) => {
        setPerPage(newPerPage);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const customStyles = {
        headCells: {
            style: {
                background: '#334155',
            },
            className: 'table-th',
        },
        cells: {
            style: {
                paddingLeft: '1rem',
                paddingRight: '2rem',
            },
        },
    };

    createTheme('solarized', {
        text: {
            primary: '#ffffff',
            secondary: '#9ca3af',
        },
        background: {
            default: '#1E293B',
        },
        context: {
            background: '#111827',
            text: '#ffffff',
        },
        divider: {
            default: '#374151',
        },
        action: {
            button: '#4b5563',
            hover: '#6b7280',
            disabled: '#9ca3af',
        },
    }, 'dark');


    const columns = [
        {
            name: 'Ip Address',
            selector: row => row.ip_address,
        },
        {
            name: 'Operating System',
            selector: row => row.operating_system,
        },
        {
            name: 'Visit Time',
            selector: row => row.visit_time,
        },
        {
            name: 'City',
            selector: row => row.city,
        },
        {
            name: 'Region',
            selector: row => row.region,
        }
    ];

    const filteredData = visitors.data.filter((visitor) =>
        Object.values(visitor).some(
            (value) =>
                typeof value === 'string' &&
                value.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    return (
        <div className="card">
            <header className="card-header noborder">
                <h4 className="card-title">Visitor Table</h4>
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
                            <div className='text-white ml-4'>Search</div>
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
                                customStyles={customStyles}
                                theme="solarized"
                                pagination
                                paginationPerPage={perPage}
                                paginationRowsPerPageOptions={[10, 25, 50, 100]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisitorTable