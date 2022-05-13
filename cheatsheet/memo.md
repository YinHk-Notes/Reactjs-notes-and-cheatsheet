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





#### ref: 
https://dmitripavlutin.com/use-react-memo-wisely/

https://www.w3schools.com/react/react_memo.asp

https://ithelp.ithome.com.tw/articles/10240296?sc=iThomeR



