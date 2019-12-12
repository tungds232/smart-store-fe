import React from "react";

import { Modal } from 'antd';

const modal = ( props ) => {
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
            {props.content}
        </Modal>
    )
}

export default modal;