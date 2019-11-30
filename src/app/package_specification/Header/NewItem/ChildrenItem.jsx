import React from "react";

import { Descriptions } from "antd";

const childrenItem = ( props ) => {
    const childrenItems = props.data.map( item => {
        return <Descriptions.Item label={item.name} key={item.name}>{item.quantities}</Descriptions.Item>;
    });

    return <Descriptions >{childrenItems}</Descriptions>;;
};

export default childrenItem;