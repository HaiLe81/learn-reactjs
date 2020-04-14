import React, { Component } from 'react'
import './login.css'
// import { Container } from 'reactstrap';

class Login extends Component {
    render() {
        return (
            <div className="login">
                {/* <Container className="themed-container" fluid="sm">
            </Container> */}
                <div className="item" />
                <div className="item">
                    <h1>Sign In</h1>
                    <form action="/action_page.php">
                        <div className="itemForm">
                            <label>Username</label>
                            <input className="input" placeholder="Enter User Name"></input>
                        </div>
                        <div className="itemForm password">
                            <label>Username</label>
                            <input className="input" placeholder="Enter User Name"></input>
                        </div>
                        <div className="submit">
                            <p>Signip to Coders-x</p>
                        </div>
                        <div className="remember">
                            <input type="checkbox" />
                            <p>Keep me signed in</p>
                        </div>
                        <div className="forgot">
                            <a>For got username?</a>
                            <a>For got password</a>
                        </div>
                    </form>
                </div>
                <div className="item" />
            </div>
        );
    }
}

export default Login;