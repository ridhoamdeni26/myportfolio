import Authenticated from "@/Layouts/User/Authenticated/Index";
import { Head } from "@inertiajs/react";
import PotfolioCarousel from "@/Components/PotfolioCarousel";

export default function Portfolio({ portfolio }) {
    const Portfolio = [
        {
            id: 1,
            src: "assets/img/portfolio/1.jpg",
            alt: "Image 1",
            title: "Lamborghini Huracan Performante",
            description:
                "The Huracán Performante has reworked the concept of super sports cars and taken the notion of performance to levels never seen before.",
        },
        {
            id: 2,
            src: "assets/img/portfolio/2.jpg",
            alt: "Image 2 ",
            title: "Porsche 911 Turbo S",
            description:
                "This Turbo S variant comes with an engine putting out 641 bhp @ 6750 rpm and 800 Nm @ 2500 rpm of max power and max torque respectively.",
        },
        {
            id: 3,
            src: "assets/img/portfolio/3.jpg",
            alt: "Image 3",
            title: "Ford Mustang",
            description: "For offroad lovers. Super fast, Super Comfortable.",
        },
        {
            id: 4,
            src: "assets/img/portfolio/1.jpg",
            alt: "Image 4",
            title: "Lamborghini Aventador SV",
            description:
                "Aventador SV provide thrills unlike anything that has ever been experienced before.",
        },
        {
            id: 5,
            src: "assets/img/portfolio/2.jpg",
            alt: "Image 5",
            title: "Ferrari 458 Speciale",
            description:
                "0 to 100 km/h (0 to 62 mph) takes 3.0 seconds and the Spider is capable of a top speed of 400 km/h (249 mph).",
        },
    ];


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

                            <PotfolioCarousel portfolio={Portfolio} />

                        </div>
                    </div>
                </div>
            </Authenticated>
        </>
    );
}
