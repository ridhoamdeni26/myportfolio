import { motion } from 'framer-motion';

export default function ExperienceModal({ showModal, closeModal, experience }) {
    const fadeInVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <div>
            {showModal && (
                <>
                    <motion.div
                        className="modal-overlay"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInVariants}
                        transition={{ duration: 0.3 }}
                    ></motion.div>
                    <motion.dialog
                        id="my_modal_2"
                        className="modal"
                        open
                        initial="hidden"
                        animate="visible"
                        variants={fadeInVariants}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="modal-box bg-white">
                            <button
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                onClick={closeModal}
                            >
                                ✕
                            </button>
                            <img
                                className="m-auto"
                                src={`/storage/${experience.image}`}
                                alt=""
                            />
                            <div className="short w-full float-left flex justify-between mb-[16px]">
                                <div className="job">
                                    <div className="company-name text-[#A5A6FF] font-bold text-[18px] mb-[4px]">
                                        {
                                            experience.company_name
                                        }
                                    </div>
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
                    </motion.dialog>
                </>
            )}
        </div>
    )
}
