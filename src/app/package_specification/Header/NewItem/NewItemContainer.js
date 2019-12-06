import { connect } from "react-redux";

import NewItem from "./NewItem";

import axios from "../../../../services/axios";
import * as api from "../../../../services/api";

import {fetchData as packSpecFetchData} from "../../../package_specification/Action/actions";

const mapStateToProps = state => ({
        data: state.package_specification.data.filter(item => item.isActive )
});

const mapDispatchToProps = dispatch => ({
    submit: (data) => {
        console.log(data);
        axios.post(`${api.PACKAGE_SPEFICATION}`, data)
            .then(res => res.data)
            .then(response => {
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
            })
            .catch(error => console.error(error));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(NewItem);