import React from "react";

import { Table, Tag, Button, Row } from 'antd';
import List from "../../../../components/List";
import DeleteItem from "./DeleteItem";
import ActiveItem from "./ActiveItem";
import UpdateItem from "./UpdateItem";

const list = (props) => {
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
                // let remove =  <DeleteButton disabled={false} id={record.id} />;
                // if (record.isUsed) {
                //     remove =<DeleteButton disabled={true} />;
                // };

                let active = <ActiveItem customClass="active" title="Kích hoạt" id={record.id} />;
                if(record.isActive){
                    active = <ActiveItem customClass="inactivate" title="Vô hiệu" id={record.id} />;
                }

                return (
                    <div className="group-button">
                        <DeleteItem id={record.id}/>
                        {active}
                        {/* <UpdateItem id={record.id}/> */}
                    </div>
                );
            }
        }
    ];

    return <List columns={columns} data={props.data} />;
};

export default list;