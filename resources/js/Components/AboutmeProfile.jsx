import { TypeAnimation } from "react-type-animation";
import { Link } from "@inertiajs/react";
import { motion } from 'framer-motion';


export default function AboutmeProfile({ typed, fullname, age, city, country, email, phone }) {
    const componentVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            className="left w-[40%]"
            initial="hidden"
            animate="visible"
            variants={componentVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="title w-full float-left mb-[40px]">
                <span className="mini block uppercase font-medium mb-[12px]">
                    - Nice to meet you!
                </span>
                <h3 className="name font-extrabold text-[40px]">
                    {fullname}
                </h3>
                <span className="job font-semibold text-[20px] text-dark-color">
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
                </span>
            </div>
            <div className="info w-full float-left">
                <ul>
                    <li className="mr-[40px] mb-[20px] inline-block">
                        <span className="block uppercase underline">
                            Age
                        </span>
                        <span className="block font-inter font-bold text-dark-color">
                            {age}
                        </span>
                    </li>
                    <li className="mr-[40px] mb-[20px] inline-block">
                        <span className="block uppercase underline">
                            Born In
                        </span>
                        <span className="block font-inter font-bold text-dark-color">
                            {city}, {country}
                        </span>
                    </li>
                    <li className="mr-[40px] mb-[20px] inline-block">
                        <span className="block uppercase underline">
                            Mail
                        </span>
                        <span className="block font-inter font-bold text-dark-color">
                            {email}
                        </span>
                    </li>
                    <li className="mr-[40px] mb-[20px] inline-block">
                        <span className="block uppercase underline">
                            Phone
                        </span>
                        <span className="block font-inter font-bold text-dark-color">
                            {phone}
                        </span>
                    </li>
                </ul>
            </div>
            <div className="elisc_tm_button transition_link">
                <Link href="">Got a project?</Link>
            </div>
        </motion.div>
    )
}
