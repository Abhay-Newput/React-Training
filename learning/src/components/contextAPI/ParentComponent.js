import ChildComponent from "./ChildComponent";
import PageNameContext from "./PageNameContext";

const ParentComponent = () => (
  <PageNameContext.Provider value="Parent Component">
    <h1>Parent Component</h1>
    <ChildComponent />
  </PageNameContext.Provider>
);

export default ParentComponent;
