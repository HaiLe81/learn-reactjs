import React, { Component } from 'react'
import { ArrowLeftOutlined } from '@ant-design/icons';
import './navleft.css'
class NavLeft extends Component {
    render() {
        return(
            <div className="nav-left">
                <ArrowLeftOutlined/>
                <p>Go back</p>
            </div>
        );
    }
}

export default NavLeft;