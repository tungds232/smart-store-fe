import React from "react";

import { Table, Tag, Button, Row } from 'antd';

import DeleteButton from "./Delete/DeleteContainer";
import ActiveButton from "./ActiveDeactive/ActiveDeactive";
import DetailButton from "./Detail/DetailContainer"

const listData = ( props ) => {
    console.log("SHOWN DATA: ", props.data);

    const columns = [
        {
          title: "STT",
          dataIndex: "order_number",
          key: "order_number",
        },

        {
          title: "Quy cách",
          dataIndex: "name",
          key: "name",
        },

        {
          title: "Số lượng",
          dataIndex: "quantity",
          key: "quantity",
        },

        {
            title: "Quy cách con",
            dataIndex: "child",
            key: "child",
        },

        {
            title: "Trạng thái",
            key: "status",
            render: (text, record) => {
                let use =   <Tag color="grey" key="used">Chưa sử dụng</Tag>;
                if (record.isUsed) {
                    use = <Tag color="green" key="used">Đang sử dụng</Tag>;
                }

                let active = <Tag color="grey" key="active">Vô hiệu</Tag>;
                if (record.isActive) {
                    active = <Tag color="green" key="active">Hoạt động</Tag>;
                }

                return (
                    <div>
                        {use}
                        {active}
                    </div>
                );
            }
        },

        {
            title: "Thao tác",
            key: "action",
            render: (text , record) => {
                console.log("Record:", record);

                let remove =  <DeleteButton disabled={false} id={record.id} />;
                if (record.isUsed) {
                    remove =<DeleteButton disabled={true} />;
                };

                // let active = <Tag color="red" key="remove">Kích hoạt</Tag>;
                // if (record.active) {
                //     active = <Tag color="green" key="remove">Vô hiệu</Tag>;
                // }

                let active = <Button className="tag active">Kích Hoạt</Button>;
                if(record.isActive){
                    active = <Button className="tag inactivate">Vô hiệu</Button>;
                }

                return (
                    <div className="group-button">
                        {remove}
                        {active}
                        <DetailButton id={record.id}/>
                    </div>
                );
            }
        }
      ];

    return (
        <Table columns={columns} dataSource={props.data} rowKey="id"/>
    );
};

export default listData;