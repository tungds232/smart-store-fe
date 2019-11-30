import React from "react";

import { Descriptions } from "antd";

const detailList = ( props ) => {
    const details = props.data.map(item => <Descriptions.Item label={item.name}>{item.quantities}</Descriptions.Item>);

    return (
        <Descriptions>
            {details}
        </Descriptions>
    );
};

export default detailList;