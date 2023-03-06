import React from "react";
import menuIcon from "./images/menu-icon.png"
import xIcon from "./images/X-icon.png"
import logo2 from "./images/logo2.png"

function Header(props){
    return (
        <nav>
              <img src={logo2} alt="logo" className='logo' onClick={props.home}/>
              <h2>GYMBUDDY</h2>
              <img src={props.isToggled? xIcon : menuIcon} alt="icon" className='menu-icon' onClick={props.toggle} style={{animationName: props.isToggled? "swipeIcon" : null}}/>
          </nav>
    )
}

export default Header