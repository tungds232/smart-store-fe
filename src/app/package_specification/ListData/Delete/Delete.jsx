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

    deleteHandler = () => {console.log("Delete")};

    closeHandler = () => this.setState({modalVisible: false});

    render () {
        return (
            <div>
                <Button onClick={this.showModalhandler}>Xóa</Button>
                <ConfirmModal 
                    visible={this.state.visible}
                    delete={this.deleteHandler}
                    close={this.closeHandler}/>
            </div>
        );
    }
}

export default Delete;