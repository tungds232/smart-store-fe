import React from "react";

import { Select } from "antd";

const { Option } = Select;

const selectionItem = ( props ) => {
    const selections = props.selection.map( item => <Option value={item.id} key={item.id}>{item.name}</Option> );

    return (
        <Select defaultValue="" onChange={props.select}>
            <Option value={0} key={0}>Không quy cách con</Option>
            {selections}
        </Select>
    )
};

export default selectionItem;