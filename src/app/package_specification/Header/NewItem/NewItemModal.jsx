import React from "react";

import { Modal, Form, Input, InputNumber} from 'antd';

import SelectionItem from "./SelectionItem";
import ChildrenItem from "./ChildrenItem"

const newItemModal = ( props ) => {
    console.log("DISABLE: ", props.disableQuantities);
    return (
        <Modal
            title="Thêm quy cách"
            visible={props.visible}
            onOk={props.add}
            onCancel={props.close}
            okText="Tạo mới"
            cancelText="Hủy bỏ"
            closable={false}
        >
            <Form >
                <Form.Item label="Quy cách">
                    <Input placeholder="Tên quy cách" onChange={props.inputName}/>
                </Form.Item>
                <Form.Item label="Số lượng">
                    <InputNumber disabled={props.disableQuantities} min={1} defaultvalue={1} onChange={props.changeQuantities}/>
                </Form.Item>
                <Form.Item label="Quy cách con">
                    <SelectionItem 
                        selection={props.selection}
                        select={props.select}/>
                </Form.Item>
                <Form.Item>
                    <ChildrenItem data={props.childrenData}/>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default newItemModal;