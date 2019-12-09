import React, { Component } from "react";

import { Button, notification  } from "antd";

import ConfirmModal from "./ConfirmModal";

class Delete extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false
        };
    }

    errorNotification = () => (
        notification.open({
            message: "Xóa bị lỗi",
            description: "Xóa bị lỗi"
        }));

    successNotification = () => (
        notification.open({
            message: "Xóa thành công",
            description: "Xóa thành công"
        }));

    showModalhandler = () => this.setState({modalVisible: true});

    removeHandler = () => {
        this.props.remove();

        if (this.props.error) {
            this.errorNotification();
        } else {
            this.successNotification();
        }

        this.setState({modalVisible: false});
    };

    closeHandler = () => this.setState({modalVisible: false});

    render () {
        return (
            <div>
                <Button disabled={this.props.disabled} onClick={this.showModalhandler}>Loại bỏ</Button>
                <ConfirmModal 
                    title={this.props.title}
                    visible={this.state.modalVisible}
                    remove={this.deleteHandler}
                    close={this.closeHandler}
                />
            </div>
        );
    }
}

export default Delete;