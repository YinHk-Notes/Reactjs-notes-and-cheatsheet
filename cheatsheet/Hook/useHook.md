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


