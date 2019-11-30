import React from "react";

import { Table, Tag, Button, Row } from 'antd';

import DeleteButton from "./Delete/DeleteContainer";
import ActiveButton from "./ActiveDeactive/ActiveDeactive";
import DetailButton from "./Detail/Detail"

const listData = ( props ) => {
    const columns = [
        {
          title: "STT",
          dataIndex: "id",
          key: "order_number",
        },

        {
          title: "Quy cách",
          dataIndex: "name",
          key: "name",
        },

        {
          title: "Số lượng",
          dataIndex: "quantities",
          key: "quantities",
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
                if (record.used) {
                    use = <Tag color="green" key="used">Đang sử dụng</Tag>;
                }

                let active = <Tag color="grey" key="active">Hoạt động</Tag>;
                if (record.active) {
                    active = <Tag color="green" key="active">Vô hiệu</Tag>;
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
                if (record.used) {
                    remove =<DeleteButton disabled={true} />;
                };

                let active = <Tag color="red" key="remove">Kích hoạt</Tag>;
                if (record.active) {
                    active = <Tag color="green" key="remove">Vô hiệu</Tag>;
                }

                const detail = [{name: record.name, 
                                quantities: ""},
                                ...record.children];

                return (
                    <div>
                        {remove}
                        {active}
                        <DetailButton data={detail}/>
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