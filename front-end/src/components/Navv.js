import React from 'react'
import  Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navv=(props)=>{  
    return (
    <Navbar bg='info'  expand="lg" sticky="top"  className="all">
        <Navbar.Brand className="logo" onClick={props.handleLogo}>Soufiane Oucherrou</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="btn"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto" >
            <Nav.Link ></Nav.Link>
            </Nav>
            <Nav className="list" >
            <Nav.Link className="about" onClick={props.handleAbout}>ABOUT</Nav.Link>
            <Nav.Link className="project" onClick={props.handlePorojects}>PROJECTS</Nav.Link>
            <Nav.Link className="contact" onClick={props.handleContact}>CONTACT</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}

export default Navv;