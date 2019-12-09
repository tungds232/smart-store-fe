import React from 'react';
import { Route } from 'react-router-dom';

import { Layout } from 'antd';

import Package_Specification from '../package_specification/MainContentContainer'
import PackageSpecification from '../views/PackageSpecification';

const { Content } = Layout;

function ContentComponent({ match }) {
    return (
        <Content className="mainContent">
            <Route path="/Package-Specification" component={Package_Specification}></Route>
            <Route path="/package-specification-2" component={PackageSpecification}></Route>
        </Content>
    );
}

export default ContentComponent;