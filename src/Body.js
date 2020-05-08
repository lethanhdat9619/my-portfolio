import React, { Component } from 'react';
import './Body.css';
import { Image, Button } from 'react-bootstrap'
import projectImg from './images/project.png';
import lineImg from './images/line.png';
import faceImg from'./images/face.png';
import lineImgCircle from './images/line2.png';
import gameImg from './images/game.png';
import dotaImg from './images/dota2.png';
import pubgImg from './images/pubg.png';
import csImg from './images/counter_strike.png';
import WOW from 'wow.js';
import ScrollUpButton from "react-scroll-up-button";

class Body extends Component {
   
    constructor(props) {
    super(props);
    this.state = {
      scrollingLock: false
    };
    // example how to bind object in React ES6
    this.handleScroll = this.handleScroll.bind(this)
}
componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
}
componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
}
handleScroll() {

    if (window.scrollY > 100) {
      console.log("should lock");
      this.setState({
        scrollingLock: true
      });
    } else if (window.scrollY < 100) {
      console.log("not locked" );
      this.setState({
        scrollingLock: false
      });
    }
  
  }
   componentWillMount() {
    new WOW().init();
   }
    render() {
        return (
            <div className="body-container">
                <ScrollUpButton AnimationDuration={1000}/>
               <nav id="navbar" style={{position: this.state.scrollingLock ? "fixed" : "relative"}}>
                   <ul>
                       <li className="item item-info">
                       <Image id="label-img" src={faceImg} roundedCircle width="17%"/>
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

               <h1 class="animated bounceInDown delay-0.5s" id="title">INFOMATION</h1>
            
               <Image src={lineImg} width="30%"/>
                <p>Châm ngôn: Sau này, cần cù thì bù siêng năng, chỉ có làm thì mới có ăn, những cái loại không làm mà muốn có ăn thì ...</p>
                <p>Triết lý: Ra xã hội làm ăn bươn chải, liều nhiều thì ăn nhiều, liều ít thì ăn ít, không liều thì không có mà ăn (Huấn Rô Sì)</p>
               <Image src={lineImgCircle} width="30%"/>

                <h1 id="category-item">TIMELINE</h1>
               
                <div className="timeline-container">
                    <div class="wow bounceInRight" id="timeline-item">
                        <div className="timeline-sequence"></div>
                        <div className="timeline-box boxInRightSide">
                            <h2>2015</h2>
                            <p id="timeline-content"> Vào học tại Học viện Công nghệ Bưu chính Viễn thông</p>
                        </div>
                    </div>
                    <div class="wow bounceInLeft" id="timeline-item">
                        <div className="timeline-sequence"></div>
                        <div className="timeline-box boxInLeftSide ">
                            <h2>2016</h2>
                            <p id="timeline-content">Thi lại môn C++</p>
                        </div>
                    </div>
                    <div class="wow bounceInRight" id="timeline-item">
                        <div className="timeline-sequence"></div>
                        <div className="timeline-box boxInRightSide ">
                            <h2>2017</h2>
                            <p id="timeline-content">Tiếp tục thi lại môn C++</p>
                        </div>
                    </div>
                    <div class="wow bounceInLeft" id="timeline-item">
                        <div className="timeline-sequence"></div>
                        <div className="timeline-box boxInLeftSide ">
                            <h2>2018</h2>
                            <p id="timeline-content">Thi qua C++</p>
                        </div>
                    </div>
                    <div class="wow bounceInRight" id="timeline-item">
                        <div className="timeline-sequence"></div>
                        <div className="timeline-box boxInRightSide ">
                            <h2>2019</h2>
                            <p id="timeline-content">Tốt nghiệp</p>
                        </div>
                    </div>
                </div>

                <Image src={lineImgCircle} width="30%"/>

                <h1 id="category-item">HOBBIES</h1>
               
                <div className="hobbies-container">
                    <Image src={gameImg} width="20%" className="hobbie-title"></Image>
                    <ul>
                        <li>
                        <Image src={dotaImg} width="200px" style={{paddingTop: "70px"}}></Image>
                        </li>
                        <li>
                        <Image src={pubgImg} width="200px" style={{paddingTop: "70px"}}></Image>
                        </li>
                        <li>
                        <Image src={csImg} width="200px" style={{paddingTop: "70px"}}></Image>
                        </li>
                    </ul>
                   
                    
                    
                    
                </div>
                    
            </div>
           
        );
    }
}

export default Body;