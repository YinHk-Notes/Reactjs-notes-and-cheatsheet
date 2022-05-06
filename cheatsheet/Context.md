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

#### React.createContext
Creates a Context object.
```jsx
onst MyContext = React.createContext(defaultValue);
```

#### Context.Provider
Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.

```jsx
<MyContext.Provider value={/* some value */}>
```

### Class.contextType
contextType property on a class can be assigned a Context object created by React.createContext()

consume the nearest current value of that Context type using this.context
```jsx
class MyClass extends React.Component {
  componentDidMount() {
    let value = this.context;
    /* perform a side-effect at mount using the value of MyContext */
  }
  componentDidUpdate() {
    let value = this.context;
    /* ... */
  }
  componentWillUnmount() {
    let value = this.context;
    /* ... */
  }
  render() {
    let value = this.context;
    /* render something based on the value of MyContext */
  }
}
MyClass.contextType = MyContext;
```

