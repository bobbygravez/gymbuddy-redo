import React from "react"

function Footer(props){
    return(
        <div className="footer">
            <div className="footer-icon-container">
                <i className="fa-regular fa-message footer-icon"></i>
                <h6>Chats</h6>
            </div>
            <div className="footer-icon-container">
                <i className="fa-regular fa-bell footer-icon"></i>
                <h6>Notifications</h6>
            </div>
            <div onClick={() => {
                props.community() 
                props.closeSideBarOptions()
                props.beginner()
                }} className={`footer-icon-container ${props.page === 'community'? "footer-active" : ""}`}>
                <i className="fa-solid fa-user-group footer-icon"></i>
                <h6>Community</h6>
            </div>
            <div className="footer-icon-container">
                <i className="fa-regular fa-user footer-icon"></i>
                <h6>Account</h6>
            </div>
        </div>
    )
}

export default Footer