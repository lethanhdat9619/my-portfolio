import React, { Component } from 'react';
import NotFoundImg from './images/404.png';
import { Image } from 'react-bootstrap';
class NotFound extends Component {
    render() {
        return (
            <div>
                <Image src={NotFoundImg } width="56%"></Image>
            </div>
        );
    }
}

export default NotFound;