import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from './components';

import './App.scss'
import Home from './pages/Home/Home';
import ComingSoon from './pages/ComingSoon/ComingSoon';

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/comingSoon" element={<ComingSoon />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App