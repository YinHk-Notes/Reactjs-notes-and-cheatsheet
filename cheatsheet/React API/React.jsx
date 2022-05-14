/* React.Component */
// base class for React components
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

/* React.PureComponent */
// React.PureComponent is similar to React.Component
// The difference between them is that React.Component doesn’t implement shouldComponentUpdate(), but React.PureComponent implements it with a shallow prop and state comparison.
// Furthermore, React.PureComponent’s shouldComponentUpdate() skips prop updates for the whole component subtree. Make sure all the children components are also “pure”.
// React.PureComponent’s shouldComponentUpdate() only shallowly compares the objects.

/* React.memo */
// It is a higher order component.
// React will skip rendering the component, and reuse the last rendered result.
// It will render only for the props or its own state change
const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});

export default React.memo(MyComponent, areEqual);


/* React.createElement()  */
// Create and return a new React element of the given type
React.createElement(
  type,
  [props],
  [...children]
);

//eg:
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);

// same to
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);


/* React.cloneElement() */
// Clone and return a new React element using element as the starting point. 
// config should contain all new props, key, or ref.
// The resulting element will have the original element’s props with the new props merged in shallowly.
// New children will replace existing children. 
//  key and ref from the original element will be preserved if no key and ref present in the config

React.cloneElement(
  element,
  [config],
  [...children]
);
// almost equivalent to:
<element.type {...element.props} {...props}>{children}</element.type>


/* createFactory() */
React.createFactory(type)
// Return a function that produces React elements of a given type. Like React.createElement()
// the type argument can be either a tag name string (such as 'div' or 'span'), a React component type (a class or a function), or a React fragment type.
// this api will be considered as legacy


/* isValidElement() */
// Verifies the object is a React element. Returns true or false.
React.isValidElement(object)


/* React.Children */
// React.Children provides utilities for dealing with the this.props.children opaque data structure.


/* React.Children.map */
React.Children.map(children, function[(thisArg)])
// Invokes a function on every immediate child contained within children with this set to thisArg. I
// If children is an array it will be traversed and the function will be called for each child in the array.
// If children is null or undefined, this method will return null or undefined rather than an array.

/* React.Children.forEach */
React.Children.forEach(children, function[(thisArg)])

/* React.Children.count */
React.Children.count(children)

/* React.Children.only */
React.Children.only(children)

/* React.Children.toArray */
React.Children.toArray(children)


/* React.Fragment */
// eg:
 return (
    <React.Fragment>
      Some text.
      <h2>A heading</h2>
    </React.Fragment>
 )


/* React.createRef */
class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  render() {
    return <input type="text" ref={this.inputRef} />;
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }
}


/* React.forwardRef */
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;


/* React.lazy */
//  lets you define a component that is loaded dynamically. This helps reduce the bundle size to delay loading components that aren’t used during the initial render.

// This component is loaded dynamically
const SomeComponent = React.lazy(() => import('./SomeComponent'));


/* React.Suspense */
// This component is loaded dynamically
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    // Displays <Spinner> until OtherComponent loads
    <React.Suspense fallback={<Spinner />}>
      <div>
        <OtherComponent />
      </div>
    </React.Suspense>
  );
}





















































