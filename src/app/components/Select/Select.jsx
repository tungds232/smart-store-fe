import React from "react";

import { Select } from "antd";

const { Option } = Select;

const customSelect = (props) => {
    return (
        <Select defaultValue="" onChange={props.onChange}>
            {props.items.map((item, index) => (
                <Option value={index} key={index}>{item.name}</Option>
            ))}
        </Select>
    )
}

export default customSelect;