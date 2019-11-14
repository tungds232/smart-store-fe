import React, {Component} from 'react';

import * as lang from "../lang/lang-vi";

export default function DetailModal(props) {
    const { item, granchildren, visible, onOk } = props;

    return (
        <Modal
        title={ lang.PACKAGE_SPECIFICATION_DETAIL_MODAL_TITLE }
        visible={ visible }
        onOk={ onOk }
        >
            <Descriptions >
                <Descriptions.Item label={ lang.PACKAGE_SPECIFICATION_LIST_PARENT_PACKAGE_SPECIFICATION }>{ item.parentPackageSpecification }</Descriptions.Item>
                <Descriptions.Item label={ lang.PACKAGE_SPECIFICATION_LIST_QUANTITY }>{ item.quantity }</Descriptions.Item>
                <Descriptions.Item label={ lang.PACKAGE_SPECIFICATION_LIST_CHILD_PACKAGE_SPECIFICATION }>{ item.childPackageSpecification }</Descriptions.Item>
            </Descriptions>,
    </Modal>
    )
}

const mapStateToProps = state => {
    return {
        item: state.originalData[0],
    }
}

const mapDispatchToProps = dispatch
