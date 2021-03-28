import React from 'react';
import {InstagramOutlined, LinkedinOutlined, GithubOutlined} from '@ant-design/icons';
import {NavLink, Link} from 'react-router-dom'

//Components//
import Logo from '../../misc/Logo';

import './MenuTopCommon.scss'

const MenuTopCommon = () => {
    return ( 
        <div className="header-wrapper">
            <div className="menu-web">
                <ul className="menu-web__item">
                    <NavLink activeStyle={{fontWeight: "bold", borderBottom: "1px solid #fff", paddingBottom: "5px"}} className="link" to="/contact">Contact</NavLink>
                </ul>

                <ul className="menu-web__item">
                    <NavLink activeStyle={{fontWeight: "bold", borderBottom: "1px solid #fff", paddingBottom: "5px"}} className="link" to="/portfolio">Portfolio</NavLink>
                </ul>
            </div>
            <Logo className="logo"/>
            <div className="social-media">
                <ul className="social-media__item">
                    <a href="https://google.com" target="_blank" className="social-media__link"><InstagramOutlined /></a>
                </ul>

                <ul className="social-media__item">
                    <a href="https://google.com" target="_blank" className="social-media__link"><LinkedinOutlined /></a>
                </ul>

                <ul className="social-media__item">
                    <a href="https://google.com" target="_blank" className="social-media__link"><GithubOutlined /></a>
                </ul>
            </div>
        </div>
    );
}
 
export default MenuTopCommon;