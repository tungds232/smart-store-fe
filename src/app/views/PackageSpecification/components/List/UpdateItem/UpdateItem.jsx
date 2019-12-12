import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';

import {ButtonUpdate} from "../../../../../components/Button";
import Modal from "../../../../../components/Modal";
import CustomForm from "../../../../../components/Form";
import Select from "../../../../../components/Select";

import {Input, InputNumber} from "antd";

import * as api from "../../../../../../services/api";
import {create} from "../../../../../common/dispatchFunction";
import { fetchData } from '../../../../../../store/packageSpecification/actions';


class UpdateItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            visible: false,
            disableQuantity: false,
        }
    }

    showModalHandler = () => {
        this.setState({
            visible: true
        });
    }

    updateItemHandler = () => {
        const formProps = this.form.props.form;

        var data = formProps.getFieldsValue();

        this.props.submit(data);
        this.setState({visible: false});
        this.form.props.form.resetFields();
    };

    closeModalHandler = () => this.setState({visible: false});

    selectChildHanlder = (selected) => {
        console.log(selected);
        let disableQuantity = false;
        if(!selected){
            disableQuantity = true;
        }


        this.setState({
            disableQuantity,
        });
    }

    render(){
        let {id, items} = this.props;

        let currentItem = null;
        let filterItems = [];
        items.forEach((item, index) => {
            if(item.id === id){
                currentItem = item;
            }
            else {
                filterItems.push(item);
            }
        });

        const formCreateItems = [
            {
                label: "Quy cách",
                id: "name",
                field:  (<Input placeholder="Tên quy cách" />),
                initialValue: currentItem.name,
            },
            {
                label: "Số lượng",
                id: "quantity",
                field:  (<InputNumber disabled={this.state.disableQuantity} min={0} />),
                initialValue: currentItem.quantity,
            },
            {
                label: "Quy cách con",
                id: "childId",
                field: (<Select defaultText="Không có quy cách con" items={filterItems} onChange={this.selectChildHanlder}/>),
                initialValue: currentItem.childId,
            }
        ];

        const formContent = <CustomForm items={formCreateItems} wrappedComponentRef={form => this.form = form}/>
        return (
            <Fragment>
                <ButtonUpdate onClick={this.showModalHandler} title="Cập nhật" />
                <Modal 
                    title="Cập Nhật Quy Cách" 
                    visible={this.state.visible}
                    onOk={this.updateItemHandler}
                    onCancel={this.closeModalHandler}
                    content={formContent}
                />
            </Fragment>
        );
    }

}

const mapStateToProps = (state) => ({
    items: state.packageSpecification.shownData
});

const mapDispatchToProps = (dispatch) => ({
    submit: (data) => create(dispatch, api.PACKAGE_SPEFICATION, data, fetchData)
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateItem);