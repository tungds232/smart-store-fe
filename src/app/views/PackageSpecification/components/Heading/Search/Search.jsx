import React from "react";
import { connect } from "react-redux";
import Search from "../../../../../components/Search";
import {search as seachAction} from "../../../../../../store/packageSpecification/actions";

const {Component} = React;

class SearchContainer extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return <Search onSearch={this.props.search} />
    }
}

const mapStateToProps = ( state, ownProps ) => ({
    data: state.packageSpecification.data,
});

const mapDispatchToProps = ( dispatch ) => ({
    onSearch: shownData => dispatch(seachAction(shownData))
});

const mergeProps = (stateProps, dispatchProps) => ({
    search: keyWord => {
        let shownData = stateProps.data.map((item, index) => ({...item, order_number: index + 1,
            child: item.child ? item.child.name : null}));
        if (keyWord !== "") {
            const fields = ["name", "quantity", "child"];
            const findItem = item => fields.filter(key => item[key] !== null? item[key].toString().toLowerCase().includes(keyWord.toLowerCase()) : false).length > 0;

            shownData = shownData.filter(findItem);
        }

        dispatchProps.onSearch(shownData);
    }
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(SearchContainer);