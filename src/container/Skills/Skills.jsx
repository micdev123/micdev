import React, { useState } from 'react'

import { images } from '../../constants'
import './Skills.scss'

const Skills = () => {
    const [toggle, setToggle] = useState(true);
    return (
        <div className='Skills_Component'>
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
                            <div class="skills-toggle" data-toggle-box>
                                <button class={`toggle-btn ${toggle ? 'active' : ''}`} onClick={() => setToggle(true)}>Skills</button>

                                <button class={`toggle-btn ${!toggle ? 'active' : ''}`} onClick={() => setToggle(!toggle)}>Tools</button>
                            </div>
                        </div>
                        <div className='skills_technologies'>
                            {toggle ? (
                                <div className='technologies'>
                                    <div className='skill_card'>
                                        <div class="tooltip">HTML5</div>
                                        <div className='skill_img'>
                                            <img src={images.html5} alt='' />
                                        </div>
                                    </div>
                                    <div className='skill_card'>
                                        <div class="tooltip">CSS3</div>
                                        <div className='skill_img'>
                                            <img src={images.css3} alt='' />
                                        </div>
                                    </div>

                                    <div className='skill_card'>
                                        <div class="tooltip">JAVASCRIPT</div>
                                        <div className='skill_img'>
                                            <img src={images.javascript} alt='' />
                                        </div>
                                    </div>

                                    <div className='skill_card'>
                                        <div class="tooltip">REACT JS</div>
                                        <div className='skill_img'>
                                            <img src={images.react} alt='' />
                                        </div>
                                    </div>

                                    <div className='skill_card'>
                                        <div class="tooltip">PHP</div>
                                        <div className='skill_img'>
                                            <img src={images.php} alt='' />
                                        </div>
                                    </div>

                                    <div className='skill_card'>
                                        <div class="tooltip">NODE JS</div>
                                        <div className='skill_img'>
                                            <img src={images.node} alt='' />
                                        </div>
                                    </div>

                                    <div className='skill_card'>
                                        <div class="tooltip">TAILWIND CSS</div>
                                        <div className='skill_img'>
                                            <img src={images.tailwind_css} alt='' />
                                        </div>
                                    </div>

                                    <div className='skill_card'>
                                        <div class="tooltip">MONGODB</div>
                                        <div className='skill_img'>
                                            <img src={images.mongodb} alt='' />
                                        </div>
                                    </div>

                                    <div className='skill_card'>
                                        <div class="tooltip">MYQSL</div>
                                        <div className='skill_img'>
                                            <img src={images.mysql} alt='' />
                                        </div>
                                    </div>

                                    <div className='skill_card'>
                                        <div class="tooltip">SANITY</div>
                                        <div className='skill_img'>
                                            <img src={images.sanity} alt='' />
                                        </div>
                                    </div>

                                    <div className='skill_card'>
                                        <div class="tooltip">SASS</div>
                                        <div className='skill_img'>
                                            <img src={images.sass} alt='' />
                                        </div>
                                    </div>

                                    <div className='skill_card'>
                                        <div class="tooltip">FIREBASE</div>
                                        <div className='skill_img'>
                                            <img src={images.firebase} alt='' />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className='tools'>
                                    <div className='tool_card'>
                                        <div class="tooltip">VSCODE</div>
                                        <div className='tool_img'>
                                            <img src={images.vscode} alt='' />
                                        </div>
                                    </div>

                                    <div className='tool_card'>
                                        <div class="tooltip">PHOTOSHOP</div>
                                        <div className='tool_img'>
                                            <img src={images.photoshop} alt='' />
                                        </div>
                                    </div>
                                        
                                    <div className='tool_card'>
                                        <div class="tooltip">VSCODE</div>
                                        <div className='tool_img'>
                                            <img src={images.adobe_xd} alt='' />
                                        </div>
                                    </div>
                                        
                                    <div className='tool_card'>
                                        <div class="tooltip">VSCODE</div>
                                        <div className='tool_img'>
                                            <img src={images.command} alt='' />
                                        </div>
                                    </div>
                                        
                                    <div className='tool_card'>
                                        <div class="tooltip">VSCODE</div>
                                        <div className='tool_img'>
                                            <img src={images.git} alt='' />
                                        </div>
                                    </div>
                                        
                                    <div className='tool_card'>
                                        <div class="tooltip">VSCODE</div>
                                        <div className='tool_img'>
                                            <img src={images.illustrator} alt='' />
                                        </div>
                                    </div>
                                        
                                    <div className='tool_card'>
                                        <div class="tooltip">VSCODE</div>
                                        <div className='tool_img'>
                                            <img src={images.npm} alt='' />
                                        </div>
                                    </div>

                                    <div className='tool_card'>
                                        <div class="tooltip">VSCODE</div>  
                                        <div className='tool_img'>
                                            <img src={images.audition} alt='' />
                                        </div>
                                    </div>    
                                </div>    
                            )}
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills