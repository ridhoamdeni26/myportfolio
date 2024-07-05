import { useState } from "react";
import Slider from "react-slick";
import PortfolioModal from "./PortfolioModal";
import { motion } from 'framer-motion';

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
        dots: portfolio.length > 2,
        lazyLoad: true,
        infinite: true,
        slidesToShow: Math.min(3, portfolio.length),
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };

    const fadeInVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const imageHoverVariants = {
        hover: { scale: 1.1 },
        tap: { scale: 0.9 },
    };

    return (
        <>
            <div className="portfolio_list w-full float-left mt-[40px] mb-[120px]">
                <Slider {...settings}>
                    {portfolio.map((portfolio) => (
                        <motion.div
                            key={portfolio.id}
                            className="cursor-grab"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariants}
                        >
                            <div className="carousel-item relative rounded-[4px] overflow-hidden mb-[25px]">
                                <motion.img
                                    src={`/storage/${portfolio.image_thumbnail}`}
                                    className="rounded-box"
                                    alt=""
                                    whileHover="hover"
                                    whileTap="tap"
                                    variants={imageHoverVariants}
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
                        </motion.div>
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
