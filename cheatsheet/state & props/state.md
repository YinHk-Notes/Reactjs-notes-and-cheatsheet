## state
- use in class component
- state is a plain JavaScript **object** storing data
- it is **mutable**, can be changed over time
- if state has updated, it will **trigger component re-render**
- State allows us to **manage changing data** in an application
- state is managed **within the component** 


**function**
```jsx
const [stateObj, setStateObj] = useState({});
```
**class**
```jsx
this.state = {};
```

### setState
**function**
```jsx
setStateObj({});

// with reference to prev state and props
setStateObj({...stateObj, counter: stateObj.counter + props.step });

//update partial item in the state object
setStateObj(prevState => { return {...prevState, item1: val1, item2: val2} });
//or 
setStateObj({...stateObj, item1: val1, item2: val2 });
```
**class**

```jsx
setState(updateState, callback)
```
```jsx
this.setState({});

/*  How do I update state with values that depend on the current state?

    Passing an update function allows you to access the current state value inside the updater. 
    Pass an updater function in updateState instead of an object if you need to compute values based on the current state 
    
    updater function: (state, props) => stateChange 
    
    Pass a function instead of an object to setState to ensure the call always uses 
    the most updated version of state (see below). */

// with reference to prev state and props
this.setState((state, props) => {
  return {counter: state.counter + props.step};
});
```

> `setState()` will always lead to a re-render unless `shouldComponentUpdate()` returns false. If mutable objects are being used and conditional rendering logic cannot be implemented in `shouldComponentUpdate()`, calling `setState(`) only when the new state differs from the previous state will avoid unnecessary re-renders.


### Why React setState/useState does not update immediately
**The answer: They’re just queues** \
React `this.setState`, and `useState` **does not make changes directly to the state object**.

React `this.setState`, and `React.useState` **create queues for React core to update the state object** of a React component.

`setState` is an **asynchronous function**, the `setState` function also does not return a Promise. Using `async/await` or anything similar will not work.

So the process to update React state is asynchronous for performance reasons. That’s why changes don’t feel immediate.

Calls to setState are asynchronous - don’t rely on this.state to reflect the new value immediately after calling setState


### Accessing React State right after setting it synchronously

`setState()` does not always immediately update the component. It may batch or defer the update until later. This makes reading `this.state` right after calling `setState()` a potential pitfall. Instead, use `componentDidUpdate` or a `setState` callback (`setState(updater, callback)`), either of which are guaranteed to fire after the update has been applied.


There are 2 methods that **accessing state immediately** after seting the state.
- Using a callback passed to `setState`.
- Using `componentDidUpdate` life cycle method.


**using callback inside `setState`**

```jsx
this.setState(state, callback);

this.setState(newStateObject, () => {
  // ... do some other actions
});
```
callback function will get triggered when React state has finished updating.

> `React.useState` doesn’t have accept callback function that gets called after React state has actually been modified. To perform side effects after state has change, you must use the `React.useEffect hook`.





**Using componentDidUpdate life cycle method**
```jsx
componentDidUpdate(prevProps, prevState);
```
`componentDidUpdate()` is invoked immediately after updating occurs. 


**Tracking state change in hook**

> cannot use callback directly in the useState hook. To use callback in the useState hook, we need to use the useEffect hook that triggers after state update and call the function after that.

```jsx
const [state, setState] = useState();
useEffect(() => { callback }, [state])
```

```jsx
import {useEffect, useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect ran. count is: ', count);
  }, [count]); // 👈️ add state variables you want to track

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;


```

#### ref 
https://linguinecode.com/post/why-react-setstate-usestate-does-not-update-immediately


