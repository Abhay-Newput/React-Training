import React, { Component } from "react";

class ChildMounting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Abhay",
    };
    console.log("Inside child Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Inside child getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Inside child componentDidMount");
  }

  render() {
    console.log("Inside child render");
    return <div>Child Mounting Lifecycle Method</div>;
  }
}

export default ChildMounting;
