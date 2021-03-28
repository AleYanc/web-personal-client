import React from 'react';
import {Layout, Row, Col} from 'antd';
import {Link} from 'react-router-dom';

import './Footer.scss';

const FooterCommon = () => {
const {Footer} = Layout;

let year = new Date().getFullYear();

    return (
        <Footer className="footer">
            <Row>
                <Col md={4}/>
                <Col md={16}>
                    <Row>
                        <Col md={8}>
                            <a href="http://google.com">Go to clone repository</a>
                        </Col>
                        <Col md={8}>
                            <p>Alejo Yanczuk <br/> <span className="year">{year}</span></p>
                        </Col>
                        <Col md={8}>
                            <Link to="/admin">Admin section</Link>
                        </Col>
                    </Row>
                </Col>
                <Col md={4}/>
            </Row>
        </Footer>
    );
}
 
export default FooterCommon;