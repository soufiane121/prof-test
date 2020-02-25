import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
// import Projects from './components/Projects';
import ProjectPatent from './components/ProjectParent'

ReactDOM.render((
    <Router>
    < Route path="/" render={(routerProps) => <App {...routerProps}/>}/>
    < Route path="/about" render={(routerProps) => <About {...routerProps}/>} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={ProjectPatent} />
    </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
