import React, {useState} from "react";
import './projects.css';

var flight_img = require('./flight.png')
var ikea_img = require('./ikea.png')
var carbon_img = require('./carbon.png')
var chat_img = require('./chat.png')




function Projects(){
    return(
        <>
        <div className='projectContainer'>
            <div className='projectHeadline'>
                <h1>PORTFOLIO</h1>
            </div>
            <div className='projectContent'>
                <div className='content'>
                   
                    <img className='contentImg' src={flight_img} alt="Avatar"></img>

                    <h2 className='contentHeadline'>"GET TO KNOW YOUR FLYING"</h2>
                    <a className='contentDesc' href="https://flight-kth.firebaseapp.com/">Link to project</a>
                </div>
                <div className='content'>
                    <img className='contentImg' src={ikea_img}></img>
                    <h2 className='contentHeadline'>IKEA <br/> ASSEMBLY</h2>
                    <p className='contentDesc'>Description of the project</p>
                </div>
            </div>
            <div className='projectContent'>
                <div className='content'>
                    <img className='contentImg' src={carbon_img}></img>
                    <h2 className='contentHeadline'>CARBON CALCULATOR</h2>
                    <a className='contentDesc' href="https://carbon-calculator-d4d9b.firebaseapp.com/">Link to project</a>

                </div>
                <div className='content'>
                    <img className='contentImg' src={chat_img}></img>
                    <h2 className='contentHeadline'>CLASSROOM <br/> CHAT</h2>
                    <p className='contentDesc'>Description of the project</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Projects