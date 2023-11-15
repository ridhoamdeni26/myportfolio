import React from 'react'

export default function ExperienceDetail({ experiences }) {
    return (
        <ul className="ml-[-30px] flex flex-wrap">
            {experiences.map((experience) => (
                <li
                    className="mb-[40px] pl-[30px] float-left w-1/2"
                    key={experience.id}
                >
                    <img
                        className="popup_image"
                        src={experience.image}
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
                                {
                                    experience.description_short
                                }
                            </p>
                        </div>

                        <a
                            className="elisc_tm_full_link absolute inset-0 z-[5]"
                            href="#"
                            onClick={() => openModal(experience)}
                        ></a>
                    </div>
                </li>
            ))}
        </ul>
    )
}
