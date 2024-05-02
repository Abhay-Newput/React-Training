import "./Sidebar.css";

function Sidebar({ children, onSelect }) {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}

export default Sidebar;
