## Forwarding Refs
Ref forwarding is an opt-in feature that lets some components take a ref they receive, and pass it further down (in other words, “forward” it) to a child.

If parent component want to access DOM element in child component, use `React.forwardRef()` pass the `ref` as param to the child, let DOM element forward to the parent.
> 通常需要被 forwardRef 的子層元件會是封裝好的元件（例如，套件），其他使用它的開發者無法直接修改，因此才需要透過 forwardRef 把控制權交給父層元件，讓其他開發者可以直接控制。


**Example:**

function component
```jsx
const App = () => {
  const awesomeInputRef = React.useRef(null);

  // App mounted 的時候讓 AwesomeInput 中的 input 元素 focus
  React.useEffect(() => {
    console.log(awesomeInputRef.current); // <input type="text">...</input>
    awesomeInputRef.current.focus(); // 對 AwesomeInput 中的 <input /> 進行操作
  }, []);

  return <AwesomeInput ref={awesomeInputRef} />;
};
```
```jsx
const AwesomeInput = React.forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});
```

class component
```jsx
const AwesomeInputWithForwardRef = React.forwardRef((props, ref) => {
  // 把父層的 ref 透過 props 往下傳
  return <AwesomeInput forwardedRef={ref} {...props} />;
});
```
```jsx
const App = () => {
  const awesomeInputRef = React.useRef(null);

  React.useEffect(() => {
    console.log(awesomeInputRef.current); // <input type="text">...</input>
    awesomeInputRef.current.focus(); // 對 AwesomeInput 中的 <input /> 進行操作
  }, []);

  return <AwesomeInputWithForwardRef ref={awesomeInputRef} />;
};
```



### use forwardRef in HOC
**Example:**
```jsx
const logPropsHOC = (WrappedComponent) => {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props: ', prevProps);
      console.log('new props: ', this.props);
    }

    render() {
      const { forwardedRef, ...rest } = this.props;
      return <WrappedComponent ref={forwardedRef} {...rest} />;
    }
  }

  return React.forwardRef((props, ref) => <LogProps {...props} ref={ref} />);
};
```


> 留意 Component 使用 ref 時，是要使用 ref 的功能，還是只是要把父層的 ref 當層 props 往下傳遞，如果是要把 ref 當成 props 往下傳遞，就不能使用 ref 當作屬性名稱，而要換名字，例如 forwardedRef={ref}。


