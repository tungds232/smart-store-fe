import React, { Component } from 'react';

import { Button } from 'antd';

import NewItemModal from "./NewItemModal";

const NOCHILD_ID = 0;

class NewItem extends Component {
    constructor( props ) {
        super( props );
        
        this.state = {
            name: "",
            quantities: 1,
            selectedChildId: 0,
            children: [],
            modalVisible: false,
            disableQuantities: false
        }
    }

    showModalHandler = () => this.setState({modalVisible: true});

    selectChildItemHandler = (selectedChildId) => {
        const selectedPackSpec = this.props.data.find( item => item.id === selectedChildId );

        let children = [];
        if (selectedPackSpec) {
            let currentChild = selectedPackSpec;
            let currentQuantities = this.state.quantities;

            
            children.push({name: currentChild.name, quantities: currentQuantities});

            while (currentChild.child) {
                currentQuantities *= currentChild.quantities;
                children.push({name: currentChild.child.name, quantities: currentQuantities});

                currentChild = currentChild.child;
            }
        }
        
        this.setState({
            disableQuantities: selectedPackSpec ? false : true,
            selectedChildId,
            children
        });

        console.log("UHUH", this.state);
    }

    changeQuantitiesHandler = (quantities) => {
        if (quantities <= 0) {
            return;
        }

        const children = [...this.state.children];
        const newChildren = children.map( item => ({
            name: item.name,
            quantities: ( item.quantities / this.state.quantities ) * quantities
        }));

        this.setState({
            quantities,
            children: newChildren
        });

        console.log("AHAH", quantities);
    };

    inputNameHandler = (event) => this.setState({name: event.target.value});

    addItemHandler = () => {
        const data = {
            name: this.state.name,
            quantities: this.state.selectedChildId === NOCHILD_ID ? 0 : this.state.quantities,
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
                    disableQuantities= {this.state.disableQuantities}
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