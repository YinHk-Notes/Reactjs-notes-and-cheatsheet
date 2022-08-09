
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


getSnapshotBeforeUpdate(prevProps, prevState)
// invoked right before the most recently rendered output is committed to e.g. the DOM
// It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed.

//eg:
class ScrollingList extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Are we adding new items to the list?
    // Capture the scroll position so we can adjust scroll later.
    if (prevProps.list.length < this.props.list.length) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // If we have a snapshot value, we've just added new items.
    // Adjust scroll so these new items don't push the old ones out of view.
    // (snapshot here is the value returned from getSnapshotBeforeUpdate)
    if (snapshot !== null) {
      const list = this.listRef.current;
      list.scrollTop = list.scrollHeight - snapshot;
    }
  }

  render() {
    return (
      <div ref={this.listRef}>{/* ...contents... */}</div>
    );
  }
}


static getDerivedStateFromProps(props, state)
// invoked right before calling the render method, both on the initial mount and on subsequent updates.
// It returns an object to update the state, or null to update nothing.


component.forceUpdate(callback)
// If your render() method depends on some other data, you can tell React that the component needs 
// re-rendering by calling forceUpdate().
// Calling forceUpdate() will cause render() to be called on the component, skipping shouldComponentUpdate().
// Normally you should try to avoid all uses of forceUpdate(). Should only rely on state and props changes to trigger re-render.


/* legacy method */

UNSAFE_componentWillMount() {}
// invoked just before mounting occurs.

UNSAFE_componentWillReceiveProps(nextProps)
// invoked before a mounted component receives new props
// If you need to update the state in response to prop changes (for example, to reset it), 
// you may compare this.props and nextProps and perform state transitions using this.setState() in this method.

UNSAFE_componentWillUpdate(nextProps, nextState)
// invoked just before rendering when new props or state are being received. 
// Use this as an opportunity to perform preparation before an update occurs. This method is not called for the initial render.

  
