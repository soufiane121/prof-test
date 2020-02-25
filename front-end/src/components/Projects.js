import React from 'react'

class Projects extends React.Component{

    
    render(){
        return(
         
            <div className="cardPro" > 
            <div className="card" style={{width: 'auto'}} key={this.props.singleProject.index}>
            <video className="card-img-top" style={{height: 300}} controls loop type="video/mp4" controlsList="nodownload">
            <source src={this.props.singleProject.video} />
            </video>
            <div className="card-body">
            <h5 className="card-title">{this.props.singleProject.title}</h5>
            <p className="card-text">{this.props.singleProject.descrption}</p>
             <a href='https://www.linkedin.com/in/soufiane-oucherrou-949b201a2/' ><img className="linkd" src={this.props.singleProject.linkdin} alt="linkdin"/> </a>
              <a href={this.props.singleProject.githubCode} > <img  className="github" src={this.props.singleProject.github} alt="github-logo"/> </a>
            </div>
            </div> 
            </div>
        )
    }      
}

export default Projects;
