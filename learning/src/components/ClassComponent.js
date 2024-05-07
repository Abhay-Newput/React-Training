import React, { Component } from "react"; // When creating Class component import these two

/*
Two steps to make class copmonent 
  
    -- Step 1: class should extend the component from react 
    -- Step 2: class has to implement reder method which will return some null or html  
*/

class ClassComponent extends Component {
  // Define class

  render() {
    return <h1>Class Component</h1>;
  }
}

export default ClassComponent;
