import { connect } from "react-redux";

import Search from "./SearchItem";

const mapStateToProps = ( state, ownProps ) => ({
    data: state[ownProps.type].data,
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    onSearch: shownData => dispatch(ownProps.action(shownData))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    search: keyWord => {
        let shownData = stateProps.data.map(ownProps.filter);
        if (keyWord !== "") {
            const findItem = item => ownProps.fields.filter(key => item[key] !== null? item[key].toString().toLowerCase().includes(keyWord.toLowerCase()) : false).length > 0;

            shownData = shownData.filter(findItem);
        }

        dispatchProps.onSearch(shownData);
    }
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Search);