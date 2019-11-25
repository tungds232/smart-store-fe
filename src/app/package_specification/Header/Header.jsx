import React from "react";

import NewItem from "./NewItem/NewItemContainer";
import Search from "./SearchItem/SearchItemContainer"

const header = () => (
    <div>
        <Search />
        <NewItem />
    </div>
);

export default header;