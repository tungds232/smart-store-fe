import { connect } from "react-redux";

import { search as seachAction } from "../../Action/actions";

import Search from "./SearchItem";

const mapStateToProps = ( state ) => ({
    data: state.package_specification.data,
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

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Search);