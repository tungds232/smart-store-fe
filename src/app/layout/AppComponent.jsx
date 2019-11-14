import React from 'react';

import MenuComponent from './MenuComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ContentComponent from './ContentComponent';

import { Layout } from 'antd';
import './app.scss';

import {BrowserRouter as Router} from 'react-router-dom';



function AppComponent() {
    return (
        <Router>
            <Layout>
                <HeaderComponent />
                <Layout hasSider={true}>
                    <MenuComponent />
                    <ContentComponent />   
                </Layout>
                <FooterComponent />
            </Layout> 
        </Router>
    )
}

export default AppComponent;