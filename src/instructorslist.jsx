import React from "react";
import verified from "./images/verified.png"
import Dm from "./images/Dm.png"

function InstructorsList(props){
    return(
        <div className="instructors-container">
                <div className="instructors-info">
                    <div className="online-container">
                        {props.online && props.isOnline? <div className="online"></div> : ""}
                        <img src={props.icon} alt="instructors-icon" className="instructors-icon"/>
                    </div>
                    <div>
                        <p className="name">{props.name} <img src={verified} alt="verified-icon" className="verified"/></p>
                        <p className="role">{props.role}</p>
                    </div>
                </div>
                <div className="CTA">
                    <img src={Dm} alt="Dm-icon" />
                    <p className="Dm">Direct message</p>
                    <p className="profile">View profile</p>
                </div>
        </div>
    )
}

export default InstructorsList