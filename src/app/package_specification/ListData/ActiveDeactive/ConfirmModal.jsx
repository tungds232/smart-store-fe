import React from "react";

import { Modal } from "antd";

const confirmModal = ( props ) => (
    <Modal
        title="Kích hoạt quy cách"
        visible={props.visible}
        onOk={props.activeDeactive}
        onCancel={props.close}
        okText="Xác nhận"
        cancelText="Hủy"
        closable={true}
    >
        <p>Bạn muốn kích hoạt quy cách này?</p>
    </Modal>
);

export default confirmModal;