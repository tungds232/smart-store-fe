import React, {Component} from "react";

import { Button } from "antd";

import NewItemModal from "./NewItemModal";

export default class AddItemButton extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            showModal: false
        }
    }

    handleAddItem = () => {console.log("Liem"); this.setState({showModal:true})};

    handleSubmitForm = () => this.setState({showModal:false});

    handleCancelForm = () => this.setState({showModal:false});

    render = () => {
        return (
            <div>
                <Button onClick={this.handleAddItem}>Thêm quy cách</Button>
                <NewItemModal data={this.props.data} visible={this.state.showModal} handleSubmitForm={this.handleSubmitForm} handleCancelForm={this.handleCancelForm}/>
            </div>
        );
    }
}