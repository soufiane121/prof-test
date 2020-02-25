import React from 'react'
import AllProjects from './AllProjects'
import Projects from './Projects';

const ProjectPatent=()=>{
    return (    
        <div className='projctcard'>
            {AllProjects.reverse().map(singleProject=> <Projects singleProject={singleProject} key={singleProject.title}/>) }
        </div>
    )
}

export default ProjectPatent;