## JSX
JSX stand for JavaScript xml, a syntax extension to JavaScript. It allows us to write JavaScript  containing HTML syntax in React.

```jsx
//Below is an example of what JSX is! Because we write html inside JavaScript
const element = <h1>Hello World</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

Fundamentally, JSX just provides syntactic sugar for the `React.createElement(component, props, ...children)` function. 

```jsx
<MyButton color="blue" shadowSize={2}>
  Click Me
</MyButton>
```
compile into
```jsx
React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  'Click Me'
)
```

#### using JSX vs without JSX in react
written with JSX:
```jsx
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.toWhat}</div>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello toWhat="World" />);
```
without using JSX:
```js
class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(Hello, {toWhat: 'World'}, null));
```

**Eg:  當 JSX 被轉譯成 JavaScript 後就會變成以下這個函式執行：**
```js
React.createElement( type, [props], [...children])
```
```js
// This is a JSX element
const jsxElement = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

// it equals to this
const jsElement = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

#### use comment in JSX
```jsx
//eg: 
<div>
  {/* Comment goes here */}
  Hello, {name}!
</div>
```
