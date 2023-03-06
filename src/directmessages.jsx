import React, {useState} from "react";
import dataArray from "./messagedata"
import verified from "./images/verified.png"
import smiley from "./images/smiley.png"

function Messages(){
    const [Messages, setMessages] = useState(dataArray)
    const messageArray = Messages.map(message => {
        return <div className="message-container" key={message.id}>
                    <img className="message-icon" src={message.icon} alt="user-icon" />
                    <div className="message-box">
                        <div className="name-time">
                            <p>{message.name} {message.id === 1 && <img src={verified} alt="verified-icon" className="verified"/>}</p>
                            <span>{message.time}</span>
                        </div>
                        <h5 style={{color: message.id === 1? "#ffff" : "#9CA3AD"}}>{message.message} {message.id !== 1 && <img src={smiley} alt="emoji" className="emoji"/>}</h5>
                        {message.id === 1 && <span className="message-number">1</span>}
                    </div>
               </div>
    })
    return(
        <div className="messages">
            {messageArray}
        </div>
    )
}

export default Messages