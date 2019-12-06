import React from "react";

import { Descriptions } from "antd";

const detailList = ( props ) => {
    const {data} =  props;

    const details = Object.keys(data).map(key => <Descriptions.Item label={key} key={key}>{data[key]}</Descriptions.Item>);

    return (
        <Descriptions column={1}>
            {details}
        </Descriptions>
    );
};

export default detailList;