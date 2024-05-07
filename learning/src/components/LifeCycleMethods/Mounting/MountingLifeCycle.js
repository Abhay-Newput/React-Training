import React, { Component } from "react";
import ChildMounting from "./ChildMounting";

class MountingLifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Abhay",
    };
    console.log("Inside Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Inside getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Inside componentDidMount");
  }

  render() {
    console.log("Inside render");
    return (
      <div>
        <div>Mounting Lifecycle Method</div>
        <ChildMounting />
      </div>
    );
  }
}

export default MountingLifeCycle;
