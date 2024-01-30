import { motion } from 'framer-motion';

export default function AboutmeDetail() {
    const componentVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };
    return (
        <motion.div
            className="right w-[60%]"
            initial="hidden"
            animate="visible"
            variants={componentVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="text w-full float-left mb-[44px]">
                <p className="mb-[30px]">
                    Hello there! My name is{" "}
                    <span className="text-yellow-color">
                        Ridho Amdeni
                    </span>
                    . I am a Fullstack Developer with
                    extensive experience in developing
                    comprehensive, high-performance
                    software. I have a deep
                    understanding of web and application
                    technology, from the front end to
                    the back end. I believe that
                    software development is both an art
                    and a science, and I strive to
                    create exceptional user experiences
                    by combining attractive aesthetic
                    design with powerful functionality.
                </p>
                <p>
                    I am a skilled problem solver and
                    always ready to face a challenge. I
                    have the ability to design, develop
                    and manage complex systems, as well
                    as ensure security, scalability and
                    optimal performance. I also focus
                    heavily on software testing and
                    maintenance, ensuring that the
                    products I produce always work well.
                </p>
                <p>
                    Additionally, I have skills in
                    various programming languages and
                    frameworks, such as JavaScript,
                    React, Node.js, Laravel, Code
                    Igniter.. I am always up-to-date
                    with the latest technological
                    developments and ready to adopt
                    tools and best practices that allow
                    me to remain competitive in the
                    ever-changing software development
                    industry.
                </p>
            </div>
        </motion.div>
    )
}
