import { connect } from "react-redux";

import { notification  } from "antd";

import { fetchData } from "../../Action/actions";

import ActiveDeactive from "./ActiveDeactive";
import axios from "../../../../services/axios";
import * as api from "../../../../services/api";

const errorNotification = (description) => (
    notification.open({
        message: "Cập nhật bị lỗi",
        description
    }));

const successNotification = () => (
    notification.open({
        message: "Cập nhật thành công",
        description: "Cập nhật thành công"
    }));

const mapDispatchToProps = (dispatch) => ({
    activeDeactive: (id) => {
        axios.put(`${api.PACKAGE_SPEFICATION}/change-active`, null, {
            params: {
                id: id,
            }
        })
            .then(response => {
                if (response.data.error === true) {
                    errorNotification(response.data.message);
                } else {
                    successNotification();

                    axios.get(`${api.PACKAGE_SPEFICATION}`, {
                        params: {
                            page: 0,
                            size: 100
                        }
                    })
                        .then(res => res.data)
                        .then(response => {
                            const resData = response.data.data;
                            const data = Object.keys(resData).map(key => resData[key]);
                            dispatch(fetchData(data));
                        })
                        .catch(error => errorNotification("Server xxx bị lỗi"));
                }
            })
            .catch(error => { errorNotification("Server bị lỗi") });
    }
});

export default connect(null, mapDispatchToProps)(ActiveDeactive);