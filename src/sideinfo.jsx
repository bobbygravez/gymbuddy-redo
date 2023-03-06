import React from "react"
import Messages from "./directmessages"

function SideInfo(props){
    return(
        <div  style={
          {
            marginLeft: props.sidebarOptions? "0" : "-86%",
            opacity: props.sidebarOptions? "1" : "0"
        }} className='side-info'>
                        <div className="side-info-heading">
                            <h5><span>Gymbuddy</span>  <i className="fa-solid fa-chevron-right"></i>  {props.gymLevel === 'intermediate'? "Intermediate": props.gymLevel === 'advanced'? "Advanced" : "Beginners"}</h5>
                            <i onClick={props.closeSideBarOptions} className="fa-solid fa-angle-left"></i>
                        </div>
                      <div className='level-content'>
                        <i className="fa-regular fa-user footer-icon sameWidth"></i>
                        <div onClick={() => {
                          props.instructor()
                          props.closeSideBarOptions()
                          props.trainingStage()
                          }} className='level-stage'>
                            <p>Instructor</p>
                            <span>100 instructors</span>
                        </div>
                          <i className="fa-solid fa-chevron-right alignLeft"></i>
                      </div>
                      <div className='level-content'>
                        <i className="fa-solid fa-user-group footer-icon sameWidth"></i>
                        <div onClick={() => {
                          props.community()
                          props.closeSideBarOptions()
                          props.trainingStage()
                          }} className='level-stage'>
                            <p>Communities</p>
                            <span>{props.gymLevel === 'intermediate'? "Intermediate": props.gymLevel === 'advanced'? "Advanced" : "Beginner"} stage</span>
                        </div>
                          <i className="fa-solid fa-chevron-right alignLeft"></i>
                      </div>
                      <div className='level-content'>
                        <i className="fa-solid fa-user-group footer-icon sameWidth"></i>
                        <div className='level-stage'>
                            <p>Friends</p>
                            <span>Grow with friends</span>
                        </div>
                          <i className="fa-solid fa-chevron-right alignLeft"></i>
                      </div>
                      <h3>DIRECT MESSAGES</h3>
                      <h6>Today</h6>
                      <Messages />
                      <div className="group-dm">
                        <i className="fa-solid fa-chevron-down group-icon"></i>
                        <h3>GROUP DM</h3>
                        <i className="fa-solid fa-plus group-icon"></i>
                      </div>
                </div>
    )
}

export default SideInfo