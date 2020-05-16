import React, { Component } from 'react';
import './Info.css';
import lineImgCircle from './images/line2.png';
import gameImg from './images/game.png';
import dotaImg from './images/dota2.png';
import pubgImg from './images/pubg.png';
import csImg from './images/counter_strike.png';
import signature from './images/signature.png';
import lineImg from './images/line.png';
import { Image } from 'react-bootstrap';

class Info extends Component {
    render() {
        return (
            <div class="info-container">
                <h1 class="animated bounceInDown delay-0.5s" id="title">INFORMATION</h1>
            
            <Image src={lineImg} width="30%"/>
             <p>Welcome to my website! I'm a Front-end Developer with almost 1 year experience building and maintain responsive websites. Passionate about design webs usability and User experience design.    </p>
             <p>I like adventures and talking risks so every second i search for a new thing to do which will help me open up for new opportuinties as well as teach me new ideas about life.</p>
            <Image src={lineImgCircle} width="30%"/>
        
             <h1 id="category-item">TIMELINE</h1>
            
             <div className="timeline-container">
                 <div class="wow bounceInRight" id="timeline-item">
                     <div className="timeline-sequence"></div>
                     <div className="timeline-box boxInRightSide">
                         <h2>2015</h2>
                         <p id="timeline-content">Study at Posts and Telecommunications Institue of Technology</p>
                     </div>
                 </div>
                 <div class="wow bounceInLeft" id="timeline-item">
                     <div className="timeline-sequence"></div>
                     <div className="timeline-box boxInLeftSide ">
                         <h2>2016</h2>
                         <p id="timeline-content">Join PTIT Club</p>
                     </div>
                 </div>
                 <div class="wow bounceInRight" id="timeline-item">
                     <div className="timeline-sequence"></div>
                     <div className="timeline-box boxInRightSide ">
                         <h2>2017</h2>
                         <p id="timeline-content">Learn Toeic and Japanese</p>
                     </div>
                 </div>
                 <div class="wow bounceInLeft" id="timeline-item">
                     <div className="timeline-sequence"></div>
                     <div className="timeline-box boxInLeftSide ">
                         <h2>2019</h2>
                         <p id="timeline-content">Work at VTI company</p>
                     </div>
                 </div>
                 <div class="wow bounceInRight" id="timeline-item">
                     <div className="timeline-sequence"></div>
                     <div className="timeline-box boxInRightSide ">
                         <h2>2020</h2>
                         <p id="timeline-content">Graduated from PTIT </p>
                     </div>
                 </div>
             </div>

             <h1 id="category-item">SKILLS</h1>
            
            <p>HTML, CSS, JavaScript</p>
            <p>ReactJS, VueJS, ExpressJS</p>
            <p>MySQL, MongoDB</p>
            <p>Clear communication and highly organized</p>
        
             <Image src={lineImgCircle} width="30%"/>
        
             <h1 id="category-item">PERSONAL INTERESTS</h1>
            
             <div className="hobbies-container">
                 <Image src={gameImg} width="20%" className="hobbie-title"></Image>
                 <ul>
                     <li>
                     <Image src={dotaImg} className="hobbieImg dota2Img"></Image>
                     </li>
                     <li>
                     <Image src={pubgImg} className="hobbieImg pubgImg"></Image>
                     </li>
                     <li>
                     <Image src={csImg} className="hobbieImg counterstrikeImg"></Image>
                     </li>
                     
                 </ul>
                
             </div>

             <Image src={lineImgCircle} width="30%"/>
        
             <h1 id="category-item">SIGNATURE</h1>
        
             <Image src={signature}></Image> 
            </div>

        );
    }
}

export default Info;
