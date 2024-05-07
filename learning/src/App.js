import ClassComponent from "./components/ClassComponent";
import MountingLifeCycle from "./components/LifeCycleMethods/Mounting/MountingLifeCycle";
import UpdatingMethod from "./components/LifeCycleMethods/Updateing/UpdatingMethod";

function App() {
  return (
    <div className="App">
      <ClassComponent />
      <MountingLifeCycle />
      <UpdatingMethod />
    </div>
  );
}

export default App;
