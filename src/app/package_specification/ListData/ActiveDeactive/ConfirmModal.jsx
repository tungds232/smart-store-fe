import React from "react";

import { Modal } from "antd";

const confirmModal = ( props ) => (
    <Modal
        title="Kích hoạt quy cách"
        visible={this.props.visible}
        onOK={this.prop.activeDeactive}
        onCancel={this.prop.close}
        okText="Xác nhận"
        cancelText="Hủy"
        closable={true}
    >
        <p>Bạn muốn kích hoạt quy cách này?</p>
    </Modal>
);

export default confirmModal;