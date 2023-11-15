import Authenticated from "@/Layouts/User/Authenticated/Index";
import { Head } from "@inertiajs/react";
import ServiceDetail from "@/Components/ServiceDetail";

export default function Service() {
    return (
        <>
            <Authenticated>
                <Head title="Services"></Head>
                <div className="elisc_tm_section" id="service">
                    <div className="elisc_tm_services w-full float-left pt-[110px]">
                        <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
                            <div className="elisc_tm_service_title w-full float-left flex justify-between items-end">
                                <div className="elisc_tm_title w-auto float-left">
                                    <span className="w-full float-left font-medium uppercase inline-block mb-[12px]">- Services</span>
                                    <h3 className="text-[40px] font-extrabold">My Services</h3>
                                </div>
                                <a href="mailto:secretridho26@gmail.com">secretridho26@gmail.com</a>
                            </div>
                            <div className="service_list w-full float-left mt-[40px] mb-[50px]">
                                <ServiceDetail />
                            </div>
                        </div>
                    </div>
                </div>
            </Authenticated>
        </>
    )
}
