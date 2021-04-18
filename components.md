**Functional Components vs Class-based Components** \
**https://cythilya.github.io/2018/04/09/react-functional-components-vs-class-based-components/#functional-components**

**React 的元件可用以下方式分類**

*   Functional Components vs Class-based Components 或
*   Stateless Components vs Stateful Components


## **Functional Components**

Functional Components 的撰寫方式是從父層傳遞的 props 得到資料，然後將結果 JSX 輸出至 DOM。


### **特點**



*   簡單好學，輕量，效能較佳。
*   由於可當成 Pure Function / Pure Components，只要給予相同的輸入 props，就會得到相同的輸出結果（即 JSX），因此易於測試。 其中 props 是 Immutable 且 Top-down。
*   沒有內部狀態（State），因此也是 Stateless Components。
*   沒有 Lifecycle Hooks 和 refs。
*   常用於 Presentational Components。


### **範例**

這個元件 VideoListItem 從父層得到 video，接著輸出一段 HTML，內含剛剛從 video 內得到的標題和圖檔位置。

```js
const VideoListItem = ({ video }) => {
  return (
    <li>
      <h3>{video.title}</h3>
      <img src={video.imageUrl} />
    </li>
  );
};
```

## **Class-based Components**


### **特點**



*   有內部狀態，因此是 Stateful Components。State 是 JavaScript 物件，用來保存元件內的資料。
*   有 Life Cycle Methods 和 refs。
*   只要 props 和 state 是 Immutable，Class-based Components 也可以是一個 Stateless Components / Pure Components。


### **範例**

這個元件 SearchBar 是用來輸入欲搜尋的字串，未來會將這個字串丟到伺服器端以得到搜尋結果。



*   (1) 這裡先定義一個 Class「SearchBar」，然後繼承 React.Component 所擁有的功能。Class-based Components 必須要有 render method 和 super，不然會報錯。
*   (2) super 表示繼承父類別的功能，讓子類別可以使用父類別的屬性和方法。
*   (3) 只有在設定 state 的初始值才會使用這樣 this.state = XXX 直接賦值的方式，其他地方若要更新 state 會用 setState。
*   (4) ES6 React.Component 並不會將 method 自動綁定到自身之下，要手動綁定 this。因此，一定要在下面設定 this.onInputChange = this.onInputChange.bind(this)，不然 this 會是 undefined！Ref: [React: “this” is undefined inside a component function](https://stackoverflow.com/questions/33973648/react-this-is-undefined-inside-a-component-function)
*   (5) 這是 JSX 的 Syntax Sugar，等於 React.createElement。
*   (6) 有設定 value 才會更新元件，也就是 &lt;input> 的 value，否則只是觸發事件而已；而由於觸發事件導致更新 state，所以 value 才會被更新。
*   (7) 只要更新 state，就會導致元件觸發 render method 而自動更新元件。

```js
class SearchBar extends Component {
  // ----- (1)
  constructor(props) {
    super(props); // ----- (2)

    this.state = { term: '' }; // ----- (3)
    this.onInputChange = this.onInputChange.bind(this); // ----- (4)
  }

  render() {
    return (
      // ----- (5)
      <div>
        <input
          value={this.state.term} // ----- (6)
          onChange={this.onInputChange}
        />
      </div>
    );
  }

  onInputChange(event) {
    this.setState({ term: event.target.value }); // ----- (7)
  }
}
```

## **Pure Components**

只要可以保證相同的輸入會得到相同的輸出，那麼就可以稱這個元件是 Pure Components。因此，Functional Components 是 Pure Components；而只要 props 和 state 是 Immutable，Class-based Components 也可以是 Pure Components。

React.PureComponent 的 ShouldComponentUpdate() 和 React.Component 的 ShouldComponentUpdate() 不同之處在於，React.PureComponent 的 ShouldComponentUpdate() 只做[淺比較（Shallow Compare）](https://stackoverflow.com/questions/36084515/how-does-shallow-compare-work-in-react)，也就是只比較位置而不比較內容值，因此一但儲存的位置相同但內容不同，就無法正常運作。淺比較的運作基礎是假設資料是 Immutable，也就是說，只要資料更新就存到另一個記憶體位置，因此只要比對記憶體位置就等於比較值是否相等。



## Stateful Components vs. Stateless Components
**https://code.tutsplus.com/tutorials/stateful-vs-stateless-functional-components-in-react--cms-29541**

**Stateful Components** \
Stateful components are always class components. As previously mentioned, stateful components have a state that gets initialized in the constructor. 

```jss
// Here is an excerpt from the counter example
constructor(props) {
  super(props);
  this.state = { count: 0 };
}
```

We've created a state object and initialized it with a count of 0. There is an alternative syntax proposed to make this easier called class fields. It's not a part of the ECMAScript specification yet, but If you're using a Babel transpiler, this syntax should work out of the box.

```jss
class App extends Component {
   
  /*
  // Not required anymore
  constructor() {
      super();
      this.state = {
        count: 1
      }
  }
  */
   
  state = { count: 1 };
   
  handleCount(value) {
      this.setState((prevState) => ({count: prevState.count+value}));
  }
 
  render() {
    // omitted for brevity
  }
   
}
```

You can avoid using the constructor altogether with this new syntax. \
We can now access the state within the class methods including render(). If you're going to use them inside render() to display the value of the current count, you need to place it inside curly brackets as follows:

```hjss
render() {
return (
    Current count: {this.state.count}
    )
}
```

The this keyword here refers to the instance of the current component. 

Initializing the state is not enough—we need to be able to update the state in order to create an interactive application. If you thought this would work, no, it won't.

```jss
//Wrong way
 
handleCount(value) {
    this.state.count = this.state.count +value;
}
```

React components are equipped with a method called setState for updating the state. setState accepts an object that contains the new state of the count.
```jss
// This works
 
handleCount(value) {
    this.setState({count: this.state.count+ value});
}
```

The setState() accepts an object as an input, and we increment the previous value of count by 1, which works as expected. However, there is a catch. When there are multiple setState calls that read a previous value of the state and write a new value into it, we might end up with a race condition. What that means is that the final results won't match up with the expected values.

Here is an example that should make it clear for you. Try this in the codesandbox snippet above.

```jss
// What is the expected output? Try it in the code sandbox.
handleCount(value) {
    this.setState({count: this.state.count+100});
    this.setState({count: this.state.count+value});
    this.setState({count: this.state.count-100});
}
```

We want the setState to increment the count by 100, then update it by 1, and then remove that 100 that was added earlier. If setState performs the state transition in the actual order, we will get the expected behavior. However, setState is asynchronous, and multiple setState calls might be batched together for better UI experience and performance. So the above code yields a behavior which is different from what we expect.

Therefore, instead of directly passing an object, you can pass in an updater function that has the signature:
```jss
(prevState, props) => stateChange
```

prevState is a reference to the previous state and is guaranteed to be up to date. props refers to the component's props, and we don't need props to update the state here, so we can ignore that. Hence, we can use it for updating state and avoid the race condition.
```jss
// The right way
 
handleCount(value) {
     
  this.setState((prevState) => {
    count: prevState.count +1
  });
}
```
The setState() rerenders the component, and you have a working stateful component.

**Stateless Components** \
You can use either a function or a class for creating stateless components. But unless you need to use a lifecycle hook in your components, you should go for stateless functional components. There are a lot of benefits if you decide to use stateless functional components here; they are easy to write, understand, and test, and you can avoid the this keyword altogether. However, as of React v16, there are no performance benefits from using stateless functional components over class components. 

The downside is that you can't have lifecycle hooks. The lifecycle method ShouldComponentUpdate() is often used to optimize performance and to manually control what gets rerendered. You can't use that with functional components yet. Refs are also not supported.



## Container Components vs. Presentational Components

**Presentational Components**\
Presentational components are coupled with the view or how things look. These components accept props from their container counterpart and render them. Everything that has to do with describing the UI should go here. 

Presentational components are reusable and should stay decoupled from the behavioral layer. A presentational component receives the data and callbacks exclusively via props and when an event occurs, like a button being pressed, it performs a callback to the container component via props to invoke an event handling method. 

Functional components should be your first choice for writing presentational components unless a state is required. If a presentational component requires a state, it should be concerned with the UI state and not actual data. The presentational component doesn't interact with the Redux store or make API calls. 

**Container Components**\
Container components will deal with the behavioral part. A container component tells the presentational component what should be rendered using props. It shouldn't contain limited DOM markups and styles. If you're using Redux, a container component contains the code that dispatches an action to a store. Alternatively, this is the place where you should place your API calls and store the result into the component's state. 

The usual structure is that there is a container component at the top that passes down the data to its child presentational components as props. This works for smaller projects; however, when the project gets bigger and you have a lot of intermediate components that just accept props and pass them on to child components, this will get nasty and hard to maintain. When this happens, it's better to create a container component unique to the leaf component, and this will ease the burden on the intermediate components.


## Pure component
A component is said to be pure if it is guaranteed to return the same result given the same props and state. A functional component is a good example of a pure component because, given an input, you know what will be rendered. 

```js
const HelloWorld = ({name}) => (
 <div>{`Hi ${name}`}</div>
);
```

Class components can be pure too as long as their props and state are immutable. If you have a component with a 'deep' immutable set of props and state, React API has something called PureComponent. React.PureComponent is similar to React.Component, but it implements the ShouldComponentUpdate() method a bit differently. ShouldComponentUpdate() is invoked before something is rerendered. The default behaviour is that it returns true so that any change to the state or the props rerenders the component.

```js
shouldComponentUpdate(nextProps, nextState) {
  return true;
}
```

However, with PureComponent, it performs a shallow comparison of objects. Shallow comparison means that you compare the immediate contents of the objects instead of recursively comparing all the key/value pairs of the object. So only the object references are compared, and if the state/props are mutated, this might not work as intended. 

React.PureComponent is used for optimizing performance, and there is no reason why you should consider using it unless you encounter some sort of performance issue. 


