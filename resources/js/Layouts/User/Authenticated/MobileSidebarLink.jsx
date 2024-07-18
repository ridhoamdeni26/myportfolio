import { Link, usePage } from "@inertiajs/react";

function MobileSidebarLink({ closeMenu }) {
    const { url } = usePage();
    return (
        <div className="menu_list w-full h-auto clear-both float-left mb-[50px]">
            <ul className="m-0 anchor_nav">
                <li className={`mb-[7px] ${url === '/' ? 'current' : ''}`}>
                    <Link href="/" className="text-dark-color" onClick={closeMenu}>
                        Home
                    </Link>
                </li>
                <li className={`mb-[7px] ${url === '/about-me' ? 'current' : ''}`}>
                    <Link href="/about-me" className="text-dark-color" onClick={closeMenu}>
                        About
                    </Link>
                </li>
                <li className={`mb-[7px] ${url === '/services' ? 'current' : ''}`}>
                    <Link href="/services" className="text-dark-color" onClick={closeMenu}>
                        Services
                    </Link>
                </li>
                <li className={`mb-[7px] ${url === '/portfolio' ? 'current' : ''}`}>
                    <Link href="/portfolio" className="text-dark-color" onClick={closeMenu}>
                        Portfolio
                    </Link>
                </li>
                <li className={`mb-[7px] ${url === '/contact-me' ? 'current' : ''}`}>
                    <Link href="/contact-me" className="text-dark-color" onClick={closeMenu}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default MobileSidebarLink