import React from 'react'

export default function ServiceModal({ showModal, closeModal }) {
    return (
        <div>
            {showModal && (
                <>
                    <div className="modal-overlay" onClick={closeModal}></div>
                    <dialog id="my_modal_2" className="modal" open>
                        <div className="modal-box">
                            <img
                                className="mb-5"
                                src=""
                                alt=""
                            />
                            <div className="text w-full float-left">
                                <p className="py-4">Press ESC key or click outside to close</p>
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
