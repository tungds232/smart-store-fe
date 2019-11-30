import { connect } from "react-redux";

import { notification  } from "antd";

import { fetchData } from "../../Action/actions";

import Delete from "./Delete";
import axios from "../../../../axios";


const errorNotification = (description) => (
    notification.open({
        message: "Xóa bị lỗi",
        description
    }));

const successNotification = () => (
    notification.open({
        message: "Xóa thành công",
        description: "Xóa thành công"
    }));

const mapDispatchToProps = ( dispatch) => ({
    delete: (id) => {
        axios.delete(`/package_specification.json/${id}`)
        .then(response => {
            if(response.data.error === true) {
                errorNotification(response.data.message);
            } else {
                successNotification();

                axios.get("/pack_spec_data.json")
                .then(response => {
                    const data = Object.keys(response.data).map(key => response.data[key]);
                    dispatch(fetchData(data));
                })
                .catch(error => console.log(error));
            }
        })
        .catch(error => { console.log(error) });
    }
});

export default connect(null, mapDispatchToProps)(Delete);