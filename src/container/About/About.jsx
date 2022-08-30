import React from 'react'
import { HiDownload } from 'react-icons/hi'
import { motion } from 'framer-motion';

import { MotionWrap } from '../../wrapper';
import { images } from '../../constants'
import './About.scss';


const About = () => {
    return (
        <div id='About' className='About_Component'>
            <div className='main_container'>
                <div className='about_container'>
                    <div className='container_head'>
                        <h2>About Me</h2>
                    </div>
                    <motion.div
                        className='about_contents'
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5, type: 'tween' }}
                    >
                        <div className='content'>
                            <p>
                                Hi! I'm Michael, I do web development, mostly Frontend but also Fullstack and design as well. I'm from Sierra Leone the western part of Africa and a third-year student pursuing Software Engineering with Multimedia Technology at the Limkokwing University Of Creative Technology.
                            </p>
                            <p>
                                I enjoy the process of turning ideas into reality. In addition, I'm always curious about learning new skills in the essence of delivering a quality website that is conversion focus & user-friendly. I like collaboration in the essence of providing an excellent outcome.
                            </p>
                            <div className='cta_btns'>
                                <button className='hire_me'>Let's talk</button>
                                <div>
                                    <HiDownload className='icon' />
                                    <button className='resume'>Download resume</button>
                                </div>
                            </div>
                        </div>
                        <div className='about_img'>
                            <img src={images.about_img} alt='about-bg' className='about_bg' />
                            <img src={images.michael}  alt='about-img' />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default MotionWrap(About, 'app__about')