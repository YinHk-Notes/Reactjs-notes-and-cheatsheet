## state
- use in class component
- state is an object storing data
- it is **mutable**, can be changed over time
- if state has updated, it will trigger component re-render

```jsx
const [stateObj, setStateObj] = useState({});
```

```jsx
this.state = {};
```

### setState
```jsx
setStateObj({});

// with reference to prev state and props
setStateObj({...stetObj, counter: stateObj.counter + props.step, });
```

```jsx
this.setState({});

// with with reference to prev state and props
this.setState((state, props) => {
  return {counter: state.counter + props.step};
});
```

> `setState()` will always lead to a re-render unless shouldComponentUpdate() returns false. If mutable objects are being used and conditional rendering logic cannot be implemented in shouldComponentUpdate(), calling setState() only when the new state differs from the previous state will avoid unnecessary re-renders.



### Accessing React State right after setting it synchronously

setState() does not always immediately update the component. It may batch or defer the update until later. This makes reading this.state right after calling setState() a potential pitfall. Instead, use `componentDidUpdate` or a setState callback (`setState(updater, callback)`), either of which are guaranteed to fire after the update has been applied.


There are 2 methods that accessing state immediately after seting the state.
- Using a callback passed to setState.
- Using componentDidUpdate life cycle method.



using callback inside `setState`
```jsx
setState(updater, callback));
```





