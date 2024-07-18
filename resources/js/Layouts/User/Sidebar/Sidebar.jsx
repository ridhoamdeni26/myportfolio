import SidebarLink from "./SidebarLink"
import SidebarSocialLink from "./SidebarSocialLink"
import { usePage } from '@inertiajs/react';

export default function Sidebar() {
    const { profiles } = usePage().props;

    const currentYear = new Date().getFullYear() - 1;
    const nextYear = currentYear + 1;
    return (
        <div className="elisc_tm_sidebar w-[370px] h-[100vh] fixed left-0 top-0 border-solid border-[rgba(85,82,124,.1)] border-r">
            <div className="sidebar_inner w-full float-left h-auto clear-both text-center">
                <div className="author w-full float-left pt-[60px]">
                    <div className="relative w-[118px] inline-block">
                        <img
                            className="relative opacity-0 min-w-full"
                            src={`/storage/${profiles.image_icon}`}
                            alt=""
                        />
                        <div
                            className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
                            style={{ backgroundImage: `url(/storage/${profiles.image_icon})` }}
                        ></div>
                    </div>
                    <div className="name w-full float-left mt-[-19px]">
                        <h3>
                            <span>
                                {profiles.name}
                                <span className="back">{profiles.name}</span>
                            </span>
                        </h3>
                    </div>
                </div>
                <SidebarLink />
                <div className="copyright absolute bottom-[50px]">
                    <SidebarSocialLink />
                    <div className="text py-0 px-[50px]">
                        <p>
                            Copyright © 2023 - {nextYear} {profiles.name}. All rights
                            reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
