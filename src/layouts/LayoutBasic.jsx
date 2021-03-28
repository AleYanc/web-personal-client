import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Layout} from 'antd';

//SASS//
import './LayoutBasic.scss';

// Components //
import MenuTopCommon from '../components/common/MenuTopCommon';
import FooterCommon from '../components/common/Footer';

const LayoutBasic = (props) => {
    const {routes} = props;
    const {Header, Content, Footer} = Layout;

    return ( 
        <Layout>
            <Header id="header">
                <MenuTopCommon />
            </Header>
            <Content>
                <LoadRoutes routes={routes} />
            </Content>
            
            <FooterCommon />
            
        </Layout>
    );
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
 
export default LayoutBasic;