import { Head } from "@inertiajs/react";

export default function Index() {
    return (
        <>
            <Head title="My Portfolio">
                <script src="assets/js/jquery.js"></script>
                <script src="assets/js/plugins.js"></script>
                <script src="assets/js/init.js"></script>
            </Head>
            <div
                class="elisc_tm_all_wrap w-full h-auto clear-both float-left relative"
                data-magic-cursor="show"
                data-enter="fadeInLeft"
                data-exit=""
            ></div>
            {/* SideBar */}
            <div class="elisc_tm_sidebar w-[370px] h-[100vh] fixed left-0 top-0 border-solid border-[rgba(85,82,124,.1)] border-r">
                <div class="sidebar_inner w-full float-left h-auto clear-both text-center">
                    <div class="author w-full float-left pt-[60px]">
                        <div class="image relative w-[118px] inline-block">
                            <img
                                class="relative opacity-0 min-w-full"
                                src="assets/img/thumbs/1-1.jpg"
                                alt=""
                            />
                            <div
                                class="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
                                data-img-url="assets/img/about/1.jpg"
                            ></div>
                        </div>
                        <div class="name w-full float-left mt-[-19px]">
                            <h3>
                                <span>
                                    Ridho Amdeni
                                    <span class="back">Ridho Amdeni</span>
                                </span>
                            </h3>
                        </div>
                    </div>
                    <div class="menu scrollable w-full float-left">
                        <ul class="transition_link h-full flex items-center justify-center flex-col">
                            <li class="active mb-[15px]">
                                <a href="#home">Home</a>
                            </li>
                            <li class="mb-[15px]">
                                <a href="#about">About</a>
                            </li>
                            <li class="mb-[15px]">
                                <a href="#service">Services</a>
                            </li>
                            <li class="mb-[15px]">
                                <a href="#portfolio">Portfolio</a>
                            </li>
                            <li class="mb-[15px]">
                                <a href="#news">Blog</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div class="copyright absolute bottom-[50px]">
                        <div class="social w-full float-left mb-[7px]">
                            <ul>
                                <li class="mr-[3px] inline-block">
                                    <a
                                        class="w-[40px] h-[40px] inline-block relative rounded-full text-dark-color"
                                        href="#"
                                    >
                                        <i class="icon-facebook-1 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-[16px]"></i>
                                    </a>
                                </li>
                                <li class="mr-[3px] inline-block">
                                    <a
                                        class="w-[40px] h-[40px] inline-block relative rounded-full text-dark-color"
                                        href="#"
                                    >
                                        <i class="icon-twitter-1 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-[16px]"></i>
                                    </a>
                                </li>
                                <li class="inline-block">
                                    <a
                                        class="w-[40px] h-[40px] inline-block relative rounded-full text-dark-color"
                                        href="#"
                                    >
                                        <i class="icon-linkedin-1 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-[16px]"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="text py-0 px-[50px]">
                            <p>
                                Copyright © 2023 Ridho Amdeni. All rights
                                reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Part */}
            <div class="elisc_tm_mainpart w-full min-h-[100vh] clear-both float-left pl-[370px]">
                <div class="mainpart_inner w-full min-h-[100vh] clear-both float-left relative">
                    {/* <!-- HOME --> */}
                    <div class="elisc_tm_section animated" id="home">
                        <div class="elisc_tm_home w-full min-h-[100vh] clear-both float-left bg-[#EFFBF8]">
                            <div class="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
                                <div class="details w-full min-h-[100vh] flex items-center">
                                    <div class="left w-1/2">
                                        <div class="title w-full float-left mb-[21px]">
                                            <h3 class="font-extrabold text-[60px] leading-[70px]">
                                                Hi, I'm{" "}
                                                <span class="text-blue-color">
                                                    Elisc!
                                                </span>
                                            </h3>
                                            <h3 class="font-extrabold text-[60px] leading-[70px]">
                                                <span class="cd-headline clip">
                                                    <span class="blc">
                                                        Creative
                                                    </span>
                                                    <span class="cd-words-wrapper">
                                                        <b class="is-visible">
                                                            Designer
                                                        </b>
                                                        <b>Coder</b>
                                                        <b>Player</b>
                                                    </span>
                                                </span>
                                            </h3>
                                            <h3 class="font-extrabold text-[60px] leading-[70px]">
                                                Based in Florida
                                            </h3>
                                        </div>
                                        <div class="subtitle wfll max-w-[80%] float-left mb-[40px]">
                                            <p>
                                                I'm a Florida based web designer
                                                &amp; front‑end developer with{" "}
                                                <span class="text-blue-color">
                                                    10+ years
                                                </span>{" "}
                                                of experience
                                            </p>
                                        </div>
                                        <div class="buttons w-full float-left flex items-center mb-[150px]">
                                            <div class="elisc_tm_button transition_link">
                                                <a href="#portfolio">
                                                    Got a project?
                                                </a>
                                            </div>
                                            <div
                                                class="elisc_tm_button transition_link"
                                                data-style="border"
                                            >
                                                <a href="#contact">
                                                    Let's talk
                                                </a>
                                            </div>
                                        </div>
                                        <div class="info w-full float-left">
                                            <ul class="relative">
                                                <li class="pl-[15px]">
                                                    <a
                                                        class="text-[#130F49] font-semibold text-[18px]"
                                                        href="tel:+77 022 444 05 05"
                                                    >
                                                        +77 022 444 05 05
                                                    </a>
                                                </li>
                                                <li class="pl-[15px]">
                                                    <a
                                                        class="text-[#130F49] font-semibold text-[18px]"
                                                        href="mailto:support@elisc.com"
                                                    >
                                                        support@elisc.com
                                                    </a>
                                                </li>
                                                <li class="pl-[15px]">
                                                    <a
                                                        class="href_location text-[#130F49] font-semibold text-[18px]"
                                                        href="#"
                                                    >
                                                        Ave Street Avenue, New
                                                        York
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="right w-1/2 pl-[50px]">
                                        <img
                                            src="assets/img/about/2.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /HOME --> */}
                </div>
            </div>
        </>
    );
}
