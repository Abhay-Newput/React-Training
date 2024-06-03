import { useState } from "react";
import ApiCall from "./components/ApiCall";
import Display from "./components/Display";

function App() {
  const [value, setValue] = useState([]);

  async function handleClick() {
    const data = await ApiCall();
    setValue(data);
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Cick</button>
      <Display data={value} />
    </div>
  );
}

export default App;
