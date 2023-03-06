import React from "react";
import homeLogo2 from "./images/home-logo2.jpg"
import Logo from "./images/logo.png"

function SideBar(props){
    return (
        <div className='sidebar' style={{marginLeft: props.isToggled? "0" : "-23.6%", opacity: props.isToggled? "1" : "0"}}>
                  <div onClick={() => {
                    props.home()
                    props.closeSideBarOptions()
                    }} className='icon-container'>
                      <img src={homeLogo2} alt="home-logo" className='side-icons'/>
                  </div>
                  <div onClick={props.displaySideBarOptions1} className='icon-container'>
                      <img src={Logo} alt="gym-logo" className='side-icons'/>
                      <h6>Beginner</h6>
                  </div>
                  <div onClick={props.displaySideBarOptions2} className='icon-container'>
                    <img src={Logo} alt="gym-logo" className='side-icons'/>
                    <h6>Intermediate</h6>
                  </div>
                  <div onClick={props.displaySideBarOptions3} className='icon-container'>
                    <img src={Logo} alt="gym-logo" className='side-icons'/>
                    <h6>Advanced</h6>
                  </div>
                </div>
    )
}

export default SideBar