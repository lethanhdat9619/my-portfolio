import React, { Component } from 'react';
import './Body.css';
import { Image } from 'react-bootstrap'
import projectImg from './images/project.png';
import faceImg from'./images/face.png';
import WOW from 'wow.js';
import ScrollUpButton from "react-scroll-up-button";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Info from './Info.js';
import Project from './Project.js';
import { SocialIcon } from 'react-social-icons';
import NotFound from './NotFound';

class Body extends Component {
    constructor(props) {
    super(props);
    this.state = {
      scrollingLock: false
    };
}
   componentWillMount() {
    new WOW().init();
   }
    render() {
        return (
            <Router>
            <div className="body-container">
                <ScrollUpButton AnimationDuration={1000}/>
               <nav id="navbar">
                   <ul>
                   <Link to ="/information">
                       <li className="item item-info">
                       <Image id="label-img" src={faceImg} roundedCircle width="17%"/>
                       <span id="label-select">INFO</span>
                       </li>
                    </Link>
                      
                    <Link to ="/project">
                       <li className="item item-project">
                        <Image id="label-img" src={projectImg} roundedCircle width="15%"/>
                        <span id="label-select">PROJECT</span>
                        </li>
                    </Link>
                       
                       <li className="item item-about">
                       <Image id="label-img" src={projectImg} roundedCircle width="15%"/>
                       <span id="label-select">ABOUT</span>
                       </li>
                       
                       <li className="item item-contact">
                       <Image id="label-img" src={projectImg} roundedCircle width="15%"/>
                       <span id="label-select">CONTACT</span>
                       </li>
                   </ul>
               </nav>
               <div className="social-container">
                <SocialIcon className="facebook" url="https://www.facebook.com/thanhdat.le.2909"/>
                <SocialIcon className="facebook" url="http://youtube.com" />
                <SocialIcon className="facebook" url="http://spotify.com" />
                <SocialIcon className="facebook" url="https://soundcloud.com/thanhdat-le" />
                <SocialIcon className="facebook" url="https://github.com/lethanhdat9619" />
               </div>
                <Switch>
                    <Route exact path="/" component={Info} />
                    <Route path="/information" component={Info} />
                    <Route path="/project" component={Project} />
                    <Route component={NotFound} />
                </Switch>
            </div> 
            </Router>
        );
    }
}


export default Body;