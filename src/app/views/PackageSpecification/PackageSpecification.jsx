import React from "react";
import {connect} from "react-redux";

import Heading from "./components/Heading";
import List from "./components/List";

import axios from "../../../services/axios"
import * as api from "../../../services/api";

import {fetchData} from "../../../store/packageSpecification/actions";
import {getList} from "../../common/dispatchFunction";
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
    list: () => getList(dispatch, fetchData, api.PACKAGE_SPEFICATION)
});

export default connect(mapStateToProps, mapDispatchToProps)(PackageSpecification);