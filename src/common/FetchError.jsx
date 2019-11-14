import React, { Component } from "react";

import { Modal, Result } from "antd";

import * as lang from "../lang/lang-vi";

export default function FetchError( props ) {
    const { visible, onOK } = props;

    return (
        <Modal
            title={ lang.PACKAGE_SPECIFICATION_FETCH_ERROR_TITLE }
            visible={ visible }
            onOk={ onOK }
            cancelButtonProps= {{ hidden:true }}
            closable={ false }
        >
            <Result
            status="error"
            title={ lang.PACKAGE_SPECIFICATION_FETCH_ERROR_MESSAGE }
            />
        </Modal>
    )
}

 