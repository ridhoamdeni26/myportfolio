import { useState } from 'react';
import SearchModal from './SearchModal'
import { Icon } from '@iconify/react';

function SearchHeader() {
    const [isSearchModalOpen, setSearchModalOpen] = useState(false);

    const openSearchModal = () => {
        setSearchModalOpen(true);
    };

    const closeSearchModal = () => {
        setSearchModalOpen(false);
    };


    return (
        <div>
            <button
                className="flex items-center xl:text-sm text-lg xl:text-slate-400 text-slate-800 dark:text-slate-300 px-1 rtl:space-x-reverse search-modal"
                onClick={openSearchModal}
            >
                <Icon icon="heroicons-outline:search" />
                <span className="xl:inline-block hidden ml-3">Search... </span>
            </button>

            <SearchModal showModal={isSearchModalOpen} closeModal={closeSearchModal} />
        </div>
    );
}

export default SearchHeader