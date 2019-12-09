import React from "react";

import { Table, Tag, Button, Row } from 'antd';
import List from "../../../../components/List";

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
    ];

    return <List columns={columns} data={props.data} />;
};

export default list;