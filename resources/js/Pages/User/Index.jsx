import { Head } from "@inertiajs/react";
import Home from "./Home";
import Sidebar from "@/Layouts/User/Sidebar/Sidebar";

export default function Index() {
    return (
        <>
            <Head title="My Portfolio">
            </Head>
            <div
                className="elisc_tm_all_wrap w-full h-auto clear-both float-left relative"
                data-magic-cursor="show"
                data-enter="fadeInLeft"
                data-exit=""
            ></div>
            {/* SideBar */}
            <Sidebar></Sidebar>

            <div className="elisc_tm_mainpart w-full min-h-[100vh] clear-both float-left pl-[370px]">
                {/* HOME */}
                <div className="mainpart_inner w-full min-h-[100vh] clear-both float-left relative">
                    <Home name={`Ridho Amdeni`} country={`Indonesia`} phone={`+6281365200863`} email={`secretridho26@gmail.com`} address={`Kota Tangerang`} typed={["Fullstack Developer", 1000, "Coder", 1000, "Web Developer", 1000, "Problem Solver", 1000]} />
                </div>
            </div>
        </>
    );
}
