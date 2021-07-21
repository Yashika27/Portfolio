import React from 'react'
import './style.css'
import aboutme from '../../images/aboutme.jpeg'

const About = () => {
    return (
        <div id="about" className="about-container">
            <br/><br/><br/><br/>
            <h1>About Me</h1>
            <br/>
            <img src={aboutme} style={{borderRadius: '50%', height: '200px', paddingBottom: '6px'}} />
            <br/>
            <ul style={{alignContent: 'center'}}>
                <li>Student at IIT (BHU), Varanasi</li>
                <li>Learning Reactjs, Django</li>
                <li>Interested in web development, problem solving, and competitive programming</li>
                <li>Loves dancing, travelling, and socializing</li>
            </ul>
            
        </div>
        // <div className="hero-container">
        //     <img src='/videos/img1' alt="landing-img" />
        //     {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
        // <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        // "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
        // </p>
        // </div>
    )
}

export default About;