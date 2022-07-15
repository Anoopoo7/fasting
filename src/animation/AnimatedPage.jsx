import React from 'react';
import { motion } from "framer-motion";

const animation_up = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 }
}

function AnimatedPage({ children }) {
    return (
        <motion.div variants={animation_up} initial="initial" animate="animate" exit="exit">
            {children}
        </motion.div>
    );
}

export default AnimatedPage;