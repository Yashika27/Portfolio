import React from 'react'
import './style.css'
import img1 from '../../images/img1.jpeg'

const Home = () => {
    return (
        <div id="home" className="hero-container">
            <div class="overlay"></div>
            <img src={img1} className="img-1" alt="landing-img" />
            
            {/* <div className="container"> */}
            {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
            <h1>Hi, I'm Yashika Lamba</h1>
            <h4>Student | Developer | Tech Enthusiast</h4>
        {/* </div> */}
        </div>
    )
}

export default Home;