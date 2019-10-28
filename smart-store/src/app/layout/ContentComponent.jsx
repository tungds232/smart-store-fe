import React from 'react';

import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { Table, Divider, PageHeader, Tag, Button, Statistic, Descriptions, Row, Input  } from 'antd';
import {MainComponent as Package_Specification} from '../package_specification/MainComponent'

import {Route } from 'react-router-dom';

const { Content } = Layout;

function ContentComponent({match}) {
    return (
        <Content>
            <Route path="/Package-Specification" component={Package_Specification}></Route>
        </Content>   
    ) 
}

export default ContentComponent;