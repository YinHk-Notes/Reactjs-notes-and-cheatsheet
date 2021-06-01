React are created by using components. There are 2 types of React components, Class component vs Function component. 

Class component like this:

```jsx
class App extends React.Component {
 constructor(){
   super();
   this.state ={...}
 }
  render(){
    return //... render your Html elements here ...
  }
}
```

- allows inheritance from another class
- has lifecycle method
- class name must start with upper case letter
- has state

Function component like this:

```jsx
function App(props) {
 return //... render your Html elements here ...
}
```

- a simple JavaScript function and it is a stateless component.
- no lifecycle.
- It allows us use properties(props) pass from parent component.
- function component cannot use state without using State Hook.

**To know more about React component, just take a reference:**

[https://cythilya.github.io/2018/04/09/react-functional-components-vs-class-based-components/#functional-components](https://cythilya.github.io/2018/04/09/react-functional-components-vs-class-based-components/#functional-components)