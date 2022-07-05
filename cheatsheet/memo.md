## React memo

Using memo will cause React to skip rendering a component if its props have not changed.

爲什麼在 React 中使用 memoization？
在 React 函數組件中，當組件中的 props 發生變化時，默認情況下整個組件都會重新渲染。換句話說，如果組件中的任何值更新，整個組件將重新渲染，包括尚未更改其 values/props 的函數 / 組件。



React.memo() 隨 React v16.6 一起發佈。雖然類組件已經允許您使用 PureComponent 或 shouldComponentUpdate 來控制重新渲染，但 React 16.6 引入了對函數組件執行相同操作的能力。

React.memo() 是一個高階組件 (HOC**)，**它接收一個組件 A 作爲參數並返回一個組件 B，如果組件 B 的 props（或其中的值）沒有改變，則組件 B 會阻止組件 A 重新渲染 。



React.memo() 是一個 HOC，而**useMemo()**是一個 React Hook。使用 useMemo()，我們可以返回記憶值來避免函數的依賴項沒有改變的情況下重新渲染。


影響 React 重新渲染的兩大關鍵 props / state ，當virtual-DOM發現props或state改變時，就會渲染使用這些數據對應的畫面UI。因此在優化效能的路上，就是需要減少一些不必要但卻很昂貴的渲染。

昨天我們談到了useMemo，可以在某個對應的state沒變時，不重新渲染某個數值及其畫面。那props也有個對應的工具存在，也就是說當props沒改變時，我們就不去重新渲染畫面。這個東西便是React.memo。


> React memo is HOC(Higher Order Component)


> When a component is wrapped in `React.memo()`, React renders the component and memoizes the result. Before the next render, if the new props are the same, React reuses the memoized result skipping the next rendering.


If your component renders the same result given the same props, you can wrap it in a call to `React.memo` for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result.

React.memo only checks for prop changes. If your function component wrapped in `React.memo` has a `useState`, `useReducer` or `useContext` Hook in its implementation, it will still rerender when state or context change.

```jsx
import { memo } from "react";


function MyComponent(props) {
  /* render using props */
}
function areEqual(prevProps, nextProps) {
  /*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */
}
export default React.memo(MyComponent, areEqual);
```

or 

```jsx
const MyComponent = React.memo(function MyComponent(props) {
    ...
});

```


> Unlike the `shouldComponentUpdate()` method on class components, the `areEqual` function returns true if the props are equal and false if the props are not equal. This is the inverse from `shouldComponentUpdate`.


### When to use React.memo()
- Pure functional component.
your component is functional and given the same props. always render the same output. pure functional 是指同一個function的input不管執行多少次，output永遠都會一樣。元件而言就是，相同的props進去幾次，畫面永遠都一樣。
因為我們優化了效能，不渲染多餘的畫面時，不能遺漏渲染某些畫面的可能性(可能元件有某些side effect)，因為畫面不會重新渲染，所以我們必須保證每次同樣的props都會產生相同的畫面。
- Render often
- Re-render with same props
Your component is usaually provided with the same props during re-rendering.
- Your component is big size
Contain decent amount of UI elements, need to prevent re-render often.

### When avoid React.memo()
- If the component isn't heavy(not too big size) and usually renders with different props, most likely you don't need React.memo()
- Performance-related changes applied incorrectly can even harm performance. Use React.memo() wisely



#### ref: 
https://dmitripavlutin.com/use-react-memo-wisely/

https://www.w3schools.com/react/react_memo.asp

https://ithelp.ithome.com.tw/articles/10240296?sc=iThomeR

https://dmitripavlutin.com/use-react-memo-wisely/

https://pjchender.dev/react/react-memo/


