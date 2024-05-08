// import ClassComponent from "./components/ClassComponent";
// import MountingLifeCycle from "./components/LifeCycleMethods/Mounting/MountingLifeCycle";
// import UpdatingMethod from "./components/LifeCycleMethods/Updateing/UpdatingMethod";

// import MyComponent from "./components/MyComponent";

import Ref from "./components/Ref";

// import Memo from "./components/Memo";

function App() {
  // console.log(<MyComponent />);

  return (
    <div key={2} className="App">
      {/* <ClassComponent />
      <MountingLifeCycle />
      <UpdatingMethod /> */}
      {/* <Memo name="Abhay" /> */}
      <Ref />
      {/* <MyComponent name="hehe" /> */}
    </div>
  );
}

// console.log(App());

export default App;
