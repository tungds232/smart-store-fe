import React from "react";

import { Descriptions } from "antd";

const childrenItem = ( props ) => {
    const childrenItems = props.data.map( item => <Descriptions.Item label={item.name} key={item.name}>{item.quantity}</Descriptions.Item>);

    return <Descriptions column={1}>{childrenItems}</Descriptions>;;
};

export default childrenItem;