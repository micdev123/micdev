import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'
import { motion } from 'framer-motion';
import { images } from '../../constants'
import './Works.scss'
import { MotionWrap } from '../../wrapper';
import { Link } from 'react-router-dom';
import data from '../../data';

const Works = () => {
    return (
        <div id='Projects' className='Works_components'>
            <div className='main_container'>
                <div className='works_container'>
                    <div className='container_head'>
                        <h2>Projects | Experience</h2>
                    </div>
                    <motion.div
                        className='works'
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delayChildren: 0.5 }}
                    >
                        {data.works.map((work) => (
                            <motion.div
                                className='work'
                                initial={{y: 100, opacity: 0 }}
                                whileInView={{y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className='work_content'>
                                    <h2>{work.title}</h2>
                                    <p> {work.desc}</p>
                                    <div className='stack'>
                                        {work.stacks.map((stack) => (
                                            <p>{stack}</p>
                                        ))}
                                    </div>
                                    <div className='project_links'>
                                        <a href={work.demoLink} target="_blank" rel="noreferrer" className='link'>
                                            <FiExternalLink className='icon' />
                                        </a>

                                        <a href={work.gitHubLink} target="_blank" rel="noreferrer" className='link'>
                                            <AiOutlineGithub className='icon' />
                                        </a>
                                    </div>
                                </div>
                                <div className='work_footer'>
                                    <h2 className='small_Screen'>{work.title}</h2>
                                    <a href={work.demoLink} target="_blank" rel="noreferrer">
                                        <div className='work_img'>
                                            <div className='overlay'></div>
                                            <img src={work.img} alt='construction' className='project_img' />
                                        </div>
                                    </a>
                                </div>
                            </motion.div>
                        ))}

                        <motion.div
                            className='work'
                            initial={{y: 100, opacity: 0 }}
                            whileInView={{y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className='work_content'>
                                <h2>E-Classroom</h2>
                                <p>
                                    Is a full-stack web-based application. An electronic learning platform similar to google classroom, it caters to university purposes.
                                    Here the admin is responsible for adding, editing, or removing either student or lecturer, creating a classroom, assigning a student or lecturer to a class, creating, and assigning modules to a student or lecturer, etc.
                                </p>
                                <div className='stack'>
                                    <p>HTML5</p>
                                    <p>CSS3</p>
                                    <p>PHP</p>
                                    <p>MySQL</p>
                                    <p>JavaScript</p>
                                </div>
                                <div className='project_links'>
                                    <Link to='/comingSoon' className='link'>
                                        <FiExternalLink className='icon' />
                                    </Link>

                                    <a href="https://github.com/micdev123/e-classroom-project" target="_blank" rel="noreferrer" className='link'>
                                        <AiOutlineGithub className='icon' />
                                    </a>
                                </div>
                            </div>
                            <div className='work_footer'>
                                <h2 className='small_Screen'>E-Classroom</h2>
                                <Link to='/comingSoon'>
                                    <div className='work_img'>
                                        <div className='overlay'></div>
                                        <img src={images.e_classroom} alt='e-classroom' className='project_img' />
                                    </div>
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default MotionWrap(Works, 'app__works')