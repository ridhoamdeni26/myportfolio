import React from 'react'

export default function ExperienceModal({ showModal, closeModal, experience }) {
    return (
        <div>
            {showModal && (
                <>
                    <div className="modal-overlay"></div>
                    <dialog id="my_modal_3" className="modal" open>
                        <div className="modal-box">
                            <form method="dialog">
                                <button
                                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                    onClick={closeModal}
                                >
                                    ✕
                                </button>
                            </form>
                            <img
                                className="mb-5"
                                src={experience.image}
                                alt=""
                            />
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
                                    {experience.description_long}
                                </p>
                            </div>
                        </div>
                    </dialog>
                </>
            )}
        </div>
    )
}
