import { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

function SearchModal({ showModal, closeModal }) {
    const modalRef = useRef();
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                // Klik di luar modal, tutup modal
                closeModal();
            }
        };

        // Tambahkan event listener saat komponen dimount
        document.addEventListener('mousedown', handleClickOutside);

        // Hapus event listener saat komponen di-unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [closeModal]);
    return (
        <div>
            {showModal && (
                <>
                    <div className="modal modal-bottom sm:modal-middle fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto block" tabIndex="-1" role="dialog" aria-labelledby="searchModalLabel" aria-hidden="true" open>
                        <div className="modal-dialog relative w-auto pointer-events-none top-1/4">
                            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-slate-900 bg-clip-padding rounded-md outline-none text-current" ref={modalRef}>
                                <form>
                                    <div class="relative">
                                        <div className='dark'>
                                            <input
                                                type="text"
                                                class="form-control !py-3 !pr-12"
                                                placeholder="Search"
                                            />
                                            <button
                                                class="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-full border-l text-xl border-l-slate-600 text-slate-300 flex items-center justify-center bg-slate-900"
                                            >
                                                <Icon
                                                    icon="heroicons-solid:search"
                                                ></Icon>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default SearchModal