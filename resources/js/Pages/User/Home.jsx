import { TypeAnimation } from "react-type-animation";
import { Link } from "@inertiajs/react";

export default function Home({ name, country, phone, email, address, typed }) {
    return (
        <div className="elisc_tm_section animated" id="home">
            <div className="elisc_tm_home w-full min-h-[100vh] clear-both float-left bg-[#EFFBF8]">
                <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
                    <div className="details w-full min-h-[100vh] flex items-center">
                        <div className="left w-1/2">
                            <div className="title w-full float-left mb-[21px]">
                                <h3 className="font-extrabold text-[60px] leading-[70px]">
                                    Hi, I'm{" "}
                                    <span className="text-blue-color">
                                        {name}
                                    </span>
                                </h3>
                                <h3 className="font-extrabold text-[60px] leading-[70px]">
                                    <span className="cd-headline clip">
                                        <TypeAnimation
                                            sequence={typed}
                                            wrapper="span"
                                            speed={{
                                                type: "keyStrokeDelayInMs",
                                                value: 400,
                                            }}
                                            repeat={Infinity}
                                        />
                                    </span>
                                </h3>
                                <h3 className="font-extrabold text-[60px] leading-[70px]">
                                    Based in {country}
                                </h3>
                            </div>
                            <div className="subtitle wfll max-w-[80%] float-left mb-[40px]">
                                <p>
                                    I'm a {country} based web designer &amp;
                                    fullstack developer with{" "}
                                    <span className="text-blue-color">
                                        5+ years
                                    </span>{" "}
                                    of experience
                                </p>
                            </div>
                            <div className="buttons w-full float-left flex items-center mb-[120px]">
                                <div className="elisc_tm_button transition_link">
                                    <Link href="">Got a project?</Link>
                                </div>
                                <div
                                    className="elisc_tm_button transition_link"
                                    data-style="border"
                                >
                                    <Link href="">Let's talk</Link>
                                </div>
                            </div>
                            <div className="info w-full float-left">
                                <ul className="relative">
                                    <li className="pl-[15px]">
                                        <div className="text-[#130F49] font-semibold text-[18px]">
                                            {phone}
                                        </div>
                                    </li>
                                    <li className="pl-[15px]">
                                        <div className="text-[#130F49] font-semibold text-[18px]">
                                            {email}
                                        </div>
                                    </li>
                                    <li className="pl-[15px]">
                                        <div className="text-[#130F49] font-semibold text-[18px]">
                                            {address}, {country}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="right w-1/2 pl-[50px]">
                            <img src="assets/img/about/2.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
