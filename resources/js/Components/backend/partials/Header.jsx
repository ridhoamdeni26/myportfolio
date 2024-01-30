import { useState } from 'react';
import { Icon } from '@iconify/react';
import DropdownHeader from '../DropdownHeader';
import SearchModal from '../SearchModal';

function Header({ user }) {
    const [isSearchModalOpen, setSearchModalOpen] = useState(false);

    const openSearchModal = () => {
        setSearchModalOpen(true);
    };

    const closeSearchModal = () => {
        setSearchModalOpen(false);
    };

    return (
        <div className="z-[9]" id="app_header">
            <div
                className="app-header z-[999] ml-[248px] bg-slate-800 shadow-sm shadow-slate-700"
            >
                <div className="flex justify-between items-center h-full">
                    <div
                        className="flex items-center md:space-x-4 space-x-2 xl:space-x-0 vertical-box"
                    >
                        <a
                            href="#"
                            className="mobile-logo xl:hidden inline-block"
                        >
                            <img
                                src="assetsadmin/images/logo/logo-c-white.svg"
                                className="white_logo"
                                alt="logo"
                            />
                        </a>
                        <button
                            className="smallDeviceMenuController hidden md:inline-block xl:hidden"
                        >
                            <Icon className="leading-none bg-transparent relative text-xl top-[2px] text-white" icon="heroicons-outline:menu-alt-3" />
                        </button>

                        <button className="flex items-center xl:text-sm text-lg xl:text-slate-400 text-slate-300 px-1 search-modal" onClick={openSearchModal}>
                            <Icon icon="heroicons-outline:search" />
                            <span className="xl:inline-block hidden ml-3">Search... </span>
                        </button>

                        <SearchModal showModal={isSearchModalOpen} closeModal={closeSearchModal} />

                    </div>
                    <div
                        className="items-center space-x-4 horizental-box"
                    >
                        <a href="#">
                            <span className="xl:inline-block hidden">
                                <img
                                    src="assetsadmin/images/logo/logo-white.svg"
                                    className="white_logo"
                                    alt="logo"
                                />
                            </span>
                            <span className="xl:hidden inline-block">
                                <img
                                    src="assetsadmin/images/logo/logo-c-white.svg"
                                    className="white_logo"
                                    alt="logo"
                                />
                            </span>
                        </a>
                        <button
                            className="smallDeviceMenuController open-sdiebar-controller xl:hidden inline-block"
                        >
                            <Icon className="leading-none bg-transparent relative text-xl top-[2px] text-white" icon="heroicons-outline:menu-alt-3" />
                        </button>
                    </div>
                    {/* <!-- end horizental --> */}
                    {/* <!-- end top menu --> */}
                    <div
                        className="nav-tools flex items-center lg:space-x-5 space-x-3 leading-0"
                    >
                        {/* <!-- BEGIN: Language Dropdown  --> */}

                        {/* <!-- BEGIN: Profile Dropdown -->
                        <!-- Profile DropDown Area --> */}
                        <div className="md:block hidden w-full">
                            <DropdownHeader username={user.name} />

                        </div>
                        {/* <!-- END: Header --> */}
                        <button
                            className="smallDeviceMenuController md:hidden block leading-0"
                        >
                            <Icon className="cursor-pointer text-white text-2xl" icon="heroicons-outline:menu-alt-3" />
                        </button>
                        {/* <!-- end mobile menu --> */}
                    </div>
                    {/* <!-- end nav tools --> */}
                </div>
            </div>
        </div>
    )
}

export default Header