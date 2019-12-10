import React, {Component} from "react";

import {Form} from "antd";
import {Input} from "antd";

class CustomForm extends Component {
    constructor(props){
        super(props);
    }


    render(){
        const {getFieldDecorator} = this.props.form;
        return (
            <Form>
                {this.props.items.map((item, key) => (
                    <Form.Item label={item.label} key={key}>
                        {getFieldDecorator(item.id)(item.field)}
                    </Form.Item>
                ))}
            </Form>
        );
    }
}

export default Form.create()(CustomForm);
