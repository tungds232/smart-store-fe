import React from "react";

import { PageHeader } from 'antd';

import NewItem from "./NewItem/NewItemContainer";
import Search from "./SearchItem/SearchItemContainer"

const header = () => (
    <div>
        <PageHeader title="Quy cách"/>
        <Search />
        <NewItem />
    </div>
);

export default header;