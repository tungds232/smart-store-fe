import React, { Component } from 'react';

import {BrowserRouter as Router} from 'react-router-dom';

import { Layout } from 'antd';

import MenuComponent from './MenuComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ContentComponent from './ContentComponent';

import './app.scss';



class AppComponent extends Component {
    constructor( props ) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPackSpecData();
    }

    render () {
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
}

export default AppComponent;