import React from 'react';
import { Route } from 'react-router-dom';

import { Layout } from 'antd';

import Package_Specification from '../package_specification/MainComponent'

const { Content } = Layout;

function ContentComponent({match}) {
    return (
        <Content className="mainContent">
            <Route path="/Package-Specification" component={Package_Specification}></Route>
        </Content>   
    ) 
}

export default ContentComponent;