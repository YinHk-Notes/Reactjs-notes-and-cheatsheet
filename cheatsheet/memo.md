## React memo

Using memo will cause React to skip rendering a component if its props have not changed.

爲什麼在 React 中使用 memoization？
在 React 函數組件中，當組件中的 props 發生變化時，默認情況下整個組件都會重新渲染。換句話說，如果組件中的任何值更新，整個組件將重新渲染，包括尚未更改其 values/props 的函數 / 組件。



React.memo() 隨 React v16.6 一起發佈。雖然類組件已經允許您使用 PureComponent 或 shouldComponentUpdate 來控制重新渲染，但 React 16.6 引入了對函數組件執行相同操作的能力。

React.memo() 是一個高階組件 (HOC**)，**它接收一個組件 A 作爲參數並返回一個組件 B，如果組件 B 的 props（或其中的值）沒有改變，則組件 B 會阻止組件 A 重新渲染 。



React.memo() 是一個 HOC，而**useMemo()**是一個 React Hook。使用 useMemo()，我們可以返回記憶值來避免函數的依賴項沒有改變的情況下重新渲染。








#### ref: 
https://www.readfog.com/a/1643010870157086720

https://www.w3schools.com/react/react_memo.asp

https://ithelp.ithome.com.tw/articles/10240296?sc=iThomeR



