import { connect } from "react-redux";

import NewItem from "./NewItem";

import axios from "../../../../services/axios";
import * as api from "../../../../services/api";

import {newData as packSpecNewData} from "../../../package_specification/Action/actions";

const mapStateToProps = state => ({
        data: state.package_specification.data.filter(item => item.isActive )
});

const mapDispatchToProps = dispatch => ({
    submit: (data) => {
        console.log(data);
        axios.post(`${api.PACKAGE_SPEFICATION}`, data)
            .then(res => res.data)
            .then(response => {
                console.log(response);
                dispatch(packSpecNewData(response.data.data));
                dispatch
            })
            .catch(error => console.error(error));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(NewItem);