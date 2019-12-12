import React from "react";

import {Button} from "antd";

const buttonCreate = (props) => {
    return <Button type="primary" onClick={props.onClick}>{props.title}</Button>;
}

export default buttonCreate;