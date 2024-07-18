import { motion } from 'framer-motion';

function HomeRight({ image_homepage }) {
    return (
        <motion.div
            className="right w-1/2 pl-[50px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
        >
            <motion.img
                src={`/storage/${image_homepage}`}
                alt=""
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            />
        </motion.div>
    );
}

export default HomeRight