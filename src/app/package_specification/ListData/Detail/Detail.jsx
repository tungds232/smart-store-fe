import React, { Component } from 'react';

import { Button } from "antd";

import DetailModal from "./DetailModal";

class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {modalVisible: false};
    }

    showDetailModalHandler = () => this.setState({modalVisible: true});

    closeDetailModalHandler = () => this.setState({modalVisible: false});

    render () {
        console.log("DATA: ", this.props.data);
        return (
            <div>
                <Button onClick={this.showDetailModalHandler}>Chi tiết</Button>
                <DetailModal 
                    visible={this.state.modalVisible} 
                    data={this.props.data}
                    close={this.closeDetailModalHandler}/>
            </div>
        );
    }
}

export default Detail;
