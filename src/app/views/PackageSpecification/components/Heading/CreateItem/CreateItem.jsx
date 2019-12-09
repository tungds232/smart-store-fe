import React, {Component, Fragment} from 'react';

import {ButtonCreate} from "../../../../../components/Button";
import {ModalWithForm} from "../../../../../components/Modal";

class CreateItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            visible: false
        }
    }

    showModalHandler = () => {
        this.setState({
            visible: true
        });
    }

    addItemHandler = () => {
        // const data = {
        //     name: this.state.name,
        //     quantity: this.state.selectedChildId === NOCHILD_ID ? 0 : this.state.quantity,
        //     childId: this.state.selectedChildId === NOCHILD_ID ? null : this.state.selectedChildId
        // };

        // this.props.submit(data);

        this.setState({visible: false});
    };

    closeModalHandler = () => this.setState({visible: false});

    render(){
        return (
            <Fragment>
                <ButtonCreate onClick={this.showModalHandler} title="Thêm Quy Cách" />
                <ModalWithForm 
                    title="Thêm Quy Cách" 
                    visible={this.state.visible}
                    onOk={this.addItemHandler}
                    onCancel={this.closeModalHandler}
                />
            </Fragment>
        );
    }

}

export default CreateItem;