import React from 'react';

import MenuComponent from './MenuComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ContentComponent from './ContentComponent';

import 'antd/dist/antd.css';
import { Layout } from 'antd';

function AppComponent() {
    return (
        <div>
            <Layout>
                <HeaderComponent />
                <MenuComponent />
                <ContentComponent />
                <FooterComponent />
            </Layout>
        </div>
    )
}

export default AppComponent;