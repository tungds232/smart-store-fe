import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { ButtonCreate } from "../../../../../components/Button";
import Modal from "../../../../../components/Modal";
import CustomForm from "../../../../../components/Form";
import Select from "../../../../../components/Select";

import { Input, InputNumber } from "antd";

import * as api from "../../../../../../services/api";
import { create } from "../../../../../common/dispatchFunction";
import { fetchData } from '../../../../../../store/packageSpecification/actions';

import withCreate from "../../../../../hoc/Create/withCreate";

class CreateItem extends Component {
    constructor(props) {
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

    addItemHandler = async () => {
        const formProps = this.form.props.form;

        var data = formProps.getFieldsValue();
        
        // this.props.submit(data);
        await this.props.submitHandler(data);
        console.log("Liem 1");

        console.log(this.props.items);
        
        this.setState({ visible: false });
        this.form.props.form.resetFields();
    };

    componentWillUpdate () {
        console.log("Liem 2");
    }
    closeModalHandler = () => {
        this.form.props.form.resetFields();
        this.setState({ visible: false })
    };

    selectChildHanlder = (selected) => {
        let disableQuantity = false;
        if (!selected) {
            disableQuantity = true;
        }


        this.setState({
            disableQuantity,
        });
    }

    render() {
        let { items } = this.props;
        console.log(this.props)

        const formCreateItems = [
            {
                label: "Quy cách",
                id: "name",
                field: (<Input placeholder="Tên quy cách" />)
            },
            {
                label: "Số lượng",
                id: "quantity",
                field: (<InputNumber disabled={this.state.disableQuantity} min={1} defaultvalue={1} />)
            },
            {
                label: "Quy cách con",
                id: "childId",
                field: (<Select defaultText="Không có quy cách con" items={items} onChange={this.selectChildHanlder} />)
            }
        ];

        const formContent = <CustomForm items={formCreateItems} wrappedComponentRef={form => this.form = form} />
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

const mapDispatchToProps = (dispatch, ownProps) => ({
    submit: (items) => dispatch(fetchData(items))
});

//export default withCreate(api.PACKAGE_SPEFICATION)(connect(mapStateToProps, mapDispatchToProps)(CreateItem));

export default connect(mapStateToProps, mapDispatchToProps)(withCreate(api.PACKAGE_SPEFICATION)(CreateItem));
