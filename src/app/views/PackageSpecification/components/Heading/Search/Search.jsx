import withSearch from "../../../../../hoc/Search/withSearch";
import { search as seachAction } from "../../../../../../store/packageSpecification/actions";

const fields = ["name", "quantity", "child"];
const type = "packageSpecification";
const filter = (item, index) => ({...item, order_number: index + 1, child: item.child ? item.child.name : null});

export default withSearch(fields, type, seachAction, filter);