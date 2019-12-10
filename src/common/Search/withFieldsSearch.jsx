import React, { Component } from "react";

import Search from "./SearchItemContainer";

const withFieldsSearch = (fields, type, action, filter) => {
        return (props) => (
          <Search fields={fields} type={type} action={action} filter={filter}/>
        )
}

export default withFieldsSearch;