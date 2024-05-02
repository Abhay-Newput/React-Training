import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";

function App() {
  const [menu, setMenu] = useState(false);

  const [selectedTopic, setSelectedTopic] = useState("");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  function handleMenu() {
    if (menu === false) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  }

  return (
    <div className="App">
      <GiHamburgerMenu onClick={handleMenu} />
      {menu ? (
        <menu>
          <Sidebar onSelect={() => handleSelect("home")}>Home</Sidebar>
          <Sidebar onSelect={() => handleSelect("about")}> About </Sidebar>
          <Sidebar onSelect={() => handleSelect("contact")}>Contact US</Sidebar>
          <Sidebar onSelect={() => handleSelect("service")}>Service</Sidebar>
        </menu>
      ) : (
        ""
      )}

      <div>
        <h2>{menu ? selectedTopic : ""}</h2>
      </div>
    </div>
  );
}

export default App;
