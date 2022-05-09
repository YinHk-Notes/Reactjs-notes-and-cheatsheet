## Refs
Refs provide a way to access DOM nodes or React elements created in the render method.

react creates virtual Dom, if you want to access this virtual Dom node, just use "Refs"

There are a few good use cases for refs:
- Managing focus, text selection, or media playback.
- Triggering imperative animations.
- Integrating with third-party DOM libraries.

有了ref之後，我基本上就可以把react component DOM內的元素當成實體DOM，那也就是我可以任意用囉，理論和實作上也不是不行，

只是這樣就失去react當初設計的用意了，如果當你在實作一個功能的時候，如果可以利用props及state就可以達到的方法的話，那就盡量用props和state完成，

即是「非必要情況，盡量避免用refs」。

Don’t Overuse Refs
Your first inclination may be to use refs to “make things happen” in your app. If this is the case, 
take a moment and think more critically about where state should be owned in the component hierarchy. 
Often, it becomes clear that the proper place to “own” that state is at a higher level in the hierarchy.


### Create Refs
Use `React.createRef()`and attached to React elements via the `ref` attribute.
```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
```

### Accessing Refs

When a ref is passed to an element in `render`, a reference to the node becomes accessible at the `current` attribute of the ref.

```jsx
const node = this.myRef.current;
```

The value of the ref differs depending on the type of the node:

-   When the `ref` attribute is used on an HTML element, the `ref` created in the constructor with `React.createRef()` receives the underlying DOM element as its `current` property.
-   When the `ref` attribute is used on a custom class component, the `ref` object receives the mounted instance of the component as its `current`.
-   **You may not use the `ref` attribute on function components** because they don’t have instances.


根據 node 類型的不同，current 會得到不同的內容：

- 當 ref 使用在一般的 HTML 元素時，current 會是該 DOM 元素。
- 當 ref 使用在 React 的類別元件（class component）上時，current 會是該元件的實例。
- 除非是要使用 React.forwardRef，否則你應該不會在 function component 上 ref 屬性。
生命週期：

> React 會在元件掛載**（mount）時為 current 屬性設定內容**，當它**解除掛載（unmount）時則把內容設為 null**。ref 會**在 componentDidMount 或 componentDidUpdate 之前更新**。

