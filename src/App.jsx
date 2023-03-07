import { useState } from 'react'
import LoginPage from './loginpage'
import Footer from "./footer"
import SideInfo from './sideinfo'
import LandingPage from "./landingpage"
import SideBar from './sidebar'
import Header from './header'
import Instructor from './instructor'
import Community from './community'

function App() {
  const [isRegisterd, setIsRegistered] = useState(false)

  const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
  })

  const [isLoading, setIsLoading] = useState(false)
  const [isToggled, setIsToggled] = useState(false)
  const [sidebarOptions, setSidebarOptions] = useState(false)
  const [gymLevel, setGymLevel] = useState('beginner')
  const [instructorStage, setInstructorStage] = useState('')
  const [page, setPage] = useState("home")

  function trainingStage(){
    if(gymLevel === 'beginner'){
      setInstructorStage('Beginners')
    } 
    else if(gymLevel === 'intermediate'){
      setInstructorStage('Intermediate')
      } 
    else if(gymLevel === 'advanced'){
        setInstructorStage('Advanced')
      }
  }

  function beginner(){
    setInstructorStage('Beginners')
  }

  function home(){
    setPage("home")
  }

  function community(){
    setPage("community")
  }

  function closeSideBar(){
    setIsToggled(false)
    setSidebarOptions(false)
  }

  function instructor(){
    setPage("instructor")
  }
  function toggle(){
    setIsToggled(prevState => !prevState)
    setSidebarOptions(false)
  }

  function displaySideBarOptions1(){
    setSidebarOptions(true)
    setGymLevel('beginner')
  }
  function displaySideBarOptions2(){
    setSidebarOptions(true)
    setGymLevel('intermediate')
  }
  function displaySideBarOptions3(){
    setSidebarOptions(true)
    setGymLevel('advanced')
  }

  function closeSideBarOptions(){
    setSidebarOptions(false)
  }

  function register(e){
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
        setIsRegistered(true)
    }, 2000)
  }

  function handleChange(e){
    const {name, value} = e.target
    setFormData(prevState => ({
      ...prevState,
        [name] : value
    }))
  }

  return (
    <div className='home-page'>
      {!isRegisterd && <LoginPage loading={isLoading} register={register} handleChange={handleChange} formData={formData}/>}
      {isRegisterd && 
        <section>
              <Header isToggled={isToggled} toggle={toggle} home={home}/>
          <div className='container'>
              {page === "home" && <LandingPage username={formData.username} closeSideBar={closeSideBar}/>}
              {page === "instructor" && <Instructor instructorStage={instructorStage} closeSideBar={closeSideBar}/>}
              {page === "community" && <Community instructorStage={instructorStage} closeSideBar={closeSideBar} username={formData.username}/>}
              <div className='side-container'>
                <SideBar isToggled={isToggled} displaySideBarOptions1={displaySideBarOptions1} displaySideBarOptions2={displaySideBarOptions2} displaySideBarOptions3={displaySideBarOptions3} home={home} closeSideBarOptions={closeSideBarOptions}/>
                <SideInfo sidebarOptions={sidebarOptions} gymLevel={gymLevel} closeSideBarOptions={closeSideBarOptions} instructor={instructor} community={community} trainingStage={trainingStage}/>
              </div> 
          </div>
            <Footer community={community} closeSideBarOptions={closeSideBarOptions} beginner={beginner} page={page}/>
        </section>
       }
    </div>
  )
}

export default App
