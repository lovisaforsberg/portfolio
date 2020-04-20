import React, {useState} from "react";
import './header.css';
var header_img = require('./lovisa.png')



function Header(){
    

    return (
        <>
        <div className='headerContainer'>
            <img className='headerImg'  src={header_img}></img>
        </div>
        </>
 )   
}

export default Header