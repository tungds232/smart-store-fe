import React from "react";

import { Modal } from "antd";

const confirmModal = ( {title, visible, remove, close} ) => (
    <Modal
        title={`Xóa ${title}`}
        visible={visible}
        onOk={remove}
        onCancel={close}
        okText="Xác nhận"
        cancelText="Hủy"
        closable={true}
    >
        <p>{`Bạn muốn xóa ${title} này?`}</p>
    </Modal>
)


export default confirmModal;