import React, { Component } from 'react';

import { Button } from 'antd';

import NewItemModal from "./NewItemModal";

class NewItem extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            name: "",
            quantities: 1,
            selectedChildId: 0,
            children: [],
            modalVisible: false
        }
    }

    showModalHandler = () => this.setState({modalVisible: true});

    selectChildItemHandler = (selectedChildId) => {
        if (selectedChildId === 0) {
            return;
        }

        const selectedChild = this.props.data.find( item => item.id === selectedChildId ).children;

        const children = selectedChild.map( item => ({
            name: item.name, 
            quantities: item.quantities * this.state.quantities
        }));

        this.setState({
            selectedChildId,
            children
        });
    }

    changeQuantitiesHandler = (quantities) => {
        const children = [...this.state.children];
        const newChildren = children.map( item => ({
            name: item.name,
            quantities: ( item.quantities / this.state.quantities ) * quantities
        }));

        this.setState({
            quantities,
            children: newChildren
        });
    };

    inputNameHandler = (event) => this.setState({name: event.target.value});

    addItemHandler = () => {
        const data = {
            name: this.state.name,
            quantities: this.state.quantities,
            childID: this.state.selectedChildId
        };

        this.props.submit(data);
    };

    closeModalHandler = () => this.setState({modalVisible: false});

    render() {
        return (
            <div>
                <Button onClick={this.showModalHandler}>Thêm quy cách</Button>
                <NewItemModal 
                    selection={this.props.data}
                    childrenData={this.state.children}
                    visible={this.state.modalVisible}
                    add={this.addItemHandler}
                    close={this.closeModalHandler}
                    inputName={this.inputNameHandler}
                    changeQuantities={this.changeQuantitiesHandler}
                    select={this.selectChildItemHandler}/>
            </div>
        );
    }
}

export default NewItem;