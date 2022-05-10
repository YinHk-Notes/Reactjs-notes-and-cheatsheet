## Typechecking With PropTypes

React has some built-in typechecking abilities. To run typechecking on the props for a component, you can assign the special propTypes property:

> `prop-types` isrRuntime type checking for React props and similar objects.

```jsx
import PropTypes from 'prop-types';
```
```jsx
class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};
```

> PropTypes exports a range of validators that can be used to make sure the data you receive is valid.



```js
const myPropTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  // ... define your prop validations
};

const props = {
  name: 'hello', // is valid
  age: 'world', // not valid
};

// Let's say your component is called 'MyComponent'

// Works with standalone PropTypes
PropTypes.checkPropTypes(myPropTypes, props, 'prop', 'MyComponent');
// This will warn as follows:
// Warning: Failed prop type: Invalid prop `age` of type `string` supplied to
// `MyComponent`, expected `number`.
```



