import React from 'react';

import * as lang from '../lang/lang-vi';

import { Input, Button, PageHeader, Table, Modal, Form } from 'antd';
const { Search } = Input;



export function SearchComponent(props) {
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

export function AddComponent(props) {
    const {addtionTitle} = props;

    return (
        <div>
             <Button 
                type="primary" 
                style = {{backgroundColor: 'green'}}
                >{addtionTitle}
             </Button>
        </div>
    )
}

export function HeaderComponent(props) {
    const {SearchContainer, headerTitle, addtionTitle} = props;

    return (
        <div>
            <PageHeader
                style={{border: '1px solid rgb(235, 237, 240)',}}
                title={headerTitle}
            />
            <SearchContainer />
            <AddComponent addtionTitle={addtionTitle} />
            <UpdateComponent />
            <RemoveComponent />
            <ActiveDeactiveComponent isActive={false} />
        </div>
    );
}

export function UpdateComponent() {
    return (
        <div>
             <Button 
                type="primary" 
                style = {{backgroundColor: "blue"}}
                // onClick={()=>visible = true}
                >{lang.UPDATE_BUTTON}
             </Button>
        </div>
    )
}

export function RemoveComponent() {
    return (
        <div>
             <Button 
                type="primary" 
                style = {{backgroundColor: "red"}}
                >{lang.REMOVE_BUTTON}
             </Button>
        </div>
    )
}

export function ActiveDeactiveComponent(props) {
    const {isActive} = props;

    return (
        <div>
             <Button 
                type="primary" 
                style = {isActive ? {backgroundColor: "#A0C334"} : {backgroundColor: "#5D5D5D"}}
                >{isActive ? lang.ACTIVE_BUTTON : lang.DEACTIVE_BUTTON}
             </Button>
        </div>
    )
}

export function ListComponent(props) {
    const { data, columns } = props;
    const displayData = data.filter(item => item.display);

    return (
       <Table columns={columns} dataSource={displayData}/>
    );
}