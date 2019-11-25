import React from "react";

import { Modal } from "antd";

import DetailList from "./DetailList";

const detailModal = ( props ) => (
    <Modal
        title="Chi tiết quy cách"
        visible={this.props.visible}
        onOK={this.prop.close}
        okText="Đóng"
        cancelButtonProps={{hidden:true}}
        closable={true}
    >
        <DetailList data={props.data}/>
    </Modal>
);

export default detailModal;