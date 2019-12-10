import withFieldsSearch from "../../../../common/Search/withFieldsSearch";
import { search as seachAction } from "../../Action/actions";

const fields = ["name", "quantity", "child"];
const type = "package_specification";
const filter = (item, index) => ({...item, order_number: index + 1, child: item.child ? item.child.name : null});

export default withFieldsSearch(fields, type, seachAction, filter);