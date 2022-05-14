### re-render

響 React 重新渲染的兩大關鍵 props / state ，當virtual-DOM發現props或state改變時，就會渲染使用這些數據對應的畫面UI。


### force to re-render



### stop for re-render
**React.memo()**
```jsx
React.memo(YourComponent);
```

**SshouldComponentUpdate**

```jsx
shouldComponentUpdate(nextProps) {
    // Rendering the component only if 
    // passed props value is changed
  
    if (nextProps.value !== this.props.value) {
      return true;
    } else {
      return false;
    }
  }
```
