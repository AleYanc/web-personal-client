import React from 'react';
import {Button} from 'antd';
import {MenuUnfoldOutlined, MenuFoldOutlined, PoweroffOutlined} from '@ant-design/icons';
import Logo from '../../misc/Logo';
import {logOut} from '../../../api/auth'

// SASS //
import './MenuTop.scss'

const MenuTop = (props) => {
    const {menuCollapsed, setMenuCollapsed} = props;

    const logoutUser = () => {
        logOut();
        window.location.reload();
    }

    return ( 
        <div className="menu-top">
            <div className="menu-top__left">
                <Logo />
                <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
                    {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
            </div>
            <div className="menu-top__right" onClick={logoutUser}>
                <Button type="link">
                    <PoweroffOutlined />
                </Button>
            </div>
        </div>
    );
}
 
export default MenuTop;