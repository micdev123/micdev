import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'
import data from '../../data';
import { MotionWrap } from '../../wrapper';

import './Challenges.scss';

function Challenges() {
    return (
        <div className='Challenges_Component'>
            <div className='main_container'>
                <div className='challenges_container'>
                    <h2>Frontend Mentor Challenges</h2>
                    <div className='challenges'>
                        {data.challenges.map((challenge) => (
                            <div className='challenge' key={challenge.title}>
                                <a href={challenge.demoLink} target="_blank" rel="noreferrer" className='challenge_image'>
                                    <img src={challenge.img} alt='' className='challenge_img' />
                                </a>
                                <h2 className='challenge_title'>{challenge.title}</h2>
                                <div className='challenges_links'>
                                    <a href={challenge.demoLink} target="_blank" rel="noreferrer" className='link'>
                                            <FiExternalLink className='icon' />
                                        </a>

                                        <a href={challenge.gitHubLink} target="_blank" rel="noreferrer" className='link'>
                                            <AiOutlineGithub className='icon' />
                                        </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MotionWrap(Challenges, 'app__challenges')