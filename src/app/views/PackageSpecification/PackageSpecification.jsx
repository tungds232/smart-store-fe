import React from "react";
import {connect} from "react-redux";

import Heading from "./components/Heading";
import List from "./components/List";

import axios from "../../../services/axios"
import * as api from "../../../services/api";

import {fetchData as packSpecFetchData} from "../../../store/packageSpecification/actions";

const {Component, Fragment} = React;

class PackageSpecification extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.list();
    }

    render(){
        const {items} = this.props;
        return (
           <Fragment>
               <Heading />
               <List data={items}/>
           </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.packageSpecification.shownData
});

const mapDispatchToProps = (dispatch) => ({
    list: () => {
        axios.get(`${api.PACKAGE_SPEFICATION}`,
        {
            params: {
                page: 0,
                size: 100,
            }
        })
        .then(res => res.data)
        .then(response => {
            dispatch(packSpecFetchData(response.data.data));
        })
        .catch(error => console.log(error));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PackageSpecification);