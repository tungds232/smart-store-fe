import React from "react";

import { Descriptions } from "antd";

const childrenItem = ( props ) => {
    let currentKey = 0;
    const childrenItems = props.data.map( item => {
        ++currentKey;
        return <Descriptions.Item label={item.name} key={currentKey}>{item.quantities}</Descriptions.Item>;
    });

    return <Descriptions >{childrenItems}</Descriptions>;;
};

export default childrenItem;