import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AboutmeExperience({ statistics }) {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const listItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div ref={ref}>
            <motion.ul
                className="your-list-styles"
                initial="hidden"
                animate={controls}
                variants={listItemVariants}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                {statistics.map((item, index) => (
                    <motion.li key={index} className="mb-[30px] float-left w-1/3 pl-[30px]">
                        <motion.div className={`list_inner w-full float-left relative text-center py-[60px] px-[20px] rounded-[4px] overflow-hidden bg-[${item.color}]`}>
                            <h3 className="text-[40px] mb-[7px]">{item.number}</h3>
                            <span className="font-medium font-karla uppercase">{item.label}</span>
                        </motion.div>
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    )
}
