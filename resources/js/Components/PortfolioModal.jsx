import { motion } from 'framer-motion';
export default function PortfolioModal({ showModal, closeModal, portfolio }) {
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
                        <div className="modal-box w-11/12 max-w-5xl p-10">
                            <img
                                className="mb-5 mx-auto rounded-xl"
                                src={portfolio.image_description1}
                                alt=""
                            />
                            <div class="details w-full mb-3">
                                <span class="text-[#FE6F6B] category inline-block mb-[7px]">
                                    Modalbox
                                </span>
                                <h3 class="title">
                                    <div className="text-[#28767A] line_effect">
                                        {portfolio.title}
                                    </div>
                                </h3>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div class="md:col-span-2">
                                    <div class="textbox pr-4 text-slate-400">
                                        {portfolio.description}
                                    </div>
                                </div>

                                <div class="md:col-span-1">
                                    <div class="mb-5 text-left">
                                        <div class="text-[#28767A] text-lg font-bold">
                                            Client
                                        </div>
                                        <p class="text-md text-slate-400">
                                            {portfolio.client_name}
                                        </p>
                                    </div>

                                    <div class="mb-5 text-left">
                                        <div class="text-[#28767A] text-lg font-bold">
                                            Category
                                        </div>
                                        <p class="text-md text-slate-400">
                                            {portfolio.category}
                                        </p>
                                    </div>

                                    <div class="mb-5 text-left">
                                        <div class="text-[#28767A] text-lg font-bold">
                                            Date
                                        </div>
                                        <p class="text-md text-slate-400">
                                            {portfolio.date}
                                        </p>
                                    </div>

                                    <div class="mb-5 text-left">
                                        <div class="text-[#28767A] text-lg font-bold">
                                            website
                                        </div>
                                        <p class="text-md text-slate-400"></p>
                                    </div>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 gap-4 mb-5">
                                <div class="md:col-span-1 flex items-center justify-center">
                                    <div class="my_image">
                                        <img
                                            className="main rounded-lg mx-auto"
                                            src={portfolio.image_description1}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="md:col-span-2">
                                    <div class="grid grid-cols-2 gap-4">
                                        <div class="my_image">
                                            <img
                                                class="main rounded-lg mx-auto"
                                                src={
                                                    portfolio.image_description2
                                                }
                                                alt=""
                                            />
                                        </div>

                                        <div class="my_image">
                                            <img
                                                class="main rounded-lg mx-auto"
                                                src={
                                                    portfolio.image_description3
                                                }
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button onClick={closeModal}>close</button>
                        </form>
                    </motion.dialog>
                </>
            )}
        </div>
    );
}
