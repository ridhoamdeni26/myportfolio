import { TypeAnimation } from "react-type-animation";
import { Link } from "@inertiajs/react";
import { motion } from 'framer-motion';

function HomeLeft({ name, country, phone, email, address, typed }) {
    return (
        <motion.div
            className="left w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="title w-full float-left mb-[21px]">
                <h3 className="font-extrabold text-[60px] leading-[70px]">
                    Hi, I'm{' '}
                    <span className="text-blue-color">{name}</span>
                </h3>
                <h3 className="font-extrabold text-[60px] leading-[70px]">
                    <span className="cd-headline clip">
                        <TypeAnimation
                            sequence={typed}
                            wrapper="span"
                            speed={{
                                type: 'keyStrokeDelayInMs',
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
            <motion.div
                className="subtitle w-full max-w-[80%] float-left mb-[40px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <p>
                    I'm a {country} based web designer &amp;
                    fullstack developer with{' '}
                    <span className="text-blue-color">5+ years</span> of experience
                </p>
            </motion.div>
            <motion.div
                className="buttons w-full float-left flex items-center mb-[120px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <motion.div
                    className="elisc_tm_button transition_link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Link href="">Got a project?</Link>
                </motion.div>
                <motion.div
                    className="elisc_tm_button transition_link"
                    data-style="border"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Link href="">Let's talk</Link>
                </motion.div>
            </motion.div>
            <motion.div
                className="info w-full float-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
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
            </motion.div>
        </motion.div>
    );
}

export default HomeLeft