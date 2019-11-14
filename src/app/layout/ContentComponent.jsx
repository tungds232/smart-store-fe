import React from 'react';
import { Route } from 'react-router-dom';

import { Layout } from 'antd';

import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

import Package_Specification from '../package_specification/MainComponent'

const { Content } = Layout;

function ContentComponent({ match }) {
    return (
        <div id="content">
            <HeaderComponent />
            <Content className="mainContent">
                <Route path="/Package-Specification" component={Package_Specification}></Route>
            </Content>
            <FooterComponent />
        </div>
    )
}

export default ContentComponent;