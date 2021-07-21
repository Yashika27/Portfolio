import React from 'react'
import './style.css'

const Footer = () => {
    return (
        <div className="foot-container">
            <p>Made with love by <a href="https://github.com/Yashika27" style={{color: 'white', textDecoration: 'underline'}}>Yashika27</a></p>
            {/* <hr style={{color: 'white'}} /> */}
            <p>To use this template as your website, go to this repository, download the source code and change relevant information!</p>            
        </div>
    )
}

export default Footer;