
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
vaScript
jQuery
PHP
Bootstrap
NodeJS
ReactJS
AngularJS
ExpressJS
Tailwind
Bulma
Foundation
React Desktop
jQuery UI
jQuery Mobile
TypeScript
p5.js
Tensorflow.js

▲
Related Articles
ReactJS shouldComponentUpdate() Method
ReactJS | Lifecycle of Components
PHP | sort() Function
How to Draw a Curved Edge Hexagon using CSS ?
ReactJS | Methods as Props
ReactJS | PropTypes
ReactJS | State in React
ReactJS | Implementing State & Lifecycle
ReactJS | Importing and Exporting
Understanding basic JavaScript codes.
if-else Statement in JavaScript
Switch Case in JavaScript
Loops in JavaScript
Functions in JavaScript
JavaScript | Modules
JavaScript | Importing and Exporting Modules
JavaScript | Hoisting
JavaScript | Callbacks
JavaScript | Type Conversion
Javascript | Error and Exceptional Handling With Examples
Strict mode in JavaScript
Introduction to Object Oriented Programming in JavaScript
Objects in Javascript
Creating objects in JavaScript (4 Different Ways)
JavaScript Backend basics
Installation of Node.js on Linux
Top 10 Projects For Beginners To Practice HTML and CSS Skills
How to insert spaces/tabs in text using HTML/CSS?
How to calculate the number of days between two dates in javascript?
JavaScript Number toString() Method

ReactJS shouldComponentUpdate() Method
Difficulty Level : Easy
Last Updated : 16 Nov, 2020
The shouldComponentUpdate method allows us to exit the complex react update life cycle to avoid calling it again and again on every re-render. It only updates the component if the props passed to it changes.

The shouldComponentUpdate method is majorly used for optimizing the performance and to increase the responsiveness of the website but do not rely on it to prevent rendering as it may lead to bugs.

Syntax:

shouldComponentUpdate(nextProps, nextState)
Return value: It by default it returns true and if it returns false then render(), componentWillUpdate() and componentDidUpdate() method does not gets invoked.

Example: In this example, we are going to build a counter application which only renders when its props value is changed.

App.js

import React, { useState } from "react";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";
  
  
const App = () => {
  
// Using useState hooks for defining state
  const [counter1, setCounter1] = useState(0);
  
  const increase1 = () => {
    setCounter1(counter1 + 1);
  };
  const [counter2, setCounter2] = useState(0);
  
  const increase2 = () => {
    setCounter2(counter2 + 1);
  };
    
  return (
    <div className="container">
      <div>
        <Counter1 value={counter1} onClick={increase1} />
      </div>
      <div>
        <Counter2 value={counter2} onClick={increase2} />
      </div>
    </div>
  );
};
  
export default App;
Without using shouldComponentUpdate() method:

Counter1.js

import React, { Component } from "react";
  
class Counter1 extends Component {
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
Counter2.js

import React, { Component } from "react";
  
class Counter2 extends Component {
  render() {
    console.log("Counter 2 is calling");
    return (
      <div>
        <h2>Counter 2:</h2>
        <h3>{this.props.value}</h3>
        <button onClick={this.props.onClick}>Add</button>
      </div>
    );
  }
}
  
export default Counter2;
Output:

With using shouldComponentUpdate() Method:

Counter1.js

import React, { Component } from "react";
  
class Counter1 extends Component {
  shouldComponentUpdate(nextProps) {
    // Rendering the component only if 
    // passed props value is changed
  
    if (nextProps.value !== this.props.value) {
      return true;
    } else {
      return false;
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







  
  
  
  
  










