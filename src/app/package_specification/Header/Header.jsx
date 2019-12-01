import React from "react";

import { PageHeader } from 'antd';

import NewItem from "./NewItem/NewItemContainer";
import Search from "./SearchItem/SearchItemContainer"

const header = () => (
    <div>
        <div className="header-one">
            <PageHeader title="Quy cách"/>
            <NewItem />
        </div>
        <div className="header-two">
            <Search />
        </div>
    </div>
);

export default header;