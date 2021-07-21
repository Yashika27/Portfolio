import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import aboutme from '../../images/aboutme.jpeg'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const About = () => {
    return (
        <div id="about" className="about-container">
            <br/><br/><br/><br/>
            <h1>About Me</h1>
            <br/>
            <img src={aboutme} style={{borderRadius: '50%', height: '200px', paddingBottom: '6px'}} />
            <br/>
            {/* <div className="about-sec"> */}
            {/* <ul style={{alignContent: 'center!important'}}> */}
               <p> Student at IIT (BHU), Varanasi<br/>
                Learning Reactjs, Django, and server-side<br/>
                Interested in web development, problem solving, and competitive programming<br/>
                Loves dancing, travelling, and socializing
                </p>
                {/* </div> */}
                {/* <li>Student at IIT (BHU), Varanasi</li> */}
                {/* <li>Learning Reactjs, Django</li>
                <li>Interested in web development, problem solving, and competitive programming</li>
                <li>Loves dancing, travelling, and socializing</li> */}
            {/* </ul> */}

            <ul style={{listStyleType: 'none', display: 'flex', marginTop: '3%', marginRight: '5%'}}>
                <li style={{listStyleType: 'none', paddingRight: '15%'}}>
                    <a href="https://github.com/Yashika27"><h2><FontAwesomeIcon icon={faGithub} /></h2></a>
                </li>
                <li style={{listStyleType: 'none', paddingRight: '15%'}}>
                <a href="mailto: yashika.lamba.phe19@itbhu.ac.in"><h2><FontAwesomeIcon icon={faEnvelope} /></h2></a>
                </li>
                <li style={{listStyleType: 'none', paddingRight: '15%'}}>
                    <a href="https://www.instagram.com/yashikalamba__/"><h2><FontAwesomeIcon icon={faInstagram} /></h2></a>
                </li>
                <li style={{listStyleType: 'none', paddingRight: '15%'}}>
                    <a href="https://www.linkedin.com/in/yashika-lamba-565ab9196/"><h2><FontAwesomeIcon icon={faLinkedin} /></h2></a>
                </li>
            </ul>
            
        </div>
    )
}

export default About;