import Authenticated from "@/Layouts/User/Authenticated/Index";
import { TypeAnimation } from "react-type-animation";
import { Link, Head } from "@inertiajs/react";
import { useState } from 'react';

export default function About() {
    const [showModal, setShowModal] = useState(false);
    const [selectedExperience, setSelectedExperience] = useState(null);

    const experiences = [
        {
            id: 1,
            year: '-2018 - Present',
            job: 'Web Developer',
            place: 'Envato Market',
            description:
                'Website development is the process of building, programming, coding and maintaining websites and web applications.',
            image: '/assets/img/experience/1.jpg',
        },
    ];

    const openModal = (experience) => {
        setSelectedExperience(experience);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const typed = [
        "Fullstack Developer",
        1000,
        "Coder",
        1000,
        "Web Developer",
        1000,
        "Problem Solver",
        1000,
    ];

    return (
        <>
            <Authenticated>
                <Head title="About Me">
                </Head>
                <div className="elisc_tm_section">
                    <div className="elisc_tm_about w-full float-left pt-[130px]">
                        <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
                            <div className="elisc_tm_biography w-full float-left flex mb-[40px]">
                                <div className="left w-[40%]">
                                    <div className="title w-full float-left mb-[40px]">
                                        <span className="mini block uppercase font-medium mb-[12px]">
                                            - Nice to meet you!
                                        </span>
                                        <h3 className="name font-extrabold text-[40px]">
                                            Ridho Amdeni
                                        </h3>
                                        <span className="job font-semibold text-[20px] text-dark-color">
                                            <span className="cd-headline clip">
                                                <TypeAnimation
                                                    sequence={typed}
                                                    wrapper="span"
                                                    speed={{
                                                        type: "keyStrokeDelayInMs",
                                                        value: 400,
                                                    }}
                                                    repeat={Infinity}
                                                />
                                            </span>
                                        </span>
                                    </div>
                                    <div className="info w-full float-left">
                                        <ul>
                                            <li className="mr-[40px] mb-[20px] inline-block">
                                                <span className="block uppercase underline">
                                                    Age
                                                </span>
                                                <span className="block font-inter font-bold text-dark-color">
                                                    28
                                                </span>
                                            </li>
                                            <li className="mr-[40px] mb-[20px] inline-block">
                                                <span className="block uppercase underline">
                                                    Born In
                                                </span>
                                                <span className="block font-inter font-bold text-dark-color">
                                                    Pekanbaru, Indonesia
                                                </span>
                                            </li>
                                            <li className="mr-[40px] mb-[20px] inline-block">
                                                <span className="block uppercase underline">
                                                    Mail
                                                </span>
                                                <span className="block font-inter font-bold text-dark-color">
                                                    secretridho26@gmail.com
                                                </span>
                                            </li>
                                            <li className="mr-[40px] mb-[20px] inline-block">
                                                <span className="block uppercase underline">
                                                    Phone
                                                </span>
                                                <span className="block font-inter font-bold text-dark-color">
                                                    +6281365200863
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="elisc_tm_button transition_link">
                                        <Link href="">Got a project?</Link>
                                    </div>
                                </div>
                                <div className="right w-[60%]">
                                    <div className="text w-full float-left mb-[44px]">
                                        <p className="mb-[30px]">
                                            Hello there! My name is{" "}
                                            <span className="text-yellow-color">
                                                Ridho Amdeni
                                            </span>
                                            . I am a Fullstack Developer with
                                            extensive experience in developing
                                            comprehensive, high-performance
                                            software. I have a deep
                                            understanding of web and application
                                            technology, from the front end to
                                            the back end. I believe that
                                            software development is both an art
                                            and a science, and I strive to
                                            create exceptional user experiences
                                            by combining attractive aesthetic
                                            design with powerful functionality.
                                        </p>
                                        <p>
                                            I am a skilled problem solver and
                                            always ready to face a challenge. I
                                            have the ability to design, develop
                                            and manage complex systems, as well
                                            as ensure security, scalability and
                                            optimal performance. I also focus
                                            heavily on software testing and
                                            maintenance, ensuring that the
                                            products I produce always work well.
                                        </p>
                                        <p>
                                            Additionally, I have skills in
                                            various programming languages and
                                            frameworks, such as JavaScript,
                                            React, Node.js, Laravel, Code
                                            Igniter.. I am always up-to-date
                                            with the latest technological
                                            developments and ready to adopt
                                            tools and best practices that allow
                                            me to remain competitive in the
                                            ever-changing software development
                                            industry.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="elisc_tm_counter w-full float-left mb-[90px]">
                                <ul className="ml-[-30px]">
                                    <li className="mb-[30px] float-left w-1/3 pl-[30px]">
                                        <div className="list_inner w-full float-left relative text-center py-[60px] px-[20px] rounded-[4px] overflow-hidden bg-[#D3F4EC]">
                                            <h3 className="text-[40px] mb-[7px]">
                                                4+
                                            </h3>
                                            <span className="font-medium font-karla uppercase">
                                                Years of Experience
                                            </span>
                                        </div>
                                    </li>
                                    <li className="mb-[30px] float-left w-1/3 pl-[30px]">
                                        <div className="list_inner w-full float-left relative text-center py-[60px] px-[20px] rounded-[4px] overflow-hidden bg-[#FCE8D4]">
                                            <h3 className="text-[40px] mb-[7px]">
                                                10+
                                            </h3>
                                            <span className="font-medium font-karla uppercase">
                                                Projects Completed
                                            </span>
                                        </div>
                                    </li>
                                    <li className="mb-[30px] float-left w-1/3 pl-[30px]">
                                        <div className="list_inner w-full float-left relative text-center py-[60px] px-[20px] rounded-[4px] overflow-hidden bg-[#E3F9E0]">
                                            <h3 className="text-[40px] mb-[7px]">
                                                10+
                                            </h3>
                                            <span className="font-medium font-karla uppercase">
                                                Happy Clients
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="elisc_tm_experience w-full float-left bg-[#F3F9FF] pt-[100px] pb-[70px] px-0">
                            <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
                                <div className="elisc_tm_title w-full float-left">
                                    <span className="w-full float-left font-medium uppercase inline-block mb-[12px]">
                                        - Experience
                                    </span>
                                    <h3 className="text-[40px] font-extrabold">
                                        Everything about me!
                                    </h3>
                                </div>
                                <div className="list w-full float-left mt-[40px]">
                                    <ul className="ml-[-30px] flex flex-wrap">
                                        {experiences.map((experience) => (
                                            <li className="mb-[40px] pl-[30px] float-left w-1/2" key={experience.id}>
                                                <img
                                                    className="popup_image"
                                                    src={experience.image}
                                                    alt=""
                                                />
                                                <div className="list_inner w-full float-left clear-both bg-white rounded-[4px] px-[70px] py-[45px] relative">
                                                    <div className="short w-full float-left flex justify-between mb-[16px]">
                                                        <div className="job">
                                                            <span className="text-yellow-color font-medium inline-block mb-[4px]">
                                                                {experience.year}
                                                            </span>
                                                            <h3 className="text-[20px]">
                                                                {experience.job}
                                                            </h3>
                                                        </div>
                                                        <div className="place">
                                                            <span className="font-medium font-inter">
                                                                {experience.place}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="text w-full float-left">
                                                        <p className="opacity-[0.7]">
                                                            {experience.description}
                                                        </p>
                                                    </div>

                                                    <a class="elisc_tm_full_link absolute inset-0 z-[5]" href="#" onClick={() => openModal(experience)}></a>

                                                    <div className="hidden_details">
                                                        <div className="descriptions">
                                                            <p>
                                                                Elisc is a leading
                                                            </p>
                                                            <p>
                                                                In todays digital
                                                            </p>
                                                            <p>
                                                                Thats why more
                                                                companies are not
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    {showModal && (
                                        <div className="fixed top-0 left-0 z-[1000] w-full h-full overflow-hidden bg-gray-700">
                                            <div className="absolute top-[100px] left-[50%] transform -translate-x-[50%] bg-white w-[90%] rounded-[8px] overflow-hidden">
                                                <button
                                                    className="top-[-40px] right-[-40px] w-[40px] h-[40px] bg-red-500 text-white rounded-full text-[32px] font-bold hover:bg-red-600 transition duration-300"
                                                    onClick={closeModal}
                                                >
                                                    X
                                                </button>
                                                <img
                                                    className="popup_image"
                                                    src={selectedExperience.image}
                                                    alt=""
                                                />
                                                <div className="list_inner w-full float-left clear-both bg-white rounded-[4px] px-[70px] py-[45px] relative">
                                                    <div className="short w-full float-left flex justify-between mb-[16px]">
                                                        <div className="job">
                                                            <h4>{selectedExperience.job}</h4>
                                                            <p>{selectedExperience.place}</p>
                                                        </div>
                                                        <div className="time">
                                                            <h4>{selectedExperience.year}</h4>
                                                        </div>
                                                    </div>
                                                    <p>{selectedExperience.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Authenticated>
        </>
    );
}
