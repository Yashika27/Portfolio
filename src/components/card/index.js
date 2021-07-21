import React from 'react'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css'

const Card = (props) => {
    return (
        <div class="portfolio-item design ">
            <div class="portfolio-wrapper">
                <div class="portfolio-thumb">
                    <img src={props.image} />
                </div>
                <div class="portfolio-caption text-center" style={{opacity: '.9'}}>
                    <h3 style={{color: 'white'}}>{props.title}</h3>
                    <div class="work-tag">
                        <ul style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                        <li style={{justifyContent: 'center', alignContent: 'center', marginRight: '2%', marginLeft: '2%'}}>
                        <a href={props.github} style={{color: 'white'}}><h2><FontAwesomeIcon icon={faGithub} /></h2></a>
                        </li>
                        <li style={{justifyContent: 'center', alignContent: 'center', marginRight: '2%', marginLeft: '2%'}}>
                        <a href={props.web} style={{color: 'white'}}><h2><FontAwesomeIcon icon={faCode} /></h2></a>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;