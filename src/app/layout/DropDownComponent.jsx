import React from 'react';

import { Menu, Dropdown, Button } from 'antd';

function DropDownComponent(props) {
    const { dropDownItem } = props;
    const { content, items } = dropDownItem;

    const childMenus = items.map((item, index) =>
        <Menu.Item key={index + 1}>
            {item.content}
        </Menu.Item>
    );

    const menu = <Menu>{childMenus}</Menu>;

    return (
        <Dropdown overlay={menu}>
            <Button>
                {content}
            </Button>
        </Dropdown>
    );
}

// import Dropdown from 'react-bootstrap/Dropdown';
// import Image from 'react-bootstrap/Image';

// function DropDownComponent() {
//     return (
//         <Dropdown>
//             <Dropdown.Toggle variant="success" id="dropdown-basic">
//                 <Image src="https://adminlte.io/themes/AdminLTE/dist/img/user2-160x160.jpg" roundedCircle style={{width: "25px"}} />
//                 Dropdown Button
//             </Dropdown.Toggle>

//             <Dropdown.Menu>
//                 <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//                 <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//                 <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//             </Dropdown.Menu>
//         </Dropdown>
//     );
// }

export default DropDownComponent;