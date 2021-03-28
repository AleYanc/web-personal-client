import React from 'react';

import './Login.scss';
import {Layout, Tabs} from 'antd';
import {Redirect} from 'react-router-dom';
import {getAccessTokenApi} from '../../../api/auth';

import Logo from '../../../components/misc/Logo';
import RegisterForm from '../../../components/admin/RegisterForm/RegisterForm';
import LoginForm from '../../../components/admin/LoginForm/LoginForm';

const Login = () => {
    const {Content} = Layout;
    const {TabPane} = Tabs;

    if(getAccessTokenApi()) {
        return <Redirect to='/admin' />
    }
    
    return ( 
        <Layout className="login">
            <Content className="login__content">
                <div className="login__content-logo-div" style={{padding: "60px 20px"}}>
                    <Logo className="login__content-logo" />
                </div>

                <div className="login__content-tabs">
                    <Tabs type="card">
                        <TabPane tab={<span>Enter</span>} key="1">
                            <LoginForm />
                        </TabPane>
                        <TabPane tab={<span>New User</span>} key="2">
                            <RegisterForm />
                        </TabPane>
                    </Tabs>
                </div>
            </Content>
        </Layout>
    );
}
 
export default Login;