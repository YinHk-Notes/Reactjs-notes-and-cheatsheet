# My react coding preference

**Airbnb React/JSX Style Guide**

[javascript/react at master · airbnb/javascript](https://github.com/airbnb/javascript/tree/master/react)

[Airbnb React/JSX Style Guide](https://airbnb.io/javascript/react/)

**React Code Style Guide**

[React Code Style Guide](https://css-tricks.com/react-code-style-guide/)

[React Style Guide](https://dev.to/abrahamlawson/react-style-guide-24pp)

**React - Engineering handbook (react coding style)**

[React - Engineering Handbook](https://engineering.hmn.md/standards/style/react/)

---

## React

**👍🏻   each component js file should attach style js file with it** 

👍🏻   **use function component (prefer function instead of class component)**

**👍🏻   use Hook (many benefits)**

 eg:  **useEffect/useLayoutEffect, useState**

**👍🏻   use Material-ui styling solution - ( Higher-order component API )**

 **function component example:**

```jsx
import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import styles from './style';

function HigherOrderComponent(props) {
  ...
}

//It must have this propTypes
HigherOrderComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HigherOrderComponent);
```

[Typechecking With PropTypes - React](https://zh-hant.reactjs.org/docs/typechecking-with-proptypes.html)

```jsx
import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import styles from './style';

const componentName = props => {
	const classes = useStyles();
  ...
}
export default componentName;
```

**class component example:**

```jsx
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { styles } from './style';

class HigherOrderComponent extends Component { 
	...
}
export default withStyles(styles)(HigherOrderComponent);
```

👉🏻   **Syntax for top level(function component)**

```jsx
function Compponent_Name (props) {
  const { ... } = props;  
  const [ stateObj, setStateObj ] = useState({...});
	  ...your remaining code is here...
};
```

👉🏻  **Declare state in function component**

```jsx
const [ stateObj, SetStateObj ] = useState({ ...declare stete here... });
```

👉🏻   **Manage multiple State Values:**

```jsx
//declare state 
const [ user, setUser ] = useState({ id: 1, username: "Chan Tai Man" });
//update state
setUser({ ...user, username: "Figo Chan" });
```

```jsx
//puting all states into stateObj, use **stateObj** to manage states
const [ stateObj, setStateObj ] = useState({
	state1: val1;
	state2: val2;
	... });
//It is good practice to copy origin object( eg: ...stateObj ),
//before update its states
setStateObj({ ...stateObj, state1: newValue1, state2: newValue2, ... });  
```

**👉🏻   Child/descendant get props from parent/ancestor:**

```jsx
const { props1, props2, ...resProps } = props;
//use props's name directly inside child without specify props in front of it.
```

**👉🏻   Parent/ancestor pass props(with state/data) to child/descendant:**

```jsx
let dataProps = { props1: val1, props2: val2,... }
<Child { ...dataProps }>

//for common props pass its value to child components
const commonProps = { props1: val1, props2: val2,... };
<ChildA { ...commonProps }>
<ChildB { ...commonProps }>

//pass local state as props to child components
let **stateToProps** = { props1: stateObj.state1, props2: stateObj.state2,... };
<Child { ...stateToProps }>
```

**👉🏻  Callback function inside function component:**

```jsx
{ functionName() }
//or use 'this' pointer when using class component
{ this.functionName }
```

👉🏻   **Using arrow function:**

```jsx
const functionName = () => { retun... }
const functionName = () => ... // for single retun line only
const functionName = param => { ... } //single param & no return
```

**👉🏻   Export two components with both  inside same .js file:**

```jsx
const Links = withStyles(styles)(LinksComponent);
const Buttons = withStyles(styles)(ButtonsComponent);
export { Links, Buttons };
```

**👉🏻   componentDidMount equivalent in function component:**

```jsx
useEffect(() => {
	/* ComponentDidMount code */
}, []);
```

```jsx
useLayoutEffect(() => {
	/* ComponentDidMount code */
}, []);
```

**👉🏻   componentDidUpdate equivalent:**

```jsx
useEffect(() => {
	/* componentDidUpdate code */
}, [var1, var2,...]);
//when var1, var2,... updated, it will trigger this method
```

**👉🏻    componentWillUnmount equivalent:**

```jsx
useEffect(() => {
	...
	return () => {
		/* componentWillUnmount code */
	}
}, []);
```

**👉🏻   All three combined:**

```jsx
useEffect(() => {
	/* componentDidMount code + componentDidUpdate code */
	return () => {
		/* componentWillUnmount code */
	}
}, [var1, var2,...]);
```

**👉🏻   Using event handling function inside function component:**

```jsx
function App () {
	...
	const handleOnclick = e => {...}
  ...
	return (
		<div>
			<button onClick={() => handleOnclick(param)}>Click me</button>
		</div>)
}
```

**👉🏻  Lifting up data/state from child/descendant to parent/ancestor**

**use a callback and states:**

1. Define a callback function in my parent which takes the data I need in as a parameter.
2. Pass that callback function as a **prop** to the child/**descendant**.
3. Call the callback using t**his.props.[callback]** in the child (insert your own name where it says [callback] of course), and **pass in the data** as the **argument**.

```jsx
//from parent
const functionName = (params) => {...};

//from child
let { functionName } = props;
fuctionName&&functionName(data);
```

**update the data/value from the child/descendant component to the local state:**

```jsx
//Callback function as prop passing to child/descendant
const updateState = obj => setStateObj({ ...obj });
```

**Lift up the data to parent/ancestor**

```jsx
//get the function from parent
let { updateState } = props; 
//function fill with value 
updateState && updateState({ ...stateObj, state1: val1, state2: val2,... });
```

**👉🏻  Declare state and props inside class component**

```jsx
let { ... } = this.state;
//then use state's name directly without specify **this.state** in front of it.
const { ... } = this.props;
//then use props's name directly without specify **this.props** in front of it,
//value can't be updated or re-defined by local component, the props read-only
let { ... } = this.props;
//value of the props used defined by **let** canbe overrided and re-defined 
//by local, while `const` can't
```

**👍🏻  Receive props (class component)**

```jsx
const { props1, props2, ...resProps } = this.props;
//...resProps means all the remainder props.
```

same as

```jsx
const props1 = this.props.var1;
const props2 = this.props.var2;
```

<aside>
🗣 This is destructuring object assignment. What this means is that, this is a shorthand way to get the object properties' value from an object(such as this.props in here). So when you want to extract a property named 'var1' and 'var2' from the 'this.props', by writing the instruction - const { var1, var2 } = this.props;  you ask for the property named 'var1' and 'var2' from 'this.props' to be stored in constants 'var1' and 'var2'. All other properties are simply ignored. And if any of the asked property names are not there, they are simply given 'unassigned' value. After this, you may consider going through more details(magic of it!) here - [MDN - object_destructuring]https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring

</aside> 



#### **👉🏻  Callback-Refs**

 pass a function. The function receives the React component instance or HTML DOM element as its argument, which can be stored and accessed elsewhere.
```jsx
function CustomTextInput(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}

class Parent extends React.Component {
  render() {
    return <CustomTextInput inputRef={(el) => (this.inputElement = el)} />;
  }
}
```

## React-redux

**👉🏻   declare store and connect store to react component**

```jsx
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

**👉🏻  get state from store** 

     for function component:    

<aside>
	
**📌  useSelector**

</aside>

      for class component:

<aside>
	
**📌 mapStateToProps**

</aside>

**👉🏻  dispatch action from react component to store**

for function component:    

<aside>
	
**📌 useDispatch**

</aside>

for class component:

<aside>
	
**📌 mapStateToDispatch**

</aside>

### function component 內部寫法

```jsx
function Component_Name(props) {
	const { props1, props2, ...resProps } = props;
  //stete Hook, declare & initialize states
  const [ stateObj, setStateObj ] = useState({
		state1: val1;
		state2: val2;
		... });
  //put other hooks here
  const dispatch = useDispatch();
  const classes = useStyles();
  const 

  return(

  );
}

//export component
export default Component_Name;
```
