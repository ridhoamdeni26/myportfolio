export default function ServiceModal({ service, showModal, closeModal }) {
    const convertHtmlToPlainText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent || "";
    };
    return (
        <div>
            {showModal && (
                <>
                    <div className="modal-overlay"></div>
                    <dialog id="my_modal_2" className="modal" open>
                        <div className="modal-box">
                            <img className="mb-5" src={service.image} alt="" />
                            <div className="text w-full float-left">
                                <h3 className="text-[20px]">{service.title}</h3>
                                <p className="py-4">
                                    {convertHtmlToPlainText(
                                        service.description
                                    )}
                                </p>
                            </div>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button onClick={closeModal}>close</button>
                        </form>
                    </dialog>
                </>
            )}
        </div>
    );
}
