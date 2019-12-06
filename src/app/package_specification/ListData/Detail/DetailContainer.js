import { connect } from "react-redux";

import Detail from "./Detail";

const mapStateToProps = (state, ownProps) => {
    const packSpecData = state.package_specification.data.find(item => item.id === ownProps.id);

    let data = {
        "Tên quy cách":  packSpecData.name
    }

    let childPackSpec = packSpecData.child;
    if (childPackSpec) {
        let currentQuantity = packSpecData.quantity;
        
        data[childPackSpec.name] = currentQuantity;

        while (childPackSpec.child) {
            currentQuantity *= childPackSpec.quantity;
            data[childPackSpec.child.name] =  currentQuantity;

            childPackSpec = childPackSpec.child;
        }
    }

    
    data["Sử dụng"] = packSpecData.isUsed ? "Đang sử dụng" : "Chưa sử dụng";
    data["Khóa"] =  packSpecData.isActive ? "Đang kích hoạt" : "Đang vô hiệu";

    return {
        data
    }
};

export default connect(mapStateToProps)(Detail);
