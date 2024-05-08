// Importing everything as React
import * as React from "react";

const Ref = () => {
  // Creating textInputRef variable
  const textInputCreateRef = React.createRef(); // using CreateRef..
  const textInputUseRef = React.useRef(null);

  // This method will be used to focus textInput
  const textInputFocusHandler = () => {
    // Focusing input element
    textInputUseRef.current.focus();
  };

  return (
    <div>
      {/** Attaching ref variable using element's ref attribute */}
      <input ref={textInputUseRef} type="text" placeholder="Enter something" />

      {/** Attaching textInputFocusHandler method to button click */}
      <button onClick={textInputFocusHandler}>Click me to focus input</button>
    </div>
  );
};

export default Ref;
