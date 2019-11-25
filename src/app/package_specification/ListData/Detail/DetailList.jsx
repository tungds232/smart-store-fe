import React from "react";

import { Descriptions } from "antd";

const detailList = ( props ) => {
    const details = props.data.map(item => <Descriptions.Item label={item.lable}>{item.content}</Descriptions.Item>);

    return (
        <Descriptions>
            {details}
        </Descriptions>
    );
};

export default detailList;