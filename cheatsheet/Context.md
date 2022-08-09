## Context 
  Context provides a way to pass data through the component tree without having to pass props down manually at every level. \
  Context is designed to share data that can be considered “global” for a tree of React components Sucha as theme, global style.

```jsx
// Using context, we can avoid passing props through intermediate elements:
// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
const ThemeContext = React.createContext('light');

class App extends React.Component {
  render() {
    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing "dark" as the current value.
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}
```

### React.createContext
Creates a Context object.
```jsx
onst MyContext = React.createContext(defaultValue);
```

### Context.Provider
Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.

```jsx
<MyContext.Provider value={/* some value */}>
```

### Class.contextType
contextType property on a class can be assigned a Context object created by React.createContext()

consume the nearest current value of that Context type using this.context
```jsx
class MyClass extends React.Component {
  static contextType = MyContext;
  render() {
    let value = this.context;
    /* render something based on the value */
  }
}
```

### Context.Consumer
Subscribe to a context within a function component.

```jsx
<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>
```

### Context.displayName
```jsx
const MyContext = React.createContext(/* some value */);
MyContext.displayName = 'MyDisplayName';

<MyContext.Provider> // "MyDisplayName.Provider" in DevTools
<MyContext.Consumer> // "MyDisplayName.Consumer" in DevTools
```


### useContext()
接收一個 `context` object（`React.createContext` 的回傳值）並回傳該 `context` 目前的值。`Context` 目前的值是取決於由上層 component 距離最近的 `<MyContext.Provider>` 的 value prop。

In order to use the Context in a child component, we need to access it using the `useContext` Hook.

`useContext(MyContext)` lets you read the context and subscribe to its changes.

### ref
https://medium.com/hannah-lin/react-hook-%E7%AD%86%E8%A8%98-usecontext-4bc289976847

