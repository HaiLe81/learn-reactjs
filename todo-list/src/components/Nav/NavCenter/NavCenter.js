import React, { Component } from 'react'
import './navcenter.css'
import codersX from '../../../images/logo@256.png'
class NavCenter extends Component {
    render() {
        return(
            <div className="nav-center">
                <img src={codersX} alt="not found"></img>
            </div>
        );
    }
}

export default NavCenter;