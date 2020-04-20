import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Navbar from './navbar/navbar'
import About from './about/about'

const Router = () => {
    return (
        <Switch>
            <Route path='/' component={Navbar}/>
            <Route path='/about' component={About}/>
        </Switch>

    )
}
  
  export default Router