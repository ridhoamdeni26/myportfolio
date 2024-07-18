import React from 'react'
import { useState, useEffect } from 'react';
import MobileMenuSocial from './MobileMenuSocial';
import MobileSidebarLink from './MobileSidebarLink';
import { usePage } from '@inertiajs/react';

function MobileMenu() {
    const { profiles } = usePage().props;
    const [menuOpened, setMenuOpened] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    const toggleMenu = () => {
        setMenuOpened(!menuOpened);
    };

    const closeMenu = () => {
        setMenuOpened(false);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (!isMobile) {
        return null;
    }

    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;

    return (
        <>
            <div className={`elisc_tm_topbar fixed top-0 left-0 right-0 h-[50px] bg-white z-[15] ${menuOpened ? 'opened' : ''}`}>
                <div className="topbar_inner w-full h-full clear-both flex items-center justify-end pt-[10px] px-[20px]">
                    <div className="trigger">
                        <div className={`hamburger hamburger--slider ${menuOpened ? 'is-active' : ''}`} onClick={toggleMenu}>
                            <div className="hamburger-box">
                                <div className="hamburger-inner"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`elisc_tm_mobile_menu ${menuOpened ? 'opened' : ''}`}>
                <div className="inner relative w-full h-full text-right px-[20px] pt-[70px] pb-[20px]">
                    <div className="wrapper">
                        <div className="avatar w-[70px] h-[70px] relative float-right mb-[50px]">
                            <div className="image absolute inset-0 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(/storage/${profiles.image_icon})` }}></div>
                        </div>
                        <MobileSidebarLink closeMenu={closeMenu} />
                        <MobileMenuSocial />
                        <div className="copyright w-full float-left">
                            <p className="text-dark-color">Copyright &copy; 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileMenu