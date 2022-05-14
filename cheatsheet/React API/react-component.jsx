
render() {}
// The render() method is the only required method in a class component.

constructor(props)
// If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component.
  
constructor(props) {
  super(props);
  // Don't call this.setState() here!
  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}

// Avoid copying props into state! This is a common mistake:
constructor(props) {
 super(props);
 // Don't do this!
 this.state = { color: props.color };
}


componentDidMount() 
// invoked immediately after a component is mounted
  
componentDidUpdate()
//  invoked immediately after updating occurs.
componentDidUpdate(prevProps, prevState)

componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}

/* componentDidUpdate() will not be invoked if shouldComponentUpdate() returns false. */


componentWillUnmount()
// invoked immediately before a component is unmounted and destroyed.
  
  
shouldComponentUpdate(nextProps, nextState)
// This method allows your Component to exit the Update life cycle
// is invoked before rendering when new props or state are being received.  
// Return value: It by default it returns true and if it returns false then render(), componentWillUpdate() and componentDidUpdate() method does not gets invoked.

//eg:
import React, { Component } from "react";
  
class Counter1 extends Component {
  shouldComponentUpdate(nextProps) {
    // Rendering the component only if 
    // passed props value is changed
  
    if (nextProps.value !== this.props.value) {
      return true;    //can go for re-render
    } else {
      return false;  //prevent for re-rendering
    }
  }
  
  render() {
    console.log("Counter 1 is calling");
    return (
      <div>
        <h2>Counter 1:</h2>
        <h3>{this.props.value}</h3>
        <button onClick={this.props.onClick}>Add</button>
      </div>
    );
  }
}
  
export default Counter1;

// ref: https://www.geeksforgeeks.org/reactjs-shouldcomponentupdate-method/







  
  
  
  
  










