import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'

import { images } from '../../constants'
import './Works.scss'

const Works = () => {
    return (
        <div className='Works_components'>
            <div className='main_container'>
                <div className='works_container'>
                    <div className='container_head'>
                        <h2>Projects | Experience</h2>
                    </div>
                    <div className='works'>
                        <div className='work'>
                            <div className='work_content'>
                                <h2>E-commerce</h2>
                                <p>
                                    Is a full-stack web based application. This online e-commerce platform provides users with list of products allowing them to make order, view their order history or delete their order. 
                                </p>
                                <p>
                                    This application also have an admin panel through which admin can create more products, edit or delete a product, view orders and marked them delivered after been paid for and delivered to user.
                                </p>
                                <div className='stack'>
                                    <p>React</p>
                                    <p>CSS3</p>
                                    <p>Express</p>
                                    <p>MongoDB</p>
                                    <p>Material UI</p>
                                    <p>Firebase</p>
                                </div>
                                <div className='project_links'>
                                    <FiExternalLink className='icon' />
                                    <AiOutlineGithub className='icon' />
                                </div>
                            </div>
                            <div className='work_footer'>
                                <h2 className='small_Screen'>E-commerce</h2>
                                <div className='work_img'>
                                    <div className='overlay'></div>
                                    <img src={images.e_commerce} alt='e-commerce' className='project_img' />
                                </div>
                            </div>
                        </div>
                        
                        <div className='work'>
                            <div className='work_content'>
                                <h2>HooBank Landing Page</h2>
                                <p>
                                    Is the next generation payment method. A landing page that gives detailed information about the application. 
                                </p>
                                <div className='stack'>
                                    <p>HTML5</p>
                                    <p>Tailwind CSS</p>
                                    <p>Javascript</p>
                                </div>
                                <div className='project_links'>
                                    <FiExternalLink className='icon' />
                                    <AiOutlineGithub className='icon' />
                                </div>
                            </div>
                            <div className='work_footer'>
                                <h2 className='small_Screen'>HooBank Landing Page</h2>
                                <div className='work_img'>
                                    <div className='overlay'></div>
                                    <img src={images.hoobank} alt='hoo-bank' className='project_img' />
                                </div>
                            </div>
                        </div>

                        <div className='work'>
                            <div className='work_content'>
                                <h2>Construction Landing Page</h2>
                                <p>
                                    Is a landing page that gives detailed information about the company.
                                    This application is also e-commerce oriented because it serves as a sales platform where users | customer can also
                                    purchase building items.
                                </p>
                                <div className='stack'>
                                    <p>HTML5</p>
                                    <p>CSS3</p>
                                    <p>Javascript</p>
                                    <p>GSAP</p>
                                </div>
                                <div className='project_links'>
                                    <FiExternalLink className='icon' />
                                    <AiOutlineGithub className='icon' />
                                </div>
                            </div>
                            <div className='work_footer'>
                                <h2 className='small_Screen'>Construction Landing Page</h2>
                                <div className='work_img'>
                                    <div className='overlay'></div>
                                    <img src={images.construction} alt='construction' className='project_img' />
                                </div>
                            </div>
                        </div>

                        <div className='work'>
                            <div className='work_content'>
                                <h2>Blogging</h2>
                                <p>
                                    Is a full-stack web-based application where users can read, like, comment on a post, write, edit, or delete own post.
                                    It functionality is similar to other blogging platform like Hashnode, Medium, DEV, but simple in design and easy to navigate.
                                </p>
                                <div className='stack'>
                                    <p>React</p>
                                    <p>CSS3</p>
                                    <p>Express</p>
                                    <p>MongoDB</p>
                                    <p>Material UI</p>
                                </div>
                                <div className='project_links'>
                                    <FiExternalLink className='icon' />
                                    <AiOutlineGithub className='icon' />
                                </div>
                            </div>
                            <div className='work_footer'>
                                <h2 className='small_Screen'>Blogging</h2>
                                <div className='work_img'>
                                    <div className='overlay'></div>
                                    <img src={images.blogging} alt='blogging' className='project_img' />
                                </div>
                            </div>
                        </div>

                        <div className='work'>
                            <div className='work_content'>
                                <h2>E-Classroom</h2>
                                <p>
                                    Is a full-stack web-based application.
                                    An electronic learning platform similar to google classroom, it caters for university purposes.
                                    Here the admin is responsible form adding, editing or removing either student or lecturer, create
                                    classroom, assign student or lecturer to a class, create, and assign module to student or lecturer etc.
                                </p>
                                <div className='stack'>
                                    <p>HTML5</p>
                                    <p>CSS3</p>
                                    <p>PHP</p>
                                    <p>MySQL</p>
                                </div>
                                <div className='project_links'>
                                    <FiExternalLink className='icon' />
                                    <AiOutlineGithub className='icon' />
                                </div>
                            </div>
                            <div className='work_footer'>
                                <h2 className='small_Screen'>E-Classroom</h2>
                                <div className='work_img'>
                                    <div className='overlay'></div>
                                    <img src={images.e_classroom} alt='e-classroom' className='project_img' />
                                </div>
                            </div>
                        </div>

                        <div className='work'>
                            <div className='work_content'>
                                <h2>The Resort</h2>
                                <p>
                                    Is a full-stack web-based application.
                                    It allow users to choose from a varieties of rooms and then book a room if available based on the duration the user specified.
                                </p>
                                <div className='stack'>
                                    <p>React</p>
                                    <p>Tailwind CSS</p>
                                    <p>Express</p>
                                    <p>Sanity.io</p>
                                    <p>GraphQL</p>
                                    <p>Framer Motion</p>
                                </div>
                                <div className='project_links'>
                                    <FiExternalLink className='icon' />
                                    <AiOutlineGithub className='icon' />
                                </div>
                            </div>
                            <div className='work_footer'>
                                <h2 className='small_Screen'>The Resort</h2>
                                <div className='work_img'>
                                    <div className='overlay'></div>
                                    <img src={images.resort} alt='resort' className='project_img' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works