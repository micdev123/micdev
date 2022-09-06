import React, { useEffect, useState } from 'react'
import { CgMenuHotdog } from 'react-icons/cg'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { motion } from 'framer-motion';

import './Navbar.scss'

const Navbar = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 1,
            }
        }
    }

    const items = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    const [toggle, setToggle] = useState(false);

    const [background, setBackground] = useState(false);
    const changeNavBackground = () => {
        if (window.scrollY > 90) {
            setBackground(true)
        }
        else {
            setBackground(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavBackground)

        return () => {
            window.removeEventListener('scroll', changeNavBackground)
        }
    }, [])
    
    return (
        <div className={background ? 'navbar_component scroll_nav_bg': 'navbar_component'}>
            <nav className='navbar'>
                <motion.div
                    className='navbar_logo'
                    animate={{ opacity: [0, 1] }}
                    transition={{duration: 0.8, delay: 0.8 }}
                >
                    <a href='/'><h1>Michael.</h1></a>
                    <div className='logo_line'></div>
                </motion.div>
                <motion.ul
                    className='nav_links'
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    {['About', 'Skills', 'Projects', 'Contact', 'Hire me today'].map((item) => (
                        <motion.li className="nav_link" key={`link-${item}`} variants={items}>
                            <a href={`#${item}`}>{item}</a>
                        </motion.li>
                    ))}
                </motion.ul>

                <div className="navbar_menu">
                    <CgMenuHotdog onClick={() => setToggle(true)} className='menu_bar' />

                    {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.50, ease: 'easeOut' }}
                        className='menu'
                    >
                        <AiOutlineCloseCircle onClick={() => setToggle(false)} className='close_menu' />
                        <ul>
                        {['About', 'Skills', 'Projects', 'Contact', 'Hire me today'].map((item) => (
                            <li key={item}>
                            <a href={`#${item}`} onClick={() => setToggle(false)}>
                                {item}
                            </a>
                            </li>
                        ))}
                        </ul>
                    </motion.div>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Navbar