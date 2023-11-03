import SidebarLink from "./SidebarLink"
import SidebarSocialLink from "./SidebarSocialLink"

export default function Sidebar() {
    return (
        <div className="elisc_tm_sidebar w-[370px] h-[100vh] fixed left-0 top-0 border-solid border-[rgba(85,82,124,.1)] border-r">
            <div className="sidebar_inner w-full float-left h-auto clear-both text-center">
                <div className="author w-full float-left pt-[60px]">
                    <div className="image relative w-[118px] inline-block">
                        <img
                            className="relative opacity-0 min-w-full"
                            src="assets/img/thumbs/1-1.jpg"
                            alt=""
                        />
                        <div
                            className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
                            data-img-url="assets/img/about/1.jpg"
                        ></div>
                    </div>
                    <div className="name w-full float-left mt-[-19px]">
                        <h3>
                            <span>
                                Ridho Amdeni
                                <span className="back">Ridho Amdeni</span>
                            </span>
                        </h3>
                    </div>
                </div>
                <SidebarLink />
                <div className="copyright absolute bottom-[50px]">
                    <SidebarSocialLink />
                    <div className="text py-0 px-[50px]">
                        <p>
                            Copyright © 2023 Ridho Amdeni. All rights
                            reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
