import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'

const Card = (props) => {
    return (
        <div class="portfolio-item design ">
            <div class="portfolio-wrapper">
                <div class="portfolio-thumb">
                    <img src={props.image} />
                </div>
                <div class="portfolio-caption text-center">
                    <h4>{props.title}</h4>
                    <div class="work-tag">
                        <a href={props.github} style={{paddingLeft: '2px'}}>Github</a>
                        <span>,</span>
                        <a href={props.web}>Preview</a>
                        <span>,</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;