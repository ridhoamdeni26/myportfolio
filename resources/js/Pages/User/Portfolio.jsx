import Authenticated from "@/Layouts/User/Authenticated/Index";
import { Head } from "@inertiajs/react";
import PortfolioDetail from "@/Components/PortfolioDetail";
import Slider from "react-slick";

export default function Portfolio({ portfolio }) {
    const Images = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            alt: "Image 1",
            title: "Lamborghini Huracan Performante",
            description:
                "The Huracán Performante has reworked the concept of super sports cars and taken the notion of performance to levels never seen before.",
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
            alt: "Image 2 ",
            title: "Porsche 911 Turbo S",
            description:
                "This Turbo S variant comes with an engine putting out 641 bhp @ 6750 rpm and 800 Nm @ 2500 rpm of max power and max torque respectively.",
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            alt: "Image 3",
            title: "Ford Mustang",
            description: "For offroad lovers. Super fast, Super Comfortable.",
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=452&q=80",
            alt: "Image 4",
            title: "Lamborghini Aventador SV",
            description:
                "Aventador SV provide thrills unlike anything that has ever been experienced before.",
        },
        {
            id: 5,
            src: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            alt: "Image 5",
            title: "Ferrari 458 Speciale",
            description:
                "0 to 100 km/h (0 to 62 mph) takes 3.0 seconds and the Spider is capable of a top speed of 400 km/h (249 mph).",
        },
        {
            id: 6,
            src: "https://images.unsplash.com/photo-1471479917193-f00955256257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
            alt: "Image 6",
            title: "Porsche 911",
            description:
                "The Porsche 911 (pronounced Nine Eleven or in German: Neunelfer) is a two-door 2+2 high performance rear-engined sports car.",
        },
        {
            id: 7,
            src: "https://images.unsplash.com/photo-1555353540-64580b51c258?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=378&q=80",
            alt: "Image 7",
            title: "Dodge Challenger",
            description:
                "The Challenger has a classic muscle-car interior, with a simple design",
        },
        {
            id: 8,
            src: "https://i.pinimg.com/750x/88/33/1b/88331be20045f95b28e91e21fa663ad0.jpg",
            alt: "Image 8",
            title: "Lamborghini Gallardo",
            description:
                "The Gallardo is a 2 seater 10 cylinder car and has length of 4345mm, width of 1900mm and a wheelbase of 2560mm.",
        },
        {
            id: 9,
            src: "https://i.pinimg.com/564x/2e/40/02/2e40027b9b156589cfbccbf7b33d3bc7.jpg",
            alt: "Image 9",
            title: "2021 Mercedes-AMG GLE53 Coupe electrifies",
            description:
                "Its electric motor can provide up to 184 pound-feet of torque on demand.",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    };
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

                            <div className="portfolio_list w-full float-left mt-[40px] mb-[120px]">
                                <div className="carousel carousel-center mx-auto p-4 space-x-4 rounded-box">
                                    <Slider {...settings}>
                                        <div className="carousel-item relative rounded-[4px] overflow-hidden mb-[25px]">
                                            <img
                                                src="assets/img/portfolio/1.jpg"
                                                className="rounded-box"
                                                alt=""
                                            />
                                            <div
                                                className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                                data-img-url="assets/img/portfolio/4.jpg"
                                            ></div>
                                            <a
                                                className="elisc_tm_full_link portfolio_popup absolute inset-0 z-[5]"
                                                href="#"
                                            ></a>
                                        </div>
                                        <div className="carousel-item relative rounded-[4px] overflow-hidden mb-[25px]">
                                            <img
                                                src="assets/img/portfolio/2.jpg"
                                                className="rounded-box"
                                                alt=""
                                            />
                                            <div
                                                className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                                data-img-url="assets/img/portfolio/4.jpg"
                                            ></div>
                                            <a
                                                className="elisc_tm_full_link portfolio_popup absolute inset-0 z-[5]"
                                                href="#"
                                            ></a>
                                        </div>
                                        <div className="carousel-item relative rounded-[4px] overflow-hidden mb-[25px]">
                                            <img
                                                src="assets/img/portfolio/3.jpg"
                                                className="rounded-box"
                                                alt=""
                                            />
                                            <div
                                                className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                                data-img-url="assets/img/portfolio/4.jpg"
                                            ></div>
                                            <a
                                                className="elisc_tm_full_link portfolio_popup absolute inset-0 z-[5]"
                                                href="#"
                                            ></a>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Authenticated>
        </>
    );
}
