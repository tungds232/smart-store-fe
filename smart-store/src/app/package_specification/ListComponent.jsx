import React from 'react';


import { Table, Tag, Button } from 'antd';

import * as lang from '../../lang/lang-vi';

export default function ListComponent( props ) {
    const { data } = props;
    const columns = [
        {
          title: lang.PACKAGE_SPECIFICATION_LIST_ORDER_NUMBER,
          dataIndex: "orderNumber",
          key: "order_number",
        },

        {
          title: lang.PACKAGE_SPECIFICATION_LIST_PARENT_PACKAGE_SPECIFICATION,
          dataIndex: "parentPackageSpecification",
          key: "parent_package_specification",
        },

        {
          title: lang.PACKAGE_SPECIFICATION_LIST_QUANTITY,
          dataIndex: "quantity",
          key: "quantity",
        },

        {
            title: lang.PACKAGE_SPECIFICATION_LIST_CHILD_PACKAGE_SPECIFICATION,
            dataIndex: "childPackageSpecification",
            key: "child_pakage_specification",
        },

        {
            title: lang.PACKAGE_SPECIFICATION_LIST_STATUS,
            dataIndex: "status",
            key: "status",
            render: status => {
                    switch ( status ) {
                        case "used":
                            return <Tag color="green">{lang.STATUS_USED}</Tag>;
                        case "unused":
                            return <Tag color="blue">{lang.STATUS_UNUSED}</Tag>;
                        case "blocked":
                            return <Tag color="red">{lang.STATUS_BLOCKED}</Tag>;
                        default:
                            return <Tag color="green">{lang.STATUS_USED}</Tag>;
                    }
                }
        },

        {
            title: lang.PACKAGE_SPECIFICATION_LIST_ACTION,
            dataIndex: "action",
            key: "action",
            render: action => {
                const deleteButton = action.delete === true ? <Button style={{backgroundColor: "green" , color: "white"}}>{lang.BUTTON_REMOVE}</Button> : <Button disabled={true} style={{backgroundColor: "yellow"}}>{lang.BUTTON_REMOVE}</Button>;
                // const deleteButton = action.delete === true ? <DeleteButtonComponent style={{backgroundColor: "green" , color: "white"}}>{lang.BUTTON_REMOVE}</DeleteButtonComponent> : <DeleteButtonComponent disabled={true} style={{backgroundColor: "yellow"}}>{lang.BUTTON_REMOVE}</DeleteButtonComponent>;
                const activeButton = action.block === true ? <Button style={{backgroundColor: "green", color: "white"}}>{lang.BUTTON_ACTIVE}</Button> : <Button style={{backgroundColor: "yellow"}}>{lang.BUTTON_DEACTIVE}</Button>;
                const detailButton = action.detail === true ? <Button style={{backgroundColor: "green", color: "white"}}>{lang.BUTTON_DETAIL}</Button> : <Button disabled={true} style={{backgroundColor: "yellow"}}>{lang.BUTTON_REMOVE}</Button>;

                return <span><span>{deleteButton}</span> <span>{activeButton}</span> <span>{detailButton}</span></span>;
            }
        },
      ];

    return (
       <Table columns={columns} dataSource={data} />
    );
}