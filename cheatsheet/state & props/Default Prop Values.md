### defaultProps
You can define default values for your props by assigning to the special defaultProps property.
eg:
```jsx
class Person extends Component {
  render() {
    return (
      <div>
        <p> Name: {this.props.name} </p>
        <p>EyeColor: {this.props.eyeColor}</p>
        <p>Age : {this.props.age} </p>
      </div>
    )
  }
}
  
Person.defaultProps = {
  name: "Rahul",
  eyeColor: "deepblue",
  age: "45"
}
```
```jsx

import React from 'react';
  
function App(props) {
  return (
    <div >
      <Person name="kapil" eyeColor="blue" age="23"></Person>
      <Person name="Sachin" eyeColor="blue" ></Person>
      <Person name="Nikhil" age="23"></Person>
      <Person eyeColor="green" age="23"></Person>
    </div>
  );
}
  
function Person(props) {
  return (
    <div>
      <p> Name: {props.name} </p>
      <p>EyeColor: {props.eyeColor}</p>
      <p>Age : {props.age} </p>
      <hr></hr>
    </div>
  )
}
  
Person.defaultProps = {
  name: "Rahul",
  eyeColor: "deepblue",
  age: "45"
}
```


### define default value directly
eg:
```jsx
const { props1=value1, props2=value2, ...resProps } = props;  
//default value for props1 and props2 are value1 and value2 respectively
```
