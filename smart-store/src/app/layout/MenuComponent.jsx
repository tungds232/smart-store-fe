import React from 'react';

import 'antd/dist/antd.css';
import { Menu, Icon, Switch} from 'antd';
import Sider from 'antd/lib/layout/Sider';
import * as lang from '../../lang/lang-vi';

// import DiscountSvg from './asset/discount.svg';

const { SubMenu } = Menu;

function MenuComponent() {
    return (
        <Sider >
            <Menu
                style={{ width: 256 }}
                mode="inline"
                theme = "dark"
            >
                <Menu.Item key="order">
                    <Icon type="mail" />
                    <span>{lang.ORDER_MENU}</span>
                </Menu.Item>

                <Menu.Item key="discount">                    
                    <Icon type="appstore" />
                    <span>{lang.DISCOUNT_MENU}</span>
                </Menu.Item>

                <Menu.Item key="supplier-product-package">
                    <Icon type="appstore" />
                    <span>{lang.SUPPLIER_PRODUCT_PACKAGE_MENU}</span>
                </Menu.Item>

                <Menu.Item key="supplier">
                    <Icon type="setting" />
                    <span>{lang.SUPPLIER_MENU}</span>
                </Menu.Item>

                <SubMenu
                    key="product"
                    title={
                    <span>
                        <Icon type="setting" />
                        <span>{lang.PRODUCT_ALL_MENU}</span>
                    </span>
                    }
                >
                    <Menu.Item key="product-category">{lang.CATEGORY_MENU}</Menu.Item>
                    <Menu.Item key="product-class">{lang.CLASS_MENU}</Menu.Item>
                    <Menu.Item key="product-group">{lang.GROUP_MENU}</Menu.Item>
                    <Menu.Item key="product-product">{lang.PRODUCT_MENU}</Menu.Item>
                </SubMenu>

                <Menu.Item key="package-specification">
                    <Icon type="setting" />
                    <span>{lang.PACKAGE_SPECIFICATION_MENU}</span>
                </Menu.Item>

                <Menu.Item key="address">
                    <Icon type="setting" />
                    <span>{lang.ADDRESS_MENU}</span>
                </Menu.Item>
            </Menu>
        </Sider>

    )   
}

export default MenuComponent;