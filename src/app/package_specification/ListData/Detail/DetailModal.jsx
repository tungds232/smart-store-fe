import React from "react";

import { Modal } from "antd";

import DetailList from "./DetailList";

const detailModal = ( props ) => (
    <Modal
        title="Chi tiết quy cách"
        visible={props.visible}
        onOk={props.close}
        okText="Đóng"
        cancelButtonProps={{hidden:true}}
        closable={false}
    >
        <DetailList data={props.data}/>
    </Modal>
);

export default detailModal;