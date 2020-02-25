import React from 'react'
import vid from './Hud.mp4'

const Welcome =()=>{
    return(
        <>
        <video autoPlay muted loop id="myVideo"  type="video/mp4">
        <source src={vid} type="video/mp4" />
        </video>
        <div className="anima"> 
        <div className="cssanimation typing"> Welcome To My <span className="spn">World</span> </div>
        </div>
        </>
    )
}

export default Welcome