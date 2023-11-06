import Sidebar from "@/Layouts/User/Sidebar/Sidebar";

export default function Authenticated({ children }) {
    return (
        <>
            <div
                className="elisc_tm_all_wrap w-full h-auto clear-both float-left relative"
                data-magic-cursor="show"
                data-enter="fadeInLeft"
                data-exit=""
            ></div>
            {/* SideBar */}
            <Sidebar />

            <div className="elisc_tm_mainpart w-full min-h-[100vh] clear-both float-left pl-[370px]">
                {/* HOME */}
                <div className="mainpart_inner w-full min-h-[100vh] clear-both float-left relative">
                    <main>{children}</main>
                </div>
            </div>
        </>
    );
}
