import React, { Component } from "react";
import Modal from "react-modal";
import Graph from "react-graph-vis";
import $ from "jquery";
import "./App.css";
class Player extends React.Component {
  constructor() {
    super()

    this.state = { score: 0 }
  }

  increaseScore() {
    // 1. Get previous state from this.state
    this.setState({ score: this.state.score + 1 })

    // 2. Get previous state from the callback function
    this.setState((prevState) => {
      return { score: prevState.score + 1 }
    })
  }
}
export default Player;
