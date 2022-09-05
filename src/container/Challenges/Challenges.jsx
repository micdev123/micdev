import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'
import { images } from '../../constants'

import './Challenges.scss';

function Challenges() {
    return (
        <div className='Challenges_Component'>
            <div className='main_container'>
                <div className='challenges_container'>
                    <h2>Frontend Mentor Challenges</h2>
                    <div className='challenges'>
                        <div className='challenge'>
                            <div className='challenge_image'>
                                <img src={images.expenses_chart} alt='' className='challenge_img' />
                            </div>
                            <h2 className='challenge_title'>Expenses Chart Component</h2>
                            <div className='challenges_links'>
                                <a href="https://micdev123.github.io/expenses-chart-component/" target="_blank" rel="noreferrer" className='link'>
                                        <FiExternalLink className='icon' />
                                    </a>

                                    <a href="https://github.com/micdev123/expenses-chart-component" target="_blank" rel="noreferrer" className='link'>
                                        <AiOutlineGithub className='icon' />
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Challenges