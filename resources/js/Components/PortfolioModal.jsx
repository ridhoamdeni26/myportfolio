

export default function PortfolioModal({ showModal, closeModal, }) {
    return (
        <div>
            {showModal && (
                <>
                    <div className="modal-overlay"></div>
                    <dialog id="my_modal_2" className="modal" open>
                        <div className="modal-box w-11/12 max-w-5xl p-10">
                            <img className="mb-5 mx-auto rounded-xl" src="assets/img/portfolio/4.jpg" alt="" />
                            <div class="details w-full mb-3">
                                <span class="text-[#FE6F6B] category inline-block mb-[7px]">Modalbox</span>
                                <h3 class="title">
                                    <div className="text-[#28767A] line_effect">Beautiful Boat</div></h3>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div class="md:col-span-2">
                                    <div class="textbox pr-4 text-slate-400">
                                        <p>We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible. Building mockups strikes the ideal balance ease of modification. Building mockups strikes the ideal balance ease of modification.</p>
                                        <p>Mockups are useful both for the creative phase of the project - for instance when you're trying to figure out your user flows or the proper visual hierarchy - and the production phase when they will represent the target product. Building mockups strikes the ideal balance ease of modification.</p>
                                    </div>
                                </div>

                                <div class="md:col-span-1">
                                    <div class="mb-5 text-left">
                                        <div class="text-[#28767A] text-lg font-bold">Client</div>
                                        <p class="text-md text-slate-400">Alvaro Morata</p>
                                    </div>

                                    <div class="mb-5 text-left">
                                        <div class="text-[#28767A] text-lg font-bold">Category</div>
                                        <p class="text-md text-slate-400">Modalbox</p>
                                    </div>

                                    <div class="mb-5 text-left">
                                        <div class="text-[#28767A] text-lg font-bold">Date</div>
                                        <p class="text-md text-slate-400">April 10, 2023</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button onClick={closeModal}>close</button>
                        </form>
                    </dialog>
                </>
            )}
        </div>
    )
}
