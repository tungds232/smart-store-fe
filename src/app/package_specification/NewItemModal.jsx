import React, {Component} from 'react';

import { Modal,
         Form,
         Input, 
         InputNumber,
         Button,
         Select,
         Descriptions } from 'antd';
const { Option } = Select;
const { FormItem } = Form;


export default class NewItemModal extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            quantities: 0,
            selectedChild: 0
        }
    }

    createSelections = () => {
        const selections = this.props.data.map( item => <Option value={item.id}>{item.parentPackageSpecification}</Option> );
        // console.log(this.props.data);
        return selections;
    }

    createChildPackage = () => {
        console.log(this.props.data);
        for ( let index = 0; index < this.props.data.length; ++index ) {
            if (  this.props.data[index].id === this.state.selectedChild ) {
                var children = this.props.data[index].children;
                console.log(children);
                break;
            }
        }

        console.log(this.state.selectedChild);

        const childrenItems = children.map( item => <Descriptions.Item label={ item.name } > { item.quantities * this.state.quantities } </Descriptions.Item>)

        const desciptions = <Descriptions>
                                {childrenItems}
                            </Descriptions>;

        return desciptions;
    }

    handleQuantitiesChange = quantities =>  this.setState({ quantities });

    handleSelectChildPackage = selectedChild => this.setState({ selectedChild });

    render = () => {
        // const { getFieldDecorator } = this.props.form;

        return (
            <Modal
                title="Thêm quy cách"
                visible={ this.props.visible }
                okButtonProps={{hidden:true}}
                cancelButtonProps={{hidden:true}}
            >
                <Form >
                    <Form.Item label="Quy cách">
                        <Input placeholder="Tên quy cách"/>
                    </Form.Item>
                    <Form.Item label="Số lượng">
                        <InputNumber min={0} defaultvalue={0} onChange={this.handleQuantitiesChange}/>
                    </Form.Item>
                    <Form.Item label="Quy cách con">
                        <Select defaultValue="" onChange={this.handleSelectChildPackage}>
                            <Option value={0}>Không quy cách con</Option>
                            {this.createSelections()}
                        </ Select>
                    </Form.Item>
                    <Form.Item>
                        {this.state.selectedChild ? this.createChildPackage() : null}
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" onClick={this.props.handleSubmitForm}>Tạo mới</Button>
                        <Button onClick={this.props.handleCancelForm}>Hủy bỏ</Button>
                    </Form.Item>
                </Form>
            </Modal>
        )
    }
}