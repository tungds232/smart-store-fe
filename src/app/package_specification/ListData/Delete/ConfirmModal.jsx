import React from "react";

import { Modal } from "antd";

const confirmModal = ( props ) => (
    <Modal
        title="Xóa quy cách"
        visible={props.visible}
        onOk={props.delete}
        onCancel={props.close}
        okText="Xác nhận"
        cancelText="Hủy"
        closable={true}
    >
        <p>Bạn muốn xóa quy cách này?</p>
    </Modal>
);

export default confirmModal;