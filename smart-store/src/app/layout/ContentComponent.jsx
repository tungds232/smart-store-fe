import React from 'react';
import { Route } from 'react-router-dom';

import 'antd/dist/antd.css';
import { Layout } from 'antd';

import {MainComponent as Package_Specification} from '../package_specification/MainComponent'

const { Content } = Layout;

function ContentComponent({match}) {
    return (
        <Content>
            <Route path="/Package-Specification" component={Package_Specification}></Route>
        </Content>   
    ) 
}

export default ContentComponent;