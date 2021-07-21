import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import './style.css'

const Header = (props) => {

    const [navbar, setNavbar] = useState(false);
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        // console.log(window.innerWidth);
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <div>
            <nav className={navbar ? "navbar active" : "navbar"}>
                <div className='navbar-container'>
                    <Link to='home' className='navbar-logo' onClick={closeMobileMenu}>
                        YLBG
                        <i class='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link activeClass="active"
                                to="home" spy={true} smooth={true} className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to="about" spy={true} smooth={true}
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to="projects" spy={true} smooth={true}
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={{ pathname: 'https://drive.google.com/file/d/1xVJ73246luiN4_1k9KGXQ3ZSur_Pp6bJ/view?usp=sharing' }} target="_blank"
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Resume
                            </Link>
                        </li>
                    </ul>
                    {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
                </div>
            </nav>
            // </div>
    )
}

export default Header;