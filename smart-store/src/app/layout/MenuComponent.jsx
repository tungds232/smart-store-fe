import React from 'react';

import 'antd/dist/antd.css';
import { Menu, Icon, Switch} from 'antd';
import Sider from 'antd/lib/layout/Sider';
import * as lang from '../../lang/lang-vi';

import OrderSvg from './asset/order.svg';
import DiscountSvg from './asset/discount.svg';
import SupplierProductPackageSvg from './asset/supplier-product-package.svg';
import SupplierSvg from './asset/supplier.svg';
import ProductSvg from './asset/product.svg';
import PackageSpecificationSvg from './asset/package-specification.svg';
import AddressSvg from './asset/address.svg';

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
                    <Icon component={OrderSvg} />
                    <span>{lang.ORDER_MENU}</span>
                </Menu.Item>

                <Menu.Item key="discount">                    
                    <Icon component={DiscountSvg} />
                    <span>{lang.DISCOUNT_MENU}</span>
                </Menu.Item>

                <Menu.Item key="supplier-product-package">
                    <Icon component={SupplierProductPackageSvg} />
                    <span>{lang.SUPPLIER_PRODUCT_PACKAGE_MENU}</span>
                </Menu.Item>

                <Menu.Item key="supplier">
                    <Icon component={SupplierSvg} />
                    <span>{lang.SUPPLIER_MENU}</span>
                </Menu.Item>

                <SubMenu
                    key="product"
                    title={
                    <span>
                        <Icon component={ProductSvg} />
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
                    <Icon component={PackageSpecificationSvg} />
                    <span>{lang.PACKAGE_SPECIFICATION_MENU}</span>
                </Menu.Item>

                <Menu.Item key="address">
                    <Icon component={AddressSvg} />
                    <span>{lang.ADDRESS_MENU}</span>
                </Menu.Item>
            </Menu>
        </Sider>

    )   
}

export default MenuComponent;