import React, {useState, useRef} from "react";
import {Link , NavLink} from 'react-router-dom'
import Header from '../header/header'

import './navbar.css';
import About from "../about/about";
import Projects from "../projects/projects";


function Navbar(){

    const aboutRef = useRef(null)
    const proRef = useRef(null)


    const scrollToComponenet = (ref) => {
        console.log('scroll')
        window.scrollTo({
        top: ref.current.offsetTop-50,
        behavior: 'smooth'     
    }) }
    
    return (
        <>
        <Header/>
        <div id="navbar">
            
            <button className='navbarElement' onClick={e => scrollToComponenet(aboutRef)} >About</button>
            <a className='navbarElement'>/</a>
            <button className='navbarElement' onClick={e => scrollToComponenet(proRef)} >Portfolio</button>
            <a className='navbarElement'>/</a>
            <button className='navbarElement' href="#">Download CV</button>
            
        </div>
        <div ref={aboutRef}>
            <About/>
        </div>
        <div ref={proRef}>
            <Projects/>
        </div>

        
        </>
 )   
}

export default Navbar