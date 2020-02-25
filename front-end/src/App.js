import React from 'react';
import './App.css';
import Navv from './components/Navv';
import Switching from './Container/Switching';

class App extends React.Component {
state={
  disp: true,
}

 componentDidMount=()=>{
  if (this.props.history.location.pathname === "/") {
  this.setState({disp: true})
  } else if (this.props.history.location.pathname === "/about") {
    this.setState({disp: false})
  } else if (this.props.history.location.pathname === "/contact") {
    this.setState({disp: false})
  } else if (this.props.history.location.pathname === "/projects") {
    this.setState({disp: false})
  } else if (this.props.history.location.pathname === "/blogs") {
    this.setState({disp: false})
  }
 }

  handleAbout=()=>{
    this.setState({disp: false})
    this.props.history.push("/about")
  }

  handleContact=()=>{
    this.setState({disp: false})
    this.props.history.push("/contact")
  }

 handlePorojects=()=>{
  this.setState({disp: false})
  this.props.history.push("/projects")
 }

  handleLogo=()=>{
  this.setState({disp: true})
  this.props.history.push("/")
  }

  
  render(){

  return (
    <>
    <Navv 
    handleAbout={this.handleAbout} 
    handleContact={this.handleContact}
    handleLogo={this.handleLogo}
    handlePorojects={this.handlePorojects}
    /> 
    <Switching disp={this.state.disp} />
    </>
  );
  }
}

export default App;
