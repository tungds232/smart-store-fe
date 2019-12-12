import React from "react";

import Heading from "../../../../components/Heading";

import CreateItem from "./CreateItem";
import  Search from "./Search";


const buttonCreate = <CreateItem />;
const searchContainer = <Search />;
const heading = () => {
    return (
        <Heading title="Quy cách" buttonCreate={buttonCreate} search={searchContainer} />
    );
}

export default heading;