import React from "react";

import {Button} from "antd";

const buttonDelete = (props) => {
    return <Button type="danger" onClick={props.onClick}>{props.title}</Button>;
}

export default buttonDelete