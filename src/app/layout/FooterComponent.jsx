import React from 'react';
import { Layout } from 'antd';

import * as lang from "../../lang/lang-vi";

const { Footer } = Layout;

function FooterComponent() {
    return <Footer style={{ textAlign: 'center' }}>{lang.FOOTER_TEXT}</Footer>;
}

export default FooterComponent;