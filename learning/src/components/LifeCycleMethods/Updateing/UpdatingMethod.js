import React, { Component } from "react";
import ChildUpdating from "./ChildUpdating";

class UpdatingMethod extends Component {
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

  shouldComponentUpdate() {
    console.log("Inside ShouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("Inside Snapshot");
    return null;
  }

  componentDidUpdate() {
    console.log("Inside componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "Heheheh",
    });
  };

  render() {
    console.log("Inside render");
    return (
      <div>
        <div>Updating Lifecycle Method</div>
        <button onClick={this.changeState}>Change State</button>
        <ChildUpdating />
      </div>
    );
  }
}

export default UpdatingMethod;
