import React from "react";

import { Table } from 'antd';

const list = ( props ) => {
    
    const {columns, data} = props;

    return (
        <Table columns={columns} dataSource={data} rowKey="id"/>
    );
};

export default list;