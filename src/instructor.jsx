import React, {useState} from "react";
import "./Instructor.css"
import instructordata from "./instructordata";
import InstructorsList from "./instructorslist";

function Instructor(props){
const [instructorInfo, setInstructorInfo] = useState(instructordata)
const [search, setSearch] = useState('')
const [online, setOnline] = useState(false)

function onlineInstructors(){
    setOnline(true)
}

function allInstructors(){
    setOnline(false)
}

function handleChange(e){
    setSearch(e.target.value)
    if(online === false){
        let searched = instructordata.filter(item => item.name.toLowerCase().includes(search.trim().toLowerCase()))
            setInstructorInfo(searched)  
        } else if(online === true){
            let activeSearched = onlineInstructor.filter(item => item.name.toLowerCase().includes(search.trim().toLowerCase()))
            setActiveInstructors(activeSearched)
        }

}

const onlineInstructor = instructordata.filter(item => item.isOnline === true)
const [activeInstructors, setActiveInstructors] = useState(onlineInstructor)

    const instructorsOn = activeInstructors.map(item => {
        return <InstructorsList key={item.id} isOnline={item.isOnline} icon={item.icon} name={item.name} role={item.role} online={online}/>
    })

    const everyInstructors = instructorInfo.map(item => {
        return <InstructorsList key={item.id} isOnline={item.isOnline} icon={item.icon} name={item.name} role={item.role} online={online}/>
    })

    return(
        <div onClick={props.closeSideBar} className="instructor">
            <div className="instructor-header">
                <i className="fa-solid fa-chevron-left"></i>
                <i className="fa-regular fa-user footer-icon"></i>
                <div className="description">
                    <p>Instructors</p>
                    <span>{props.instructorStage === 'Intermediate'? "Intermediate": props.instructorStage === 'Advanced'? "Advanced" : "Beginners"} stage</span>
                </div>
            </div>
            <div className="all-online">
                <p onClick={allInstructors} className={online === false? "current" : ""}>All</p>
                <p onClick={onlineInstructors} className={online === true? "current" : ""}>Online</p>
            </div>
            <div className="search-bar-container">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="search" placeholder="Search for instructor" className="search-bar" name="search" value={search} onChange={handleChange}/>
            </div>
            {online? instructorsOn : everyInstructors}
        </div>
    )
}

export default Instructor