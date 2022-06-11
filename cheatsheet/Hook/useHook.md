## UseHook

#### No dependency passed:
```jsx
useEffect(() => {
  //Runs on every render
});
```

#### An empty array:
```jsx
useEffect(() => {
  //Runs only on the first render
}, []);
```

#### Props or state values:
```jsx
useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);
```

#### componentDidMount equivalent in function component:
```jsx
useEffect(() => {
	/* ComponentDidMount code */
}, []);
```

#### componentWillUnmount equivalent:
```jsx
useEffect(() => {
	...
	return () => {
		/* componentWillUnmount code */
	}
}, []);
```

#### componentDidUpdate equivalent:
```jsx
useEffect(() => {
	/* componentDidUpdate code */
}, [var1, var2,...]);
//when var1, var2,... updated, it will trigger this method
```

