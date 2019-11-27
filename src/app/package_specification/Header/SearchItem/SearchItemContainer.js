import { connect } from "react-redux";

import { search as seachAction } from "../../Action/actions";

import Search from "./SearchItem";

const mapStateToProps = ( state ) => ({
    data: state.package_specification.data
});

const mapDispatchToProps = ( dispatch ) => ({
    onSearch: shownData => dispatch(seachAction(shownData))
});

const mergeProps = (stateProps, dispatchProps) => {
    return {
        search: keyWord => {
            let shownData;
            if (keyWord === "") {
                shownData = stateProps.data;
            } else {
                const findItem = item => Object.keys(item).filter(key => item[key].toString().includes(keyWord)).length > 0;               
                shownData = stateProps.data.filter(findItem);
            }

            dispatchProps.onSearch(shownData);
        }
    }
} 

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Search);