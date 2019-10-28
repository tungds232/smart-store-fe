import React from 'react';

import * as lang from '../lang/lang-vi';

import { Input, Button } from 'antd';
const { Search } = Input;



export function SearchItemComponent(props) {
    return (
        <div>
            <Search
                placeholder={lang.SEARCH_PLACE_HOLDER}
                enterButton={lang.SEARCH_ICON}
                style={{width: 300}}
            />
        </div>
    )
}

export function AddNewItemComponent(props) {
    return (
        <div>
             <Button 
                type="primary" 
                style = {{backgroundColor: 'green'}}
                >{props.text}
             </Button>
        </div>
    )
}

export function HeaderComponent(props) {
    return (
        <div>
            <PageHeader
                style={{border: '1px solid rgb(235, 237, 240)',}}
                title={props.title}
            />
            <SearchItemComponent style={{float:"right", display:"inline"}}/>
            <AddNewItemComponent text="Thêm quy cách" style={{display:"inline"}}/>
        </div>
    );
}