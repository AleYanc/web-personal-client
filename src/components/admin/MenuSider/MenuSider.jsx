import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Layout, Menu} from 'antd';

// Icons //
import {HomeOutlined, MenuOutlined, UserOutlined, FolderOpenOutlined} from '@ant-design/icons'

// SASS //
import './MenuSider.scss'

const MenuSider = (props) => {
    const {Sider} = Layout;
    const {menuCollapsed, location} = props;

    return ( 
        <Sider className="admin-sider" collapsed={menuCollapsed}>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]}>

                <Menu.Item key="/admin">
                    <Link to={'/admin'}>
                        <HomeOutlined />
                        <span className="nav-text">Home</span>
                    </Link>
                </Menu.Item>

                <Menu.Item key="/admin/users">
                    <Link to={'/admin/users'}>
                        <UserOutlined />
                        <span className="nav-text">Users</span>
                    </Link>
                </Menu.Item>

                <Menu.Item key="/admin/projects">
                    <Link to={'/admin/projects'}>
                        <FolderOpenOutlined />
                        <span className="nav-text">Projects</span>
                    </Link>
                </Menu.Item>

            </Menu>
        </Sider>
    );
}
 
export default withRouter(MenuSider);