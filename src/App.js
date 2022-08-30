import React from 'react';
import { About, Header, Skills,  Works, Contact } from './container';
import { Navbar, Footer } from './components';

import './App.scss'

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Header />
            <About />
            <Skills />
            <Works />
            <Contact />
            <Footer />
        </div>
    );
}

export default App