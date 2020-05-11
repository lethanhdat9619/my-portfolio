import React, { Component } from 'react';
import './Header.scss';
class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <div class="animate-flicker1">❆</div>
                <div class="animate-flicker2">❆</div>
                <div class="animate-flicker3">❆</div>
                <div class="animate-flicker4">❆</div>
                <div class="animate-flicker5">❆</div>

                {/* <div aria-hidden="true">
                    <span role="img" class="snowflake">❆</span>                    
                    <span role="img" class="snowflake">❆</span>                    
                    <span role="img" class="snowflake">❆</span>                    
                    <span role="img" class="snowflake">❆</span>                    
                    <span role="img" class="snowflake">❆</span>                    
                    <span role="img" class="snowflake">❆</span>                                         
                </div> */}

                <h2 className="portfolio">Le Thanh Dat</h2>

                <div class="animate-flicker1">❆</div>
                <div class="animate-flicker2">❆</div>
                <div class="animate-flicker3">❆</div>
                <div class="animate-flicker4">❆</div>
                <div class="animate-flicker5">❆</div>
            </div>
        );
    }
}

export default Header;