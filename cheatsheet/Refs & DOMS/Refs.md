## Refs
**Reference**

`Refs` are a **function provided by React to access the DOM element** and the **React element** 

`Refs` provide a way to ***access DOM nodes or React elements created in the render method***.

react creates virtual Dom, if you want to access this virtual Dom node, just use `Refs`

There are a few good use cases for refs:
- Managing focus, text selection, or media playback.
- Triggering imperative animations.
- Integrating with third-party DOM libraries.
- get the method in child component

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
- 當 ref 使用在 React 的類別元件（class component）上時，current 會是該class component的instance。
- 除非是要使用 `React.forwardRef`，否則你應該不會在 function component 上 `ref` 屬性。
生命週期：

> React 會在元件掛載 **(mount）時為 `current` 屬性設定內容**，當它**解除掛載（unmount）時則把內容設為 null**。ref 會**在 componentDidMount 或 componentDidUpdate 之前更新**。

### Using Refs in class component

```jsx
class Child extends React.Component { 
  constructor(props) {
    super(props);
    //...
  }
  
  handleMethod() {//...}
  render() {
    return ();
  }
}
```
```jsx
class Parent extends React.Component { 
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  
  componentDidMount() {
    this.myRef.current.handleMethod(); //call method inside child component.
  }
  
  render() {
    return (
      <Child ref={this.myRef} />
    );
  }
}

```

> By default, you may not use the ref attribute on function components because they don’t have instances

```jsx
function MyFunctionComponent() {  return <input />;
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();  }
  render() {
    // This will *not* work!
    return (
      <MyFunctionComponent ref={this.textInput} />    );
  }
}
```

If you want to allow people to take a `ref` to your function component, you can use [`forwardRef`](https://reactjs.org/docs/forwarding-refs.html) (possibly in conjunction with [`useImperativeHandle`](https://reactjs.org/docs/hooks-reference.html#useimperativehandle)), or you can convert the component to a class.

You can, however, **use the `ref` attribute inside a function component** as long as you refer to a DOM element or a class component:

```jsx
function CustomTextInput(props) {
  // textInput must be declared here so the ref can refer to it  const textInput = useRef(null);  
  function handleClick() {
    textInput.current.focus();  }

  return (
    <div>
      <input type="text" ref={textInput} />      
      <input type="button" value="Focus the text input" onClick={handleClick} />
    </div>
  );
}
```

### 👍🏻Callback Refs
👉🏻這種方式**不需要先透過 createRef() 來建立`ref`**，而是直接代入一個函式，這個函式所代入的參數可以得到指稱的 HTML DOM 元素或 React 的元件instance，得到的這個**物件可以存起來在其他地方取用**。

Instead of passing a ref attribute created by createRef(), you **pass a function**. The function receives **the React component instance or HTML DOM element as its argument**, which can be stored and accessed elsewhere.

**Example**:
```jsx
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);

    // 利用 callback Ref 把取得的 element 保存在 textInputRef 的變數中
    this.textInputRef = null;

    // Callback Refs
    this.setTextInputRef = (element) => {
      this.textInputRef = element;
    };

    this.focusTextInput = () => {
      if (this.textInputRef) this.textInputRef.focus();
    };
  }

  componentDidMount() {
    // autofocus the input on mount
    this.focusTextInput();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.setTextInputRef} />
      </div>
    );
  }
}
```

```jsx
function CustomTextInput(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}

class Parent extends React.Component {
  render() {
    return <CustomTextInput inputRef={(el) => (this.inputElement = el)} />;
  }
}

```

#### `useCallback` with `ref`

```jsx
import { useRef, useCallback } from 'react';

const DemoCallbackRef = () => {
  // STEP 2: 建立一個保存 node 的 ref
  const nodeRef = useRef(null);

  // STEP 1: 使用 callback + ref 取得 node
  const setTextInput = useCallback((node) => {
    console.log('[DemoCallbackRef] useCallback', { node });

    // STEP 3: 將 node 設定給 nodeRef，便可將此 ref 保存下來
    nodeRef.current = node;
  }, []);

  // STEP 5: 使用剛剛保存下來的 ref
  const handleClick = useCallback(() => {
    nodeRef.current.focus();
  }, []);

  return (
    <div>
      {/* STEP 4: 透過 ref 帶入 setTextInput */}
      <input ref={setTextInput} type="text" />
      <button type="button" onClick={handleClick}>
        Focus the input
      </button>
    </div>
  );
};

```


### Uncontrolled component
uncontrolled components, where form data is handled by the DOM itself. In a controlled component, form data is handled by a React component

To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM.

這種把表單資料交給 React 來處理的就稱作 Controlled Components，也就是受 React 控制的資料；相對地，如果不把表單資料交給 React，而是像過去一樣，選取到該表單元素後，才從該表單元素取出值的這種做法，就稱作 Uncontrolled Components，也就是不受 React 控制的資料。


### ref
https://pjchender.dev/react/react-doc-ref-and-dom/

https://ithelp.ithome.com.tw/articles/10200939

https://ithelp.ithome.com.tw/articles/10227866



