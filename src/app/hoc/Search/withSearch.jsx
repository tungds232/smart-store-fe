import React from "react";

import Search from "./SearchContainer";

const withFieldsSearch = (fields, type, action, filter) => {
    return (props) => {
        console.log(props);
        return <Search fields={fields} type={type} action={action} filter={filter} />
    }
}

export default withFieldsSearch;