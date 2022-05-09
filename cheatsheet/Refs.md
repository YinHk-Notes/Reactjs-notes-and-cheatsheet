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


