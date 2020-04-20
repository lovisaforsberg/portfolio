import React from 'react';
import {Route,Switch, BrowserRouter} from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
import './App.css';
import Header from './header/header'
import About from './about/about'
import Navbar from './navbar/navbar';
import Router from './Router';


function App() {

  
  return (
    <BrowserRouter>
     <div className="App">
      <Router/>      
    </div>
    </BrowserRouter>
   
  );
}

export default App;
