import React from 'react';

import * as lang from '../lang/lang-vi';

import { Input, Button } from 'antd';
import { Table, Divider, Tag } from 'antd';
const { Search } = Input;



export function SearchItemComponent(props) {
    const onSearch = () => {console.log("LOL")};

    return (
        <div>
            <Search
                placeholder={lang.SEARCH_PLACE_HOLDER}
                enterButton={lang.SEARCH_ICON}
                onSearch={onSearch}
                style={{width: 300}}
            />
        </div>
    )
}

function FilterItemComponent(props) {

}

export function AddNewItemComponent(props) {
    return (
        <div>
             <Button 
                type="primary" 
                style = {{backgroundColor: 'green'}}
                onClick = {()=>{console.log("Fuck")}}
                >{props.text}
             </Button>
        </div>
    )
}

function XXXComponent(props) {

}

function UpdateItemComponent(props) {

}

function DeleteItemComponent(props) {

}

function ActiveDeactiveItemComponent(props) {

}

function ListItemComponent(props) {

    return (
        <div></div>
    ) 
}

