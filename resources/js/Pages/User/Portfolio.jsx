import Authenticated from "@/Layouts/User/Authenticated/Index";
import { Head } from "@inertiajs/react";
import PotfolioCarousel from "@/Components/PotfolioCarousel";

export default function Portfolio({ portfolio }) {
    return (
        <>
            <Authenticated>
                <Head title="Portfolio Me"></Head>
                <div className="elisc_tm_section" id="portfolio">
                    <div className="elisc_tm_portfolio w-full float-left pt-[120px]">
                        <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
                            <div className="elisc_tm_portfolio_title w-full float-left flex items-end justify-between">
                                <div className="elisc_tm_title w-auto float-left">
                                    <span className="w-full float-left font-medium uppercase inline-block mb-[12px]">
                                        - Projects
                                    </span>
                                    <h3 className="text-[40px] font-extrabold">
                                        Recent completed works
                                    </h3>
                                </div>
                            </div>
                            <PotfolioCarousel portfolio={portfolio} />
                        </div>
                    </div>
                </div>
            </Authenticated>
        </>
    );
}
