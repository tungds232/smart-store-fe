import React from "react";

import { Modal, Form, Input, InputNumber} from 'antd';

const modalWithForm = ( props ) => {
    return (
        <Modal
            title={props.title}
            visible={props.visible}
            onOk={props.onOk}
            onCancel={props.onCancel}
            okText="Đồng ý"
            cancelText="Hủy bỏ"
            closable={false}
        >
            <Form >
                <Form.Item label="Quy cách">
                    <Input placeholder="Tên quy cách" onChange={props.inputName}/>
                </Form.Item>
                <Form.Item label="Số lượng">
                    <InputNumber disabled={props.disableQuantity} min={1} defaultvalue={1} onChange={props.changeQuantity}/>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default modalWithForm;