import React from 'react';
import Authenticated from "@/Layouts/User/Authenticated/Index";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import ExperienceModal from "@/Components/ExperienceModal";
import AboutmeProfile from "@/Components/AboutmeProfile";
import AboutmeDetail from "@/Components/AboutmeDetail";
import AboutmeExperience from "@/Components/AboutmeExperience";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimateAbout from '@/Components/AnimateAbout';

export default function About({ experiences, profiles, statistics, typed }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedExperience, setSelectedExperience] = useState(null);

    const convertHtmlToPlainText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent || "";
    };

    const truncateText = (text, maxLength) => {
        return text.length > maxLength
            ? `${text.slice(0, maxLength)}...`
            : text;
    };

    const [showFullDescription] = useState(false);

    const openModal = (experience) => {
        setSelectedExperience(experience);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedExperience(null);
        setShowModal(false);
    };

    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const titleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <>
            <Authenticated>
                <Head title="About Me"></Head>
                <div className="elisc_tm_section">
                    <div className="elisc_tm_about w-full float-left pt-[130px]">
                        <AnimateAbout />
                        <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">

                            <div className="elisc_tm_biography w-full float-left flex mb-[40px]">
                                <AboutmeProfile
                                    typed={typed}
                                    fullname={profiles.fullname}
                                    age={profiles.age}
                                    city={profiles.city}
                                    country={profiles.country}
                                    email={profiles.email}
                                    phone={profiles.phone}
                                />
                                <AboutmeDetail />
                            </div>
                            <motion.div
                                className="elisc_tm_counter w-full float-left mb-[40px]"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <AboutmeExperience statistics={statistics} />
                            </motion.div>
                        </div>
                        <div className="elisc_tm_experience w-full float-left bg-[#F3F9FF] pt-[35px] pb-[70px] px-0">
                            <motion.div
                                className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]"
                                ref={ref}
                                initial="hidden"
                                animate={controls}
                                variants={containerVariants}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                            >
                                <motion.div
                                    className="elisc_tm_title w-full float-left"
                                    variants={titleVariants}
                                >
                                    <span className="w-full float-left font-medium uppercase inline-block mb-[12px]">
                                        - Experience
                                    </span>
                                    <h3 className="text-[40px] font-extrabold">
                                        Everything about me!
                                    </h3>
                                </motion.div>
                                <div className="list w-full float-left mt-[40px]">
                                    <motion.ul
                                        className="ml-[-30px] flex flex-wrap"
                                        variants={containerVariants}
                                    >
                                        {experiences.map((experience) => (
                                            <motion.li
                                                className="mb-[40px] pl-[30px] float-left w-1/2"
                                                key={experience.id}
                                                variants={containerVariants}
                                            >
                                                <img
                                                    className="popup_image"
                                                    src={`/storage/${experience.image}`}
                                                    alt=""
                                                />
                                                <div className="list_inner w-full float-left clear-both bg-white rounded-[4px] px-[70px] py-[45px] relative">
                                                    <div className="short w-full float-left flex justify-between mb-[16px]">
                                                        <div className="job">
                                                            <span className="text-yellow-color font-medium inline-block mb-[4px]">
                                                                {
                                                                    experience.year
                                                                }
                                                            </span>
                                                            <h3 className="text-[20px]">
                                                                {experience.job}
                                                            </h3>
                                                        </div>
                                                        <div className="place">
                                                            <span className="font-medium font-inter">
                                                                {
                                                                    experience.place
                                                                }
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="text w-full float-left">
                                                        <p className="opacity-[0.7]">
                                                            {showFullDescription
                                                                ? convertHtmlToPlainText(
                                                                    experience.description_short
                                                                )
                                                                : truncateText(
                                                                    convertHtmlToPlainText(
                                                                        experience.description_short
                                                                    ),
                                                                    250
                                                                )}
                                                        </p>
                                                    </div>

                                                    <a
                                                        className="elisc_tm_full_link absolute inset-0 z-[5]"
                                                        href="#"
                                                        onClick={() => openModal(experience)}
                                                    ></a>
                                                </div>
                                            </motion.li>
                                        ))}
                                    </motion.ul>

                                    <ExperienceModal experience={selectedExperience} showModal={showModal} closeModal={closeModal} />

                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </Authenticated>
        </>
    );
}
