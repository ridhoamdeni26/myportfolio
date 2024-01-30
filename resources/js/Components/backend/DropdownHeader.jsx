import { useState } from 'react';
import { Icon } from '@iconify/react';

export default function DropdownHeader({ username }) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };


    return (
        <div className="relative inline-block">
            <button
                className="text-white focus:ring-0 focus:outline-none font-medium rounded-lg text-sm text-center inline-flex items-center"
                type="button"
                onClick={toggleDropdown}
            >
                <div className="lg:h-8 lg:w-8 h-7 w-7 rounded-full flex-1 mr-[10px]">
                    <img
                        src="assetsadmin/images/all-img/user.png"
                        alt="user"
                        className="block w-full h-full object-cover rounded-full"
                    />
                </div>
                <span className="flex-none text-white text-sm font-normal items-center lg:flex hidden overflow-hidden text-ellipsis whitespace-nowrap">
                    {username}
                </span>
                <Icon className='ml-2' icon="heroicons-outline:chevron-down" />
            </button>

            {isDropdownOpen && (
                <div className="absolute z-10 divide-y divide-slate-100 shadow w-44 bg-slate-800 border border-slate-700 rounded-md !top-[35px] overflow-hidden">
                    <ul className="py-1 text-sm text-slate-200">
                        <li>
                            <a
                                href="index.html"
                                className="px-4 py-2 flex justify-items-start hover:bg-slate-600 hover:text-white font-inter text-sm text-white font-normal"
                            >
                                <Icon
                                    icon="heroicons-outline:user"
                                    class="relative top-[2px] text-lg mr-1"
                                />
                                <span class="font-Inter">Dashboard</span>
                            </a>
                        </li>
                        {/* Add other list items as needed */}
                    </ul>
                </div>
            )}
        </div>
    );
}
