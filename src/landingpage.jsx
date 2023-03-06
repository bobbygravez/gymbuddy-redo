import React from "react";

function LandingPage(props){
    return(
        <div onClick={props.closeSideBar} className='landing-page'>
              <h1>Welcome, {props.username}!</h1>
              <p className="welcome-text">We have a whole lot in store for you!, hit the menu icon to navigate our page.</p>
              <div className='content'>
                <h3>Health Tip:</h3>
                <p>Worried about heart disease? Hoping to prevent high blood pressure? No matter what your current weight is, being active boosts high-density lipoprotein (HDL) cholesterol, the "good" cholesterol, and it decreases unhealthy triglycerides. This one-two punch keeps your blood flowing smoothly, which decreases your risk of cardiovascular diseases.</p>

                <p>
                Regular workout decreases the risk of diabetes, metabolic diseases and even cancer, especially colon and breast cancer . What’s more, everyday exercise enhances your heart efficiency by helping it pump more smoothly with less pressure.
                Your blood pressure can also be controlled if you regularly do ﻿﻿exercise because your blood can run more effectively through your arteries. Going to the gym five days a week, 30 minutes a day can decrease the risk of heart diseases.
                </p>
              </div>
            </div>
    )
}

export default LandingPage