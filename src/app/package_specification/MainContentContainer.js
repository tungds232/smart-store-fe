import { connect } from "react-redux";

import MainContent from "./MainContent";

import axios from "../../services/axios"
import * as api from "../../services/api";

import {fetchData as packSpecFetchData} from "../../store/packageSpecification/actions";

const mapStateToProps = state => ({
    isLoading: state.package_specification.isLoading
});

const mapDispatchToProps = dispatch => ({
    fetchPackSpecData: () => {
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

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);