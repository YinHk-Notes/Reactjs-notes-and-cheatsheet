React project style should follow the normal [JavaScript style guide](https://engineering.hmn.md/standards/style/js/), with the addition of several React-specific rules. Much of the below is based on [Khan Academy’s style guide](https://href.li/?https://github.com/Khan/style-guides/blob/master/style/react.md) and various other industry standards.

Because conventions in React differ from the established conventions for traditional WordPress projects, some of these rules may not make sense in every case. We encourage you to understand the techniques used by the broader React ecosystem so you can make an informed decision about when to apply or ignore a specific recommendation.

___

## React Syntax [React Syntax](https://engineering.hmn.md/standards/style/react/#react-syntax)

React code is written using modern JavaScript syntax like classes and arrow functions in conjunction with a JavaScript syntax extension called [JSX](https://href.li/?https://reactjs.org/docs/introducing-jsx.html). JSX code looks like XML but behaves like JavaScript, making it a powerful tool for writing UI markup.

### Wrap multi-line JSX in parentheses [Wrap multi-line JSX in parentheses](https://engineering.hmn.md/standards/style/react/#wrap-multi-line-jsx-in-parentheses)

While JSX can be written inline like any other JavaScript expression, it is conventional to wrap multi-line JSX in parentheses for clear separation and readability.

```jsx
// Avoid:
render() {
    const { title, content } = this.props;
    return <article class="post">
        <h2>{ title.rendered }</h2>
        <div className="post-content">
            { content.rendered }
        </div>
    </article>;
}

// Prefer:
render() {
    const { title, content } = this.props;
    return (
        <article class="post">
            <h2>{ title.rendered }</h2>
            <div className="post-content">
                { content.rendered }
            </div>
        </article>
    );
}
```

Parentheses may be omitted for single-line JSX if desired.

```jsx
// Prefer:
const PostTitle = ( { title } ) => (
    <h2>{ title.rendered }</h2>
);

// Also acceptable:
const PostTitle = ( { title } ) => <h2>{ title.rendered }</h2>;

renderCollection( collection ) {
    return collection.map( item => ( <p key={ item }>{ item }</p> ) );
}
```

### Use semantic HTML5 [Use semantic HTML5](https://engineering.hmn.md/standards/style/react/#use-semantic-html5)

Although it is tempting to add all functionality to DIVs, keep in mind that the HTML5 you are writing with React must be [semantically meaningful and validating](https://engineering.hmn.md/standards/style/markup/).

Only put an onClick action on a native focusable element, like a `<button>`.

```jsx
// Avoid:
render() {
    return (
        <div onClick={ () => this.props.onClick() }>
            { /* ... */ }
        </div>
    }
}

// Prefer:
render() {
    return (
        <button
            type="button"
            onClick={ e => { e.preventDefault(); this.props.onClick() } }
        >
            { /* ... */ }
        </button>
    );
}
```

### Use ES6 class components [Use ES6 class components](https://engineering.hmn.md/standards/style/react/#use-es6-class-components)

Never use ES5-style `React.createClass`. Your components should always be full ES6 subclasses of `React.Component`:

```jsx
import React from 'react';

export default class MyComponent extends React.Component {
    render() {
        return <div />;
    }
}
```

Note that `Component` and `PureComponent` are available both on the `React` object, and as named imports:

```jsx
import React, { Component } from 'react';

export default class MyComponent extends Component {
    render() {
        return <div />;
    }
}
```

Even when using `export default`, include a class name to allow easier debugging with the React tooling.

This also requires setting static properties on the class; in particular, `getDefaultProps` becomes `MyComponent.defaultProps` and `getInitialState` is added to the constructor:

```jsx
// Old:

const MyComponent = React.createClass({
    getDefaultProps: function () {
        return { some: 'props' };
    },
    getInitialState: function () {
        return { some: 'state' };
    }
});

// New:

export default class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { some: 'state' };
    }
}

MyComponent.defaultProps = { some: 'props' };
```

#### Functional _vs_ Class components [Functional <em>vs</em> Class components](https://engineering.hmn.md/standards/style/react/#functional-vs-class-components)

Components can be declared both as classes and as functions.

```jsx
// class component
class MyComponent extends React.Component {
    render() {
        return (
            <div>{ this.props.text }</div>
        );
    }
}

// functional component
const MyComponent = ( props ) => (
    <div>{ props.text }</div>
);
```

Functional components are ideal for UI elements that do not need the full suite of functionality provided by class-based components, or where the use of [React hooks](https://href.li/?https://reactjs.org/docs/hooks-overview.html) is a sufficiently clear syntax for accessing any state, lifecycle events, or DOM node references required for the component to work properly. For more complex functionality, the internal logic of a component written as a class may be easier to read and understand.

In either case, think through the requirements of your component and consider whether implementing a custom `shouldComponentUpdate` lifecycle method, or declaring the component as “pure” by either extending [React.PureComponent](https://href.li/?https://reactjs.org/docs/react-api.html#reactpurecomponent) (for class components) or wrapping it in the [`memo` higher order component](https://href.li/?https://reactjs.org/docs/react-api.html#reactmemo) (for functional components), will provide performance enhancements by avoiding unnecessary re-renders if a component is unmounted and re-mounted.

### Order your methods with lifecycle first and render last [Order your methods with lifecycle first and render last](https://engineering.hmn.md/standards/style/react/#order-your-methods-with-lifecycle-first-and-render-last)

Within your react component, you should order your methods like so:

1.  lifecycle methods, in chronological order:
    -   `componentWillMount`
    -   `componentDidMount`
    -   `componentWillReceiveProps`
    -   `shouldComponentUpdate`
    -   `componentWillUpdate`
    -   `componentDidUpdate`
    -   `componentWillUnmount`
2.  everything else
3.  `render`

### Name event handlers `onEventName` [Name event handlers <code>onEventName</code>](https://engineering.hmn.md/standards/style/react/#name-event-handlers-oneventname)

This is consistent with React’s event naming: `onClick`, `onDrag`, `onChange`, etc.

**Example:**

```jsx
<Component onClick={ e => this.onClick( e ) } onLaunchMissiles={ num => this.onLaunchMissiles( num ) } />
```

```jsx
Component.propTypes = {
    onLaunchMissiles: PropTypes.func.isRequired,
    onScram: PropTypes.func.isRequired,
};
```

### Align and sort HTML properties [Align and sort HTML properties](https://engineering.hmn.md/standards/style/react/#align-and-sort-html-properties)

Fit them all on the same line if you can. If you can’t, put each property on a line of its own, indented one tab, in sorted order. The closing angle brace should be on a line of its own, indented the same as the opening angle brace. This makes it easy to see the props at a glance.

Consistent property ordering makes it easier to manage complex components. Properties should generally be sorted into the following groups, and ordered alphabetically within those groups:

-   `key` should be first if required.
-   Values
-   Event handlers (`on...`)

```jsx
// Avoid:
<div className="highlight"      // property not on its own line
     key="highlight-div"
>
<div                            // closing brace not on its own line
    key="highlight-div"
    className="highlight">
<div                            // key is not first
    className="highlight"
    key="highlight-div"
>
<Image                          // handlers should be after values
    key="highlight-div"
    onClick={ () => this.onClick() }
    size="40"
/>

// Prefer:
<div className="highlight" key="highlight-div">
<div
    key="highlight-div"
    className="highlight"
>
<Image
    key="highlight-div"
    className="highlight"
    onClick={ () => this.onClick() }
/>
```

Exercise discretion when alphabetising. Alphabetical ordering may not always be the best decision; for example, it may be preferable to keep related positional variables (_e.g._ `height` & `width`) grouped together for clarity.

___

## Component Structure [Component Structure](https://engineering.hmn.md/standards/style/react/#component-structure)

React encourages you to separate your application into discrete components, and tools like [Storybook](https://href.li/?https://storybook.js.org/) make it easy to build small components in isolation and then assemble them into larger combinations. Our file organization strategy for a React project therefore differs from traditional projects to support this component-first mentality.

### File Organization [File Organization](https://engineering.hmn.md/standards/style/react/#file-organization)

We encourage structuring all of your project’s front-end code into a `src/` directory to separate it from your backend application logic. This folder will contain all of the source JavaScript, styles and static assets which will eventually be packaged and output into your production `build/` folder, as well as supporting files like unit tests.

Within this folder, group all React components together inside a `components/` directory:

```jsx
src/
    components/
        MyComponent.js
        MyComponent.css
        AnotherComponent.js
```

Once your component includes additional files such as stylesheets, tests, or static assets, group those files together into subdirectories by component name:

```jsx
src/
    components/
        MyComponent/
            (All related component files)
        AnotherComponent.js
```

#### Colocate JavaScript Unit Tests [Colocate JavaScript Unit Tests](https://engineering.hmn.md/standards/style/react/#colocate-javascript-unit-tests)

Unlike PHP, in modern React applications it is conventional to co-locate your JavaScript test files alongside the modules being tested. Because this differs from the structure we use for PHP testing we do not require or enforce this organization scheme, but present it as an example of best practices within the broader React community.

```jsx
MyComponent/
    index.js
    MyComponent.test.js
```

Colocating tests can make it easier to see what files completely lack tests, and they simplify the import code within the test files as all imports are now relative to the module under test. Some teams find this structure also supports test-driven development. `create-react-app` and other bootstrapping tools assume co-located tests will be used, and modern test runners like [Jest](https://href.li/?https://facebook.github.io/jest/) will automatically detect and run these `*.test.js` files.

### Styles [Styles](https://engineering.hmn.md/standards/style/react/#styles)

Avoid inline styles in JavaScript.

Component styles should be located within a `styles.css` (or `styles.scss`) file in the same directory as the component’s JavaScript. Calling `import './styles.css';` from the component will instruct Webpack to include those CSS rules in the compiled project stylesheet.

Global styles should be specified in a top-level stylesheet imported in the application’s `index.js`. When using SCSS, reusable styles may also be defined using mixins that you can include from individual components.

#### CSS Modules & Scoping [CSS Modules & Scoping](https://engineering.hmn.md/standards/style/react/#css-modules-scoping)

When creating components that may be reused across projects it can be useful to scope the component’s styles so they will not interfere with other elements. Webpack’s `css-loader` includes support for [CSS Modules](https://href.li/?https://github.com/css-modules/css-modules), which you may use to restrict styles to a specific component.

While detailing the workings of CSS Modules is outside the scope of this document, if you enable modules in `css-loader` then Webpack will return an object containing the computed class names when you import CSS. You may reference class names off this object in your React components to apply your scoped styles:

```jsx
.Car { /* ... */ }
.Car__door { /* ... */ }
```

```jsx
import styles from './styles.css';

const Car = ( props ) => (
    <div className={ styles.Car }>
        <div className={ styles.Car__door }>{ /* ... */ }</div>
    </div>
);
```

___

## Language features [Language features](https://engineering.hmn.md/standards/style/react/#language-features)

### Make “presentation” components “pure” [Make "presentation" components "pure"](https://engineering.hmn.md/standards/style/react/#make-presentation-components-pure)

It’s useful to think of the React world as divided into [“logic” components and “presentation” components](https://href.li/?https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).

“Logic” components have application logic, but do not emit HTML themselves.

“Presentational” components are typically reusable, and do emit HTML.

Logic components can have internal state, but presentational components never should.

### Prefer [props to state](https://href.li/?http://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html#what-components-should-have-state) [Prefer <a href="http://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html#what-components-should-have-state">props to state</a>](https://engineering.hmn.md/standards/style/react/#prefer-props-to-state)

You almost always want to use props. By avoiding `state` when possible you make it easier to reason about your application.

A common pattern — which matches the “logic” vs. “presentation” component distinction — is to create several stateless components that just render data, and have a stateful component above them in the hierarchy that passes its state to its children via props. The stateful component encapsulates all of the interaction logic, while the stateless components take care of rendering data in a declarative way.

Copying data from props to state can cause the UI to get out of sync and is especially bad.

### Use [propTypes](https://href.li/?https://github.com/facebook/prop-types) [Use <a href="https://github.com/facebook/prop-types">propTypes</a>](https://engineering.hmn.md/standards/style/react/#use-proptypes)

The `prop-types` npm module is used to declare the properties that a React component expects or needs to receive in order to render properly. Properties may be restricted to a specific type or set of types, marked as required, or even deeply checked against a specific object structure.

To use PropTypes, install and import the `prop-types` package to your React component, then add a `.propTypes` property to that component:

```jsx
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

class MyComponent extends PureComponent {}

MyComponent.propTypes = {
    // Declare propTypes here
};
```

Every React component should specify `propTypes` for all properties it may receive: if it exists in `this.props`, it should have a `propTypes` declaration. This raises data errors early during development, and avoids edge cases related to type issues in production.

```jsx
MyComponent.propTypes = {
    // You can declare that a prop is a specific JS primitive.
    // By default, propTypes arguments are optional:
    optionalArray: PropTypes.array,
    optionalBool: PropTypes.bool,
    optionalFunc: PropTypes.func,
    // Mark required properties with .isRequired:
    requiredString: PropTypes.string.isRequired,
    requiredObject: PropTypes.shape( {
        rendered: PropTypes.string.isRequired,
    } ).isRequired,
};
```

Avoid duplicating child `propTypes`. If you are passing data through to a child component, you can refer to that component’s `.propTypes` property to avoid re-declaring the same definitions:

```jsx
ParentComponent.propTypes = {
    titleForChild: ChildComponent.propTypes.title,
};
```

If you have a `propTypes` definition that is used across many components such as the shape of a specific API object, you may move that into a module of its own and import that module into each component where it is used to keep the definitions in sync.

`propTypes` can only do their job if they are specific. Avoid these non-descriptive prop-types:

-   `PropTypes.any`
-   `PropTypes.array`
-   `PropTypes.object`

Instead, use

-   `PropTypes.arrayOf`
-   `PropTypes.objectOf`
-   `PropTypes.instanceOf`
-   `PropTypes.shape`

As a rare exception, if you are passing data through to a child component and _truly_ cannot predict what type it will be, you may use `PropType.any`.

See the [`prop-types` README](https://href.li/?https://github.com/facebook/prop-types) for more documentation.

### Do not store state in the DOM [Do not store state in the DOM](https://engineering.hmn.md/standards/style/react/#do-not-store-state-in-the-dom)

Do not use `data-` attributes or classes. All information should be stored in JavaScript, either in the React component itself, or in a React store if using a framework such as Redux.

If you need to pass data to the frontend from PHP, prefer `wp_localize_script` to write that data to a global object instead of embedding the information in `data-` attributes.

___

## Libraries and components [Libraries and components](https://engineering.hmn.md/standards/style/react/#libraries-and-components)

### Do not use Backbone models [Do not use Backbone models](https://engineering.hmn.md/standards/style/react/#do-not-use-backbone-models)

Use Redux actions, or `fetch()` directly instead.

### Minimize use of jQuery [Minimize use of jQuery](https://engineering.hmn.md/standards/style/react/#minimize-use-of-jquery)

_Never_ use jQuery for DOM manipulation.

Try to avoid using jQuery plugins. When necessary, wrap the jQuery plugin with a React component so you only have to touch the jQuery once.

For Ajax, the native `fetch()` API (with [polyfill](https://href.li/?https://github.com/github/fetch)) should be used instead of `$.ajax`.
