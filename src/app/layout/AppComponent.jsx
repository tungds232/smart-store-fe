import React from 'react';

import MenuComponent from './MenuComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ContentComponent from './ContentComponent';

// import { Layout } from 'antd';
import './app.scss';

import {BrowserRouter as Router} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function AppComponent() {
    return (
        <Router>
            <Layout style={{ minHeight: '100vh' }}>
                <MenuComponent />
                <Layout>
                    <HeaderComponent />
                    <ContentComponent />
                    <FooterComponent />
                </Layout>
            </Layout>
        </Router>
    )
}

export default AppComponent;