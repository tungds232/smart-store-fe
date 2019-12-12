import React from "react";

import {Button} from "antd";

const buttonActive = (props) => {
    return <Button className={props.customClass} onClick={props.onClick}>{props.title}</Button>;
}

export default buttonActive;