import React from "react";

import { Modal } from "antd";

const confirmModal = ( props ) => (
    <Modal
        title="Xóa quy cách"
        visible={this.props.visible}
        onOK={this.prop.delete}
        onCancel={this.prop.close}
        okText="Xác nhận"
        cancelText="Hủy"
        closable={true}
    >
        <p>Bạn muốn xóa quy cách này?</p>
    </Modal>
);

export default confirmModal;