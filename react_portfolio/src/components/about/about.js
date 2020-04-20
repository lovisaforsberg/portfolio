import React, {useState} from "react";
import './about.css';
var about_img = require('./lovisa_img.JPG')


function About(){
    return(
        <>
        <div className='aboutContainer'>
            <div className='aboutPicture'>
                <img className= 'aboutImage' src={about_img}></img>
            </div>
            <div className='aboutText'>
                <h1 className="aboutHeadline">ABOUT</h1>
                <p className="aboutDesc">hejhej här kommer lite information tja</p>
                <a href='http://linkedin.com/in/lovisa-forsberg-55a511136'><i className="icon fab fa-linkedin"></i></a>
                <a href='https://github.com/lovisaforsberg'><i className="icon fab fa-github-square"></i></a>
                <a href = "mailto: lovisa.forsberg1@gmail.com"><i className="icon fas fa-envelope-square"></i></a>
            </div>
            
        </div>
        </>
    )
}

export default About