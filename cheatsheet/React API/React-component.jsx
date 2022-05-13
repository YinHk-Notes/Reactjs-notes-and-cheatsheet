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



