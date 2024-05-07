import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isediting, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editting) => !editting);
    console.log("clicked");
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editibleName = <span className="player-name">{playerName}</span>;
  //   let btnCaption = "Edit"

  if (isediting) {
    editibleName = (
      <input
        type="text"
        required
        defaultValue={playerName}
        onChange={handleChange}
      />
    );
    // btnCaption = "Save"
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editibleName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isediting ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
