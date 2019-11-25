import React, { Component } from "react";

import { Button, notification  } from "antd";

import ConfirmModal from "./ConfirmModal";

class ActiveDeactive extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errorVisible: false,
            modalVisible: false
        };
    }

    errorNotification = () => (
        notification.open({
            message: "Kích hoạt bị lỗi",
            description: "Kích hoạt bị lỗi"
        }));

    successNotification = () => (
        notification.open({
            message: "Kích hoạt thành công",
            description: "Kích hoạt thành công"
        }));

    showModalhandler = () => this.setState({modalVisible: true});

    activeDeactiveHandler = () => {console.log("Active Deactive")};

    closeHandler = () => this.setState({modalVisible: false});

    render () {
        return (
            <div>
                <Button onClick={this.showModalhandler}>Kích hoạt</Button>
                <ConfirmModal 
                    visible={this.state.visible}
                    activeDeactive={this.activeDeactiveHandler}
                    close={this.closeHandler}/>
            </div>
        );
    }
}

export default ActiveDeactive;