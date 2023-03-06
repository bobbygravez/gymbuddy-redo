import React from "react";
import "./Instructor.css"
import "./community.css"
import displayPicture from "./images/display-picture.png"
import userIcon from "./images/user-icon.png"
import shareIcon from "./images/share-icon.png"
import james from "./images/james.png"
import loveEmo from "./images/love-emo.png"
import princess from "./images/princess.png"
import like from "./images/like.png"
import smiley from "./images/smiley.png"
import comment from "./images/comment.png"
import user2Picture from "./images/user2-picture.jfif"

function Community(props){
    return(
        <div onClick={props.closeSideBar} className="community">
            <div className="commuity-header-container">
                <div className="community-header">
                    <i className="fa-solid fa-chevron-left"></i>
                    <i className="fa-regular fa-user footer-icon"></i>
                    <div className="description">
                        <p>Community</p>
                        <span>{props.instructorStage === 'Intermediate'? "Intermediate": props.instructorStage === 'Advanced'? "Advanced" : "Beginners"} stage</span>
                    </div>
                </div>
                    <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <img src={displayPicture} alt="users-upload" className="DP" />
            <div className="user-container">
                <div className="user-details">
                    <img src={userIcon} alt="users-icon" />
                    <div>
                        <p>{props.username}</p>
                        <span className="hour">18h ago</span>
                    </div>
                </div>
                <div className="share">
                    <img src={shareIcon} alt="share-icon" className="share-icon"/>
                    <span>Share</span>
                </div>
            </div>
            <div className="tags">
                    <h6>Bodygoal</h6>
                    <h6>FitnessBudddy</h6>
                    <h6>TeamMarkFitness</h6>
            </div>
            <span className="story">Hey guys, i’m very excited to share pictures of my progress so far since i joined this community, A big thank you to my instructor  @Mark  for his patience and guideience... <span className="see-more">See more </span></span>
            <div className="comments">
                <img src={james} alt="user-icon" />
                <p>James Orji</p>
                <span>Keep going!!! <img src={loveEmo} alt="emoji" className="emoji"/></span>
            </div>
            <div className="comments">
                <img src={princess} alt="user-icon" />
                <p>Princess</p>
                <span>Woowwwww <img src={loveEmo} alt="emoji" className="emoji"/>
                <img src={smiley} alt="emoji" className="emoji"/></span>
            </div>
            <div className="likes-comments">
                <p><img src={like} alt="like button" className="actions"/> 100</p>
                <p><img src={comment} alt="comment button" className="actions"/> 38</p>
            </div>
            <div className="DP2-container">
                <i className="fa-solid fa-plus"></i>
                <img src={user2Picture} alt="user2.dp" className="DP2"/>
            </div>
        </div>
    )
}

export default Community