import axios from "../../services/axios";

import { notification } from "antd";

const errorNotification = (description) => (
    notification.open({
        message: "Thất bại",
        description
    }));

const successNotification = (description) => (
    notification.open({
        message: "Thành công",
        description
    }));

export const getList = (dispatch, dispatchFunction, url, params = null) => {
    if (!params) {
        params = {
            page: 0,
            size: 100,
        };
    }
    axios.get(url,
        {
            params
        })
        .then(res => res.data)
        .then(response => {
            dispatch(dispatchFunction(response.data.data));
        })
        .catch(error => console.log(error));
}

export const remove = (dispatch, url, id, dispatchListFunction) => {
    axios.delete(`${url}/${id}`)
        .then(response => {
            if (response.data.error === true) {
                errorNotification(response.data.message);
            } else {
                successNotification("Xóa thành công");

                getList(dispatch, dispatchListFunction, url);
            }
        })
        .catch(error => { errorNotification("Server bị lỗi") });
}

export const changeActive = (dispatch, url, id, dispatchListFunction) => {
    axios.put(`${url}/change-active`, null, {
            params: {
                id
            }
        })
        .then(response => {
            if (response.data.error === true) {
                errorNotification(response.data.message);
            } else {
                successNotification("Cập nhật trạng thái thành công");

                getList(dispatch, dispatchListFunction, url);
            }
        })
        .catch(error => { errorNotification("Server bị lỗi") });
}