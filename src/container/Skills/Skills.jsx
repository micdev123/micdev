import React, { useState } from 'react'

import { MotionWrap } from '../../wrapper';
import { images } from '../../constants'
import './Skills.scss'
import data from '../../data';

const Skills = () => {
    const [toggle, setToggle] = useState(true);
    return (
        <div id='Skills' className='Skills_Component'>
            <div className='main_container'>
                <div className='skills_container'>
                    <div className='container_head'>
                        <h2>Skills | Technologies</h2>
                    </div>
                    <div className='Skills'>
                        <div className='content'>
                            <p>
                                So far, here are a few of the skills and tools I've been working with to turn project ideas into reality.
                            </p>
                            <div className="skills-toggle" data-toggle-box>
                                <button className={`toggle-btn ${toggle ? 'active' : ''}`} onClick={() => setToggle(true)}>Skills</button>

                                <button className={`toggle-btn ${!toggle ? 'active' : ''}`} onClick={() => setToggle(!toggle)}>Tools</button>
                            </div>
                        </div>
                        <div className='skills_technologies'>
                            {toggle ? (
                                <div className='technologies'>
                                    {data?.skills.map((skill) => (
                                        <div className='skill_card'>
                                            <div className="tooltip">{skill.name}</div>
                                            <div className='skill_img'>
                                                <img src={skill.img} alt='' />
                                            </div>
                                        </div>
                                    ))}
                                    
                                </div>
                            ) : (
                                <div className='tools'>
                                    {data?.tools.map((tool) => (
                                    <div className='tool_card'>
                                            <div className="tooltip">{tool.name}</div>
                                        <div className='tool_img'>
                                            <img src={tool.img} alt='' />
                                        </div>
                                    </div>
                                    ))}   
                                </div>    
                            )}
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MotionWrap(Skills, 'app__skill')