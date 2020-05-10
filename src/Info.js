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
            <div>
                <h1 class="animated bounceInDown delay-0.5s" id="title">INFORMATION</h1>
            
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
                         <h2>2020</h2>
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
