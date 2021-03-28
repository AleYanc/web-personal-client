import React, {useState, Fragment} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Layout, Menu} from 'antd';
import Login from '../pages/admin/Login/Login';

// Hook //
import useAuth from '../hooks/useAuth';

// Components //
import MenuTop from '../components/admin/MenuTop';
import MenuSider from '../components/admin/MenuSider/MenuSider';

//SASS//
import './LayoutAdmin.scss';

const LayoutAdmin = (props) => {
    const {routes} = props;
    const {Header, Content, Footer} = Layout;
    const {user, isLoading} = useAuth();

    const [menuCollapsed, setMenuCollapsed] = useState(false);

    if(!user && !isLoading) {
        return (
            <Fragment>
                <Redirect to="/admin/login" />
                <Route path="/admin/login" component={Login} />
            </Fragment>
        )
    }

    if(user && !isLoading) {
        return ( 
            <Layout>
                <MenuSider menuCollapsed={menuCollapsed}/>
                <Layout className="layout-admin" style={{marginLeft: menuCollapsed ? '80px' : '200px'}}>
                    <Header className="layout-admin__header"> 
                        <MenuTop menuCollapsed={menuCollapsed} setMenuCollapsed={setMenuCollapsed}/>
                    </Header>
                    <Content className="layout-admin__content">
                        <LoadRoutes routes={routes} />
                    </Content>
                    <Footer className="layout-admin__footer">Alejo Yanczuk</Footer>
                </Layout>
            </Layout>
        );
    }

    return null;
    
}

function LoadRoutes({routes}) {
    return (
        <Switch>
        {routes.map((route, index) => (
            <Route key={index} path={route.path} exact={route.exact} component={route.component}/>
        ))}
        </Switch>
    );
}
 
export default LayoutAdmin;