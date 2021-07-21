import React from 'react'
import './style.css'
import Card from '../card/index'
import img1 from '../../images/foundation.png'
import img2 from '../../images/blog.png'
import img3 from '../../images/blog.png'
import img4 from '../../images/foundation.png'
import img5 from '../../images/portfolio.png'
import img6 from '../../images/blog.png'



const Projects = () => {
    return (
        <div id="projects" className="pro-container">
            <br/><br/><br/><br/>
            <h1>Projects</h1>
            <div class="basic-portfolio-area ptb-90">
                <div class="container">
                    <div id="portfolio-grid" class="row-portfolio portfolio-style-2 portfolio-style-3 portfolio-style-4">
                        <Card 
                            image={img1}
                            github=""
                            web="https://alpha.iitbhufoundation.org/"
                            title="IIT BHU Foundation"
                            />
                        <Card 
                            image={img2}
                            github=""
                            web=""
                            title="React Weather App"
                            />
                        <Card 
                            image={img3}
                            github=""
                            web=""
                            title="Tic-Tac-Toe"
                            />
                        <Card 
                            image={img4}
                            github=""
                            web=""
                            title="CSES Web Scrapper"
                            />
                        <Card 
                            image={img5}
                            github=""
                            web=""
                            title="Portfolio"
                            />
                         <Card 
                            image={img6}
                            github="https://github.com/Yashika27/First-Project"
                            web="https://yashika27.github.io/First-Project/"
                            title="Doodle Diaries"
                            />
                            </div>
                            </div>
            </div>
        </div>
    )
}

export default Projects;