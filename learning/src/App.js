import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ClassComponent from "./components/ClassComponent";
import MountingLifeCycle from "./components/LifeCycleMethods/Mounting/MountingLifeCycle";
import UpdatingMethod from "./components/LifeCycleMethods/Updateing/UpdatingMethod";
import MyComponent from "./components/MyComponent";
import Ref from "./components/Ref";
import Memo from "./components/Memo";
import Home from "./components/Navigation/Home";

import ParentComponent from "./components/contextAPI/ParentComponent";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mounting">Mounting Lifecycle</Link>
          </li>
          <li>
            <Link to="/updating">Updating Method</Link>
          </li>
          <li>
            <Link to="/memo">Memo</Link>
          </li>
          <li>
            <Link to="/ref">Ref</Link>
          </li>
          <li>
            <Link to="/my-component">My Component</Link>
          </li>
        </ul>
      </nav>
      <div key={2} className="App">
        <Routes>
          <Route path="/" exact element={<ClassComponent />} />
          <Route path="/mounting" element={<MountingLifeCycle />} />
          <Route path="/updating" element={<UpdatingMethod />} />
          <Route path="/memo" element={<Memo name="Abhay" />} />
          <Route path="/ref" element={<Ref />} />
          <Route path="/my-component" element={<MyComponent name="hehe" />} />
        </Routes>
        <Home />
        <ParentComponent />
      </div>
    </Router>
  );

  // return (
  //   <>
  //   </>
  // );
}

export default App;
