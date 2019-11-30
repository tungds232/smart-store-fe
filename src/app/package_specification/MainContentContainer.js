import { connect } from "react-redux";

import { fetchData as fetchDataAction } from "./Action/actions";

import axios from "../../axios";

import MainContent from "./MainContent";


const mapStateToProps = state => ({
    isLoading: state.package_specification.isLoading
});

const mapDispatchToProps = dispatch => ({
    fetchData: () => {
        axios.get("/data")
        .then( response => dispatch(fetchDataAction(response.data)))
        .catch( error => console.log(error));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);