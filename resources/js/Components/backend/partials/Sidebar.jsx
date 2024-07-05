import { Icon } from "@iconify/react";
import { Link } from "@inertiajs/react";

export default function Sidebar({ currentPage }) {
    return (
        <div className="sidebar-wrapper group">
            <div
                id="bodyOverlay"
                className="w-screen h-screen fixed top-0 bg-slate-900 bg-opacity-50 backdrop-blur-sm z-10 hidden"
            ></div>
            <div className="dark">
                <div className="logo-segment">
                    <a className="flex items-center" href="#">
                        <span className="ml-3 text-xl font-Inter font-bold text-white">
                            Welcome Admin
                        </span>
                    </a>
                    <div
                        id="sidebar_type"
                        className="cursor-pointer text-white text-lg"
                    >
                        <Icon
                            className="sidebarDotIcon extend-icon text-slate-200"
                            icon="fa-regular:dot-circle"
                        />
                        <Icon
                            className="sidebarDotIcon collapsed-icon text-slate-200"
                            icon="material-symbols:circle-outline"
                        />
                    </div>
                    <button className="sidebarCloseIcon text-2xl">
                        <Icon
                            className="text-slate-200"
                            icon="clarity:window-close-line"
                        />
                    </button>
                </div>
            </div>
            <div
                id="nav_shadow"
                className="nav_shadow h-[60px] absolute top-[80px] nav-shadow z-[1] w-full transition-all duration-200 pointer-events-none opacity-0"
            ></div>
            <div
                className="sidebar-menus bg-slate-800 py-2 px-4 h-[calc(100%-80px)] z-50"
                id="sidebar_menus"
            >
                <div className="dark relative z-[99]">
                    <ul className="sidebar-menu">
                        <li className="sidebar-menu-title">MENU</li>
                        <li>
                            <Link
                                href="/dashboard"
                                className={`mb-2 navItem ${currentPage === "dashboard" ? "active" : ""
                                    }`}
                            >
                                <span className="flex items-center">
                                    <Icon
                                        className="nav-icon mr-3"
                                        icon="material-symbols:dashboard-outline"
                                    />
                                    <span>Dashboard</span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/homepage-admin"
                                className={`mb-2 navItem ${currentPage === "homepage-admin"
                                    ? "active"
                                    : ""
                                    }`}
                            >
                                <span className="flex items-center">
                                    <Icon
                                        className="nav-icon mr-3"
                                        icon="heroicons-outline:home"
                                    />
                                    <span>Home Page</span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/aboutme-admin"
                                className={`mb-2 navItem ${currentPage === "aboutme-admin"
                                    ? "active"
                                    : ""
                                    }`}
                            >
                                <span className="flex items-center">
                                    <Icon
                                        className="nav-icon mr-3"
                                        icon="heroicons:identification-16-solid"
                                    />
                                    <span>Aboutme</span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/services-admin"
                                className={`mb-2 navItem ${currentPage === "services-admin"
                                    ? "active"
                                    : ""
                                    }`}
                            >
                                <span className="flex items-center">
                                    <Icon
                                        className="nav-icon mr-3"
                                        icon="heroicons:wrench"
                                    />
                                    <span>Services</span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/portfolio-admin"
                                className={`mb-2 navItem ${currentPage === "portfolio-admin"
                                    ? "active"
                                    : ""
                                    }`}
                            >
                                <span className="flex items-center">
                                    <Icon
                                        className="nav-icon mr-3"
                                        icon="heroicons:book-open"
                                    />
                                    <span>Portfolio</span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contactme-admin"
                                className={`mb-2 navItem ${currentPage === "contactme-admin"
                                    ? "active"
                                    : ""
                                    }`}
                            >
                                <span className="flex items-center">
                                    <Icon
                                        className="nav-icon mr-3"
                                        icon="heroicons:envelope"
                                    />
                                    <span>Contact Me</span>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
