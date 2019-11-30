import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Spin, Icon } from 'antd';

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
        // const loading =  <Spin indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />} />;
        // if (this.props.isLoading) {
        //     loading = null;
        // }

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