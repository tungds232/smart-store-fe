import React from 'react';

import MenuComponent from './MenuComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ContentComponent from './ContentComponent';

import './app.scss';

import {BrowserRouter as Router} from 'react-router-dom';
import { Layout } from 'antd';

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