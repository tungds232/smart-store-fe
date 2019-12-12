import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Spin, Icon } from 'antd';

import List from "./ListData/ListDataContainer";
import Header from "./Header/Header";

class MainContent extends Component {
    constructor( props ) {
        super( props );

        this.state = {}
    }

    componentDidMount(){
        this.props.fetchPackSpecData();
    }

    render() {
        // const loading =  <Spin indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />} />;
        // if (this.props.isLoading) {
        //     loading = null;
        // }

        return (
            <div>
               <Header />
               <List />
            </div>
        )
    }

}

export default MainContent;