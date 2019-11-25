import React from "react";

import { Table, Tag, Button } from 'antd';

import DeleteButton from "./Delete/Delete";
import ActiveButton from "./ActiveDeactive/ActiveDeactive";
import DetailButton from "./Detail/Detail"

const listData = ( props ) => {
    const data = props.data;

    console.log("List ", data);
    const columns = [
        {
          title: "STT",
          dataIndex: "id",
          key: "order_number",
        },

        {
          title: "Quy cách",
          dataIndex: "name",
          key: "parent_package_specification",
        },

        {
          title: "Số lượng",
          dataIndex: "quantity",
          key: "quantity",
        },

        {
            title: "Quy cách con",
            dataIndex: "childPackageSpecification",
            key: "child_pakage_specification",
        },

        {
            title: "Trạng thái",
            dataIndex: "status",
            key: "status",
            render: status => {
                    switch ( status ) {
                        case "used":
                            return <Tag color="green">Sử dụng</Tag>;
                        case "unused":
                            return <Tag color="blue">Chưa sử dụng</Tag>;
                        case "blocked":
                            return <Tag color="red">Vô hiệu</Tag>;
                        default:
                            return <Tag color="green">Chưa sử dụng</Tag>;
                    }
                }
        },

        // {
        //     title: "Thao tác",
        //     dataIndex: "action",
        //     key: "action",
        //     render: action => {
        //         <p>Liem</p>
        //         // const deleteButton = action.delete === true ? <Button style={{backgroundColor: "green" , color: "white"}}>{lang.BUTTON_REMOVE}</Button> : <Button disabled={true} style={{backgroundColor: "yellow"}}>{lang.BUTTON_REMOVE}</Button>;
        //         // // const deleteButton = action.delete === true ? <DeleteButtonComponent style={{backgroundColor: "green" , color: "white"}}>{lang.BUTTON_REMOVE}</DeleteButtonComponent> : <DeleteButtonComponent disabled={true} style={{backgroundColor: "yellow"}}>{lang.BUTTON_REMOVE}</DeleteButtonComponent>;
        //         // const activeButton = action.block === true ? <Button style={{backgroundColor: "green", color: "white"}}>{lang.BUTTON_ACTIVE}</Button> : <Button style={{backgroundColor: "yellow"}}>{lang.BUTTON_DEACTIVE}</Button>;
        //         // const detailButton = action.detail === true ? <Button style={{backgroundColor: "green", color: "white"}}>{lang.BUTTON_DETAIL}</Button> : <Button disabled={true} style={{backgroundColor: "yellow"}}>{lang.BUTTON_REMOVE}</Button>;

        //         // return <span><span>{deleteButton}</span> <span>{activeButton}</span> <span>{detailButton}</span></span>;
        //     }
        // },
      ];

    return (
        <Table columns={columns} dataSource={data} />
    );
};

export default listData;