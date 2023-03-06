import React from "react"

function LoginPage(props){
    return (
    <div className="login-page">
        <h1 className="intro-text">Welcome to Gymbuddy</h1>
        <form>
            <input type="text" name="username" value={props.username} placeholder="Enter your username" onChange={(e) => {props.handleChange(e)}} required/>
            <input type="email" name="email" placeholder="Enter your email" required/>
            <input type="password" name="password" placeholder="Enter your password" required/>
            <button className="register" onClick={(e) => {props.register(e)}}>{props.loading?"Registering..." : "Register"}</button>
        </form>
    </div>
    )
}

export default LoginPage