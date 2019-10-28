import React from 'react';

import { Table, Divider, PageHeader, Tag, Button, Statistic, Descriptions, Row, Input  } from 'antd';

import * as lang from '../../lang/lang-vi';
const { Search } = Input;

export function MainComponent(props) {
    return (
        <div>
            <HeaderComponent title="QUY CÁCH"/>
            <ListComponent data={data} columns={columns} />
        </div>
    );
}

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

export function ListComponent(props) {
    const { data, columns } = props;
    const display_data = data.filter(item => item.display);

    return (
       <Table columns={columns} dataSource={display_data}/>
    );
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

const data = [
    {id: 1, name: "Nguyen Dac Liem", gender: "Male", display: true},
    {id: 2, name: "Nguyen Dac Loc", gender: "Male", display: true},
    {id: 3, name: "Nguyen Dac Lai", gender: "Male", display: true},
    {id: 4, name: "Huynh Thi My Sa", gender: "Female", display: true},
];

const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name"
    },
    {
        title: "Gender",
        dataIndex: "gender",
        key: "gender",
        render: gender => {let color = gender === "Male"? "red" : "green";
                           return (
                                <Tag color={color} key={gender}>
                                    {gender.toUpperCase()}
                                </Tag>
                           );
        },
    },

];
