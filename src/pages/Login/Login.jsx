import React, { useState } from "react";
import './Login.css';
import Logo from '../../assets/logo.png'

const Login = () => {

    const [signState, setSignState] = useState("Sign In")

    return (
        <div className="login">
            <img src={Logo} className="Login-logo" alt="logo"/>
            <div className="login-from">
                <h1>{signState}</h1>
                <form>
                    {signState === "Sign Up" ? <input type="text" placeholder="Name" required/>
                    : <></>}
                    <input type="text" placeholder="Email" required/>
                    <input type="password" placeholder="Password" required/>
                    {signState === "Sign In" ? <button>Sign In</button> : <button>Sign Up</button> }
                    <div className="form-help">
                        <div className="remember">
                            <input type="checkbox" />
                            <label htmlFor="">Rembember Me</label>
                        </div>
                        <p>Need Help?</p>
                    </div>
                </form>
                <div className="form-switch">
                    {signState === "Sign In" ? 
                    <p>New to Netflix? <span onClick={() => {
                        setSignState("Sign Up")
                    }}>Sign Up now</span></p> 
                    :
                    <p>Already have an Account? <span onClick={() => {
                        setSignState("Sign In")
                    }}>Sign In now</span></p>
                }
                </div>
            </div>
        </div>
    )
}

export default Login;