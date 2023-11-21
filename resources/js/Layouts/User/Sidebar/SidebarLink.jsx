import { Link, usePage } from "@inertiajs/react";
export default function SidebarLink() {
    const { url } = usePage();
    return (
        <div className="menu scrollable w-full float-left">
            <ul className="transition_link h-full flex items-center justify-center flex-col">
                <li className="active mb-[15px]">
                    <Link href="/" className={url === "/" ? "active" : ""}>
                        Home
                    </Link>
                </li>
                <li className="mb-[15px]">
                    <Link
                        href="/about-me"
                        className={url === "/about-me" ? "active" : ""}
                    >
                        About Me
                    </Link>
                </li>
                <li className="mb-[15px]">
                    <Link
                        href="/services"
                        className={url === "/services" ? "active" : ""}
                    >
                        Services
                    </Link>
                </li>
                <li className="mb-[15px]">
                    <Link
                        href="/portfolio"
                        className={url === "/portfolio" ? "active" : ""}
                    >
                        Portfolio
                    </Link>
                </li>
                <li className="mb-[15px]">
                    <a href="#news">Blog</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    );
}
