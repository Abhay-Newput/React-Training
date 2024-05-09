import React from "react";
import { useNavigate } from "react-router-dom";

const MyComponent = ({ name }) => {
  const navigate = useNavigate();
  return (
    <main>
      <h1 id="title">My Component</h1>
      {name}
      <button onClick={() => navigate(-1)}>Go Back Home</button>
    </main>
  );
};

export default MyComponent;
