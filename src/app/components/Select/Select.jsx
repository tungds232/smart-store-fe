import React from "react";

import { Select } from "antd";

const { Option } = Select;

const customSelect = (props) => {
    return (
        <Select onChange={props.onChange}>
            <Option value="0">{props.defaultText}</Option>
            {props.items.map((item, index) => (
                <Option value={item.id} key={index}>{item.name}</Option>
            ))}
        </Select>
    )
}

export default customSelect;