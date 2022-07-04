### conditional rendering
Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.

depend on the state or props, decide which component is rendered.
```jsx
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
// Try changing to isLoggedIn={true}:
root.render(<Greeting isLoggedIn={false} />);
```

### inline logical && operator

```jsx
condition && <div>Hello world</div>
```

### inline If-Else with Conditional Operator

```jsx
<div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
</div>
```

### Condional styling
```jsx
const styles = {
    popup:{
      display: open ? "flex" : "none",
      opacity: open ? "1" : "0",
    }
};

<div className="popup" style={styles.popup}> </div>
```

### Preventing Component from Rendering
just return `null`

```jsx
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}
```





