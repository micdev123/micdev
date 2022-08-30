import React from 'react'
import { motion } from 'framer-motion';

const MotionWrap = (Component, classNames) => function HOC() {
    return (
        <motion.div
        initial={{y: 100, opacity: 0 }}
        whileInView={{y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`${classNames} app__flex`}
        >
            <Component />
        </motion.div>
    )
}

export default MotionWrap