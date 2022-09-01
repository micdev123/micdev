import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import { HiDownload } from 'react-icons/hi'
import { motion } from 'framer-motion';

import './Header.scss'

const Header = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delay: 1.8,
                staggerChildren: 0.3,
                staggerDirection: -1,
                ease: 'easeIn',
                duration: 0.8,
                delayChildren: 0.1,
            }
        }
    }

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }
    return (
        <div className='Header_Component'>
            <div className='main_container'>
                <div className='header_container'>
                    <motion.div
                        className='socials'
                        animate={{ opacity: [0, 1] }}
                        transition={{duration: 0.5, delay: 2.5 }}
                    >
                        <div className='icons'>
                            <a target="_blank" rel="noreferrer" href='https://github.com/micdev123'>
                                <AiFillGithub className='icon' />
                            </a>
                            <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/michael-l-bangura-2a52a724a'>
                                <AiFillLinkedin className='icon' />
                            </a>
                            <a target="_blank" rel="noreferrer" href='https://twitter.com/Mic__Dev'>
                                <AiOutlineTwitter className='icon' />
                            </a>
                            <a target="_blank" rel="noreferrer" href='https://www.instagram.com/mic__dev/'>
                                <AiFillInstagram className='icon' />
                            </a>
                        </div>
                        <div className='line'></div>
                    </motion.div>
                    <motion.div
                        className='text_content'
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.div className='Hello' variants={item}>
                            <span>👋</span>
                            <h3 className='title1'>Hello, my name is</h3>
                        </motion.div>
                        <motion.h1 className='title2' variants={item}>
                            Michael L Bangura.
                        </motion.h1>
                        <motion.h1 className='title3' variants={item}>
                            Front-End Software Engineer.
                        </motion.h1>
                        <motion.p className='info' variants={item}>
                            I'm passionate about delivering solid, crafted, performing, beautiful, functional, and quality front-end products with great user experiences.
                        </motion.p>
                        <motion.p className='info' variants={item}>
                            Occasionally, I do Design and Fullstack stuff as well.
                        </motion.p>
                        <motion.p className='info' variants={item}>
                            Currently I'm open for any new opportunity.
                        </motion.p>

                        <motion.div className='cta_btns' variants={item}>
                            <button className='hire_me'>Let's talk</button>
                            <div>
                                <HiDownload className='icon' />
                                <button className='resume'>Download resume</button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Header