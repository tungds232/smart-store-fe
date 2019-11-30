import React, { Component } from "react";

import { Button, notification  } from "antd";

import ConfirmModal from "./ConfirmModal";

class Delete extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errorVisible: false,
            modalVisible: false
        };
    }

    errorNotification = (description) => (
        notification.open({
            message: "Xóa bị lỗi",
            description
        }));

    successNotification = () => (
        notification.open({
            message: "Xóa thành công",
            description: "Xóa thành công"
        }));

    showModalhandler = () => this.setState({modalVisible: true});

    deleteHandler = () => {
        this.props.delete(this.props.id);
        this.setState({modalVisible: false});
    };

    closeHandler = () => this.setState({modalVisible: false});

    render () {
        return (
            <div>
                <Button disabled={this.props.disabled} onClick={this.showModalhandler}>Loại bỏ</Button>
                <ConfirmModal 
                    visible={this.state.modalVisible}
                    delete={this.deleteHandler}
                    close={this.closeHandler}/>
            </div>
        );
    }
}

export default Delete;