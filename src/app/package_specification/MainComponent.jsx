import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Table, Divider, PageHeader, Tag, Button, Statistic, Descriptions, Row, Input, Modal, Form, Result, Select, notification } from 'antd';

import './package_specification.css';


import List from "./ListData/ListData";
import Header from "./Header/Header";

const PACKAGE_SPECIFICATION_URL = "http://192.168.0.102:8887/test.json";
const PACKAGE_SPECIFICATION_DELETE_URL = "http://192.168.0.102:8887/delete.json";


class MainContent extends Component {
    constructor( props ) {
        super( props );

        this.state = {shownData: []}
    }

    render() {
        return (
            <div>
               <Header />
               <List data={this.props.shownData}/>
            </div>
        )
    }

}

const mapStateToProps = ( state ) => {
    return {
        data: state.package_specification.data,
        shownData: state.package_specification.shownData
    }
}

export default connect(mapStateToProps, null)(MainContent);