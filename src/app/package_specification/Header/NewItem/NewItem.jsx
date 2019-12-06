import React, { Component } from 'react';

import { Button } from 'antd';

import NewItemModal from "./NewItemModal";

const NOCHILD_ID = 0;

class NewItem extends Component {
    constructor( props ) {
        super( props );
        
        this.state = {
            name: "",
            quantity: 1,
            selectedChildId: 0,
            children: [],
            modalVisible: false,
            disableQuantity: false
        }
    }

    showModalHandler = () => this.setState({modalVisible: true});

    selectChildItemHandler = (selectedChildId) => {
        const selectedPackSpec = this.props.data.find( item => item.id === selectedChildId );

        let children = [];
        if (selectedPackSpec) {
            let currentChild = selectedPackSpec;
            let currentQuantity = this.state.quantity;

            
            children.push({name: currentChild.name, quantity: currentQuantity});

            while (currentChild.child) {
                currentQuantity *= currentChild.quantity;
                children.push({name: currentChild.child.name, quantity: currentQuantity});

                currentChild = currentChild.child;
            }
        }
        
        this.setState({
            disableQuantity: selectedPackSpec ? false : true,
            selectedChildId,
            children
        });
    }

    changeQuantityHandler = (quantity) => {
        if (quantity <= 0) {
            return;
        }

        const children = [...this.state.children];
        const newChildren = children.map( item => ({
            name: item.name,
            quantity: ( item.quantity / this.state.quantity ) * quantity
        }));

        this.setState({
            quantity,
            children: newChildren
        });
    };

    inputNameHandler = (event) => this.setState({name: event.target.value});

    addItemHandler = () => {
        const data = {
            name: this.state.name,
            quantity: this.state.selectedChildId === NOCHILD_ID ? 0 : this.state.quantity,
            childID: this.state.selectedChildId === NOCHILD_ID ? null : this.state.selectedChildId
        };

        this.props.submit(data);

        this.setState({modalVisible: false});
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
                    disableQuantity= {this.state.disableQuantity}
                    add={this.addItemHandler}
                    close={this.closeModalHandler}
                    inputName={this.inputNameHandler}
                    changeQuantity={this.changeQuantityHandler}
                    select={this.selectChildItemHandler}/>
            </div>
        );
    }
}

export default NewItem;