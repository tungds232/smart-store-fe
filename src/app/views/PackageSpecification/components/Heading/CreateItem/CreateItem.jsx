import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';

import {ButtonCreate} from "../../../../../components/Button";
import Modal from "../../../../../components/Modal";
import CustomForm from "../../../../../components/Form";
import Select from "../../../../../components/Select";

import {Input, InputNumber} from "antd";

import * as api from "../../../../../../services/api";
import {create} from "../../../../../common/dispatchFunction";
import { fetchData } from '../../../../../../store/packageSpecification/actions';


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
        const formProps = this.form.props.form;

        var data = formProps.getFieldsValue();
        // const data = {
        //     name: this.state.name,
        //     quantity: this.state.selectedChildId === NOCHILD_ID ? 0 : this.state.quantity,
        //     childId: this.state.selectedChildId === NOCHILD_ID ? null : this.state.selectedChildId
        // };

        // this.props.submit(data);
        this.props.submit(data);
        this.setState({visible: false});
        this.form.props.form.resetFields();
    };

    closeModalHandler = () => this.setState({visible: false});

    selectChildHanlder = () => console.log(1234);

    render(){
        let {items} = this.props;
        items.unshift({
            name: "Không có quy cách con"
        });

        const formCreateItems = [
            {
                label: "Quy cách",
                id: "name",
                field:  (<Input placeholder="Tên quy cách" />)
            },
            {
                label: "Số lượng",
                id: "quantity",
                field:  (<InputNumber min={1} defaultvalue={1} />)
            },
            {
                label: "Quy cách con",
                id: "childId",
                field: (<Select items={items} onChange={this.selectChildHanlder}/>)
            }
        ];

        const formContent = <CustomForm items={formCreateItems} wrappedComponentRef={form => this.form = form}/>
        return (
            <Fragment>
                <ButtonCreate onClick={this.showModalHandler} title="Thêm Quy Cách" />
                <Modal 
                    title="Thêm Quy Cách" 
                    visible={this.state.visible}
                    onOk={this.addItemHandler}
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateItem);