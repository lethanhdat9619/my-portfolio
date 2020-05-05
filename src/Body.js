import React, { Component } from 'react';
import './Body.css';
import { Nav, Image, Navbar, Row, Col } from 'react-bootstrap'
import projectImg from './images/project.png';
import lineImg from './images/line.png';
import faceImg from'./images/face.png';
class Body extends Component {
    render() {
        return (
            <div className="body-container">
               <nav>
                   <ul>
                       <li className="item item-info">
                       <Image id="label-img" src={faceImg} roundedCircle width="16.5%"/>
                       <span id="label-select">INFO</span>
                       </li>
                       <li className="item item-project">
                       <Image id="label-img" src={projectImg} roundedCircle width="15%"/>
                       <span id="label-select">PROJECT</span>
                       </li>
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

               <h1 class="animated bounceInDown delay-1s" id="title">INFOMATION</h1>
               
               <Image src={lineImg} width="20%"/>
            </div>
           
        );
    }
}

export default Body;