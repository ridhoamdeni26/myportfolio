import { TypeAnimation } from "react-type-animation";
import { Link } from "@inertiajs/react";
import { motion } from 'framer-motion';

function HomeLeft({ name, country, phone, email, address, typed }) {
    const mailtoLink = `mailto:${email}?subject=Project%20Inquiry%20from%20${name}&body=Hi%20${name},%0D%0A%0D%0AI%20am%20interested%20in%20hiring%20your%20services%20for%20a%20web%20development%20project.%20Please%20find%20below%20some%20additional%20information%20about%20my%20project%20requirements:%0D%0A%0D%0A[Add%20details%20about%20your%20project%20here]%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20you.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]`;

    const startYear = '2018'
    const calculateExperience = (startYear) => {
        const currentYear = new Date().getFullYear();
        const experience = currentYear - startYear;
        return experience;
    };

    const yearsOfExperience = calculateExperience(startYear);

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
                    <span className="text-blue-color">{yearsOfExperience}+ years</span> of experience
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
                    <a href={mailtoLink}>Got a project?</a>
                </motion.div>
                <motion.div
                    className="elisc_tm_button transition_link"
                    data-style="border"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Link href="/contact-me">Let's talk</Link>
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