import { useState } from "react";
import Slider from "react-slick";
import PortfolioModal from "./PortfolioModal";

export default function PotfolioCarousel({ portfolio }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedPortfolio, setSelectedPortfolio] = useState(null);

    const openModal = (portfolio) => {
        setSelectedPortfolio(portfolio);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedPortfolio(null);
        setShowModal(false);
    };

    const truncateText = (text, maxLength) => {
        return text.length > maxLength
            ? `${text.slice(0, maxLength)}...`
            : text;
    };

    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <div className="portfolio_list w-full float-left mt-[40px] mb-[120px]">
                <Slider {...settings}>
                    {portfolio.map((portfolio) => (
                        <div key={portfolio.id} className="cursor-grab">
                            <div className="carousel-item relative rounded-[4px] overflow-hidden mb-[25px]">
                                <img
                                    src={portfolio.image_thumbnail}
                                    className="rounded-box"
                                />
                            </div>
                            <div className="details w-full float-left">
                                <span className="category inline-block mb-[7px] text-[#A5A6FF] font-semibold">
                                    <a
                                        onClick={() => openModal(portfolio)}
                                        className="cursor-pointer"
                                    >
                                        {portfolio.title}
                                    </a>
                                </span>
                                <div className="text-md pr-4 leading-6">
                                    {truncateText(portfolio.description, 150)}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <PortfolioModal
                portfolio={selectedPortfolio}
                showModal={showModal}
                closeModal={closeModal}
            />
        </>
    );
}
