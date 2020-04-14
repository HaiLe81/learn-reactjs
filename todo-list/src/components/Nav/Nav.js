import React, { Component } from 'react'
import './Nav.css'
import Navleft from './NavLeft/NavLeft'
import NavRight from './NavRight/NavRight'
import NavCenter from './NavCenter/NavCenter'

class Nav extends Component {
    render() {
        return(
            <div className="nav-header">
                <Navleft/>
                <NavCenter/>
                <NavRight/>
            </div>
        );
    }
}

export default Nav;