import React from 'react';

import MenuComponent from './MenuComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ContentComponent from './ContentComponent';

import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import './app.css';

const { Header, Content, Sider, Footer } = Layout;



function AppComponent() {
    return (
        <div>
            { 
            <Layout>
                <HeaderComponent />
                <Layout hasSider={true}>
                    <MenuComponent />
                    <ContentComponent />
                </Layout>
                <FooterComponent />
            </Layout> 
            }
        </div>
    )
}

export default AppComponent;