import { connect } from "react-redux";

import { fetchData as fetchDataAction } from "./Action/actions";

import axios from "../../services/axios"
import * as api from "../../services/api";

import MainContent from "./MainContent";


const mapStateToProps = state => ({
    isLoading: state.package_specification.isLoading
});

const mapDispatchToProps = dispatch => ({
    fetchData: () => {
        axios.get(`${api.PACKAGE_SPEFICATION}`,
        {
            params: {
                page: 0,
                size: 100,
            }
        })
        .then(res => res.data)
        .then(response => {
            dispatch(fetchDataAction(response.data.data));
        })
        .catch(error => console.log(error));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);