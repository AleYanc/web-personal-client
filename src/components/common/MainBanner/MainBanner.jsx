import React from 'react';
import {Row, Col} from 'antd';

import './MainBanner.scss';

const MainBanner = () => {
    return ( 
        <div className="main-banner">
            <div className="main-banner__dark"></div>

            <Row>
                <Col lg={4}/>
                <Col lg={16}>
                    <h2>Web Developer</h2>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
                </Col>
                <Col lg={4}/>
            </Row>
        </div>
    );
}
 
export default MainBanner;