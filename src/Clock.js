import React, { Component } from 'react';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
      this.message = props.message;
      this.intervalTime = props.intervalTime;
      console.log("I am the constructor");
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        this.intervalTime
      );
      console.log("I am the componentDidMount");
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
      console.log("I am the componentWillUnmount");
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }

    componentWillMount(){
      console.log("I am the componentWillMount");
    }

    componentWillReceiveProps(){
      console.log("I am the componentWillReceiveProps");
    }
  
    render() {
      console.log("I am the render");
      return (
        <div>
          <h1>{this.message}</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
  export default Clock;