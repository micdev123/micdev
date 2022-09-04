import React from 'react'

import { About, Header, Skills,  Works, Contact } from '../../container';


function Home() {
    return (
        <div className='Home_Component'>
            <Header />
            <About />
            <Skills />
            <Works />
            <Contact />
        </div>
    )
}

export default Home