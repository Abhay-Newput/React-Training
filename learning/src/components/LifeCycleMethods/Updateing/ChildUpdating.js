import React, { Component } from "react";

class ChildUpdating extends Component {
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

  shouldComponentUpdate() {
    console.log("Inside child ShouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("Inside child Snapshot");
    return null;
  }

  componentDidUpdate() {
    console.log("Inside child componentDidUpdate");
  }

  render() {
    console.log("Inside child render");
    return <div>Child Updating Lifecycle Method</div>;
  }
}

export default ChildUpdating;
