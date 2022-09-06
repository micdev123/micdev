import React from 'react'

import { About, Header, Skills, Works, Challenges, Contact } from '../../container';


function Home() {
    return (
        <div className='Home_Component'>
            <Header />
            <About />
            <Skills />
            <Works />
            <Challenges />
            <Contact />
        </div>
    )
}

export default Home