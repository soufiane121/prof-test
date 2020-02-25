import React from 'react'
import Welcome from '../components/Welcome';


const Switching=(props)=>{

    return (
        <>
        { props.disp && <Welcome />        }
        </>
    )
}

export default Switching;