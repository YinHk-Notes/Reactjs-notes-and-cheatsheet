/*  A higher-order component (HOC) is an advanced technique in React for reusing component logic.
    a higher-order component is a function that takes a component and returns a new component.
    Higher Order Component 指的是在 React 中能夠幫助我們重複使用程式碼的 React Component。具體來說 Higher Order Component 
    是一個 function，而這個 function 可以把 Component 當作參數傳入，並且回傳一個「增強版」的 Component。
 */
 
 // 被當作parameter放入的 Component 稱作 Wrapped Component，因為它是被 HOC 包住的。
 // Higher-Order Component 又稱作 Enhanced Component 或 Composed Component，但它其實是 Function。
 
 const EnhancedComponent = higherOrderComponent(WrappedComponent);

/* 
   將你想要重複使用的程式碼或邏輯撰寫成 React Component
   建立 HOC 檔案，並撰寫草稿
   將想要重複使用的程式碼或邏輯搬移到 HOC 檔案中
   將 props/config/behavior 傳遞到子元件（wrapper component）中

 */

const higherOrderComponent = (WrappedComponent) => {
  class EnhancedComponent extends React.Component {
    render() {
      // 記得要用 ...this.props 把所有原本的 props 內容帶回到 Wrapper Component 中
      return <WrappedComponent {...this.props} />;
    }
    
  return EnhancedComponent;
}
  
  
  
  
