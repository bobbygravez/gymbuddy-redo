import React from "react"

function LoginPage(props){

    function disabledState(){
        if(props.formData.username === "" || props.formData.email === '' || props.formData.password === ""){
            return true
        } else{
            return false
        }
    }
    return (
    <div className="login-page">
        <h1 className="intro-text">Welcome to Gymbuddy</h1>
        {disabledState() && <p className="fill-prompt">Please fill all the fields </p>}
        <form>
            <input type="text" name="username" value={props.formData.username} placeholder="Enter your username" onChange={(e) => {props.handleChange(e)}} required/>
            <input type="email" name="email" placeholder="Enter your email" value={props.formData.email} onChange={(e) => {props.handleChange(e)}} required/>
            <input type="password" name="password" placeholder="Enter your password" value={props.formData.password} onChange={(e) => {props.handleChange(e)}} required/>
            <button disabled={disabledState()} className="register" onClick={(e) => {props.register(e)}}>{props.loading?"Registering..." : "Register"}</button>
        </form>
    </div>
    )
}

export default LoginPage