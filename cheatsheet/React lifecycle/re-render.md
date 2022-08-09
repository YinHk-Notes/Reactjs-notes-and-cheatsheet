## Re-render

響 React 重新渲染的兩大關鍵 props / state ，當virtual-DOM發現props或state改變時，就會渲染使用這些數據對應的畫面UI。

### 1. Re-render component when `state` changes
Any time a React component state has changed, React has to re-render the component.
```jsx
class App extends React.Component {
  state = {
    mssg: ""
  };

  handleClick = () => {
    this.setState({ mssg: "Hi there!" });
  };

  render() {
    console.log("render() method");
    return (
      <>
        <button onClick={this.handleClick}>Say something</button>
        <div>{this.state.mssg}</div>
      </>
    );
  }
```

### 2. Re-render component when `props` change
When local state has changed, it also trigger child component to re-render if the state pass as props to the child.

```jsx
class Child extends React.Component {
  render() {
    console.log('Child component: render()');
    return {this.props.message};
  }
}

class App extends React.Component {
  state = {
    mssg: ""
  };

  handleClick = () => {
    this.setState({ mssg: "Hi there!" });
  };

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Say something</button>
        <Child message={this.state.mssg} />
      </>
    );
  }
}

```



### force to re-render
To force a React component to re-render is not recommended. Normally we should prevent forcing React to re-render components. If React fails to do re-render components automatically, it’s likely that an underlying issue in your project is preventing the components from updating correctly.  

**Always use props & state changes to cause a new render!**

**`component.forceUpdate(callback)`**
```jsx
someMethod() {
   // Force a render without state change...
   this.forceUpdate();
 }
```
```jsx
class App extends React.Component {

  handleClick = () => {
    // force a re-render
    this.forceUpdate();
  };

  render() {
    console.log('App component: render()')
    return (
      <>
        <button onClick={this.handleClick}>Say something</button>
      </>
    );
  }
}
```
**force update on a function component**
```jsx
//Replace state objects with a new instance of themselves, eg:
someMethod() {
   // Force a render with a simulated state change
   setStateObj({ ...stateObj });
}
```
```jsx
//Have an empty state variable trigger updates
const [, updateState] = React.useState();
const forceUpdate = React.useCallback(() => updateState({}), []);
```

### stop / avoid re-render
**React.memo()**
```jsx
React.memo(YourComponent);
```

**shouldComponentUpdate()**

```jsx
shouldComponentUpdate(nextProps) {
    // Rendering the component only if 
    // passed props value is changed
  
    if (nextProps.value !== this.props.value) {
      return true;
    } else {
      return false;
    }
}
```

### ref
https://blog.logrocket.com/how-when-to-force-react-component-re-render/
