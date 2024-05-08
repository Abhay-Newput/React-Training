import { useContext } from "react";
import PageNameContext from "./PageNameContext";

const ChildComponent = () => {
  const pageName = useContext(PageNameContext);
  return <p>This a sub-component, nested in the {pageName} page</p>;
};

export default ChildComponent;
