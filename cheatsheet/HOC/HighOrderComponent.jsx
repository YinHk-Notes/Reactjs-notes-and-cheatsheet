/*  A higher-order component (HOC) is an advanced technique in React for reusing component logic.
    Higher Order Component 指的是在 React 中能夠幫助我們重複使用程式碼(logic, methods)的 React Component。具體來說 Higher Order Component 
    是一個 function，而這個 function 可以把 Component 當作參數傳入，並且回傳一個「增強版」的 Component。
    HOC is a function take component as input and return a new react component that wrap the input component.
 */
 
 // 被當作parameter放入的 Component 稱作 Wrapped Component，因為它是被 HOC 包住的。
 // Higher-Order Component 又稱作 Enhanced Component 或 Composed Component，但它其實是 Function。

 // HOC is a useful tool with the following advantages:
 // 1. reduce repeated code, reuse the logic 
 // 2. modulize the component framework
 
 //const EnhancedComponent = higherOrderComponent(WrappedComponent);

/* 
   將你想要重複使用的程式碼或邏輯撰寫成 React Component
   建立 HOC 檔案，並撰寫草稿
   將想要重複使用的程式碼或邏輯搬移到 HOC 檔案中
   將 props/config/behavior 傳遞到子元件（wrapper component）中

 */

const higherOrderComponent = (WrappedComponent) => {
  class EnhancedComponent extends React.Component {
    render() {
      // 記得要用 ...this.props 把所有原本的 props 內容帶回到 Wrapped Component 中
      return <WrappedComponent {...this.props} />;
    }
    
  return EnhancedComponent;
}
    
export default higherOrderComponent;
  
    
//eg1: 
/* This is a HOC */

// 簡易的 HOC
const HOC = (WrappedComponent) => {
    return class simpleHOC extends Component {
        constructor() {
            super();
            this.state = {say: 'good morning'}
        }

        render() {
            return <WrappedComponent {...this.props} say={this.state.say} />
        }
    }
};
// 要傳入的元件
class SimpleComp extends Component {
    render() {
        const {say} = this.props;
        return (<div>Johnny {say}</div>); // Johnny good morning
    }
}
// 使用掛入完的元件
const Simple =  HOC(SimpleComp);


//傳參數的 HOC:
// 可傳入性別參數的 HOC
const UserGenderHOC = (gender) => (WrappedComponent) => {
    return class userGenderHOC extends Component {
        render() {
            return (
                <WrappedComponent gender={gender} {...this.props} />
            );
        }
    }
};
// 要傳入的元件
class BaseComp extends Component {
    render() {
        const {gender} = this.props;
        return (<div>Gender: {gender}</div>); // Gender: Male
    }
}
// 傳入參數並使用元件
const Male =  UserGenderHOC('Male')(BaseComp);


//multi HOC
// 可傳入性別參數的 HOC
const UserGenderHOC = (gender) => (WrappedComponent) => {
    return class userGenderHOC extends Component {
        render() {
            return (
                <WrappedComponent gender={gender} {...this.props} />
            );
        }
    }
};
// 計數 HOC
const CountHOC = (WrappedComponent) => {
    return class countHOC extends Component {
        constructor() {
            super();
            this.state = {count: 0};
        }

        incrementCount = () => {
            this.setState({count: this.state.count + 1});
        };

        render() {
            return <WrappedComponent {...this.props} count={this.state.count} incrementCount={this.incrementCount}/>
        }
    }
};
// 使用者清單元件
class UserComp extends Component {
    render() {
        const {gender, count, incrementCount} = this.props;
        return (
            <div>
                <div>Gender: {gender}</div>
                <div>Number: {count}</div>
                <button onClick={incrementCount}>Add Number</button>
            </div>
        );
    }
}
// 掛入2個 HOC 的元件
const UserList =  UserGenderHOC('Male')(CountHOC(UserComp));


// ref: https://hsien-w-wei.medium.com/react-higher-order-component-%E9%AB%98%E9%9A%8E%E7%B5%84%E4%BB%B6-4110c03043ba

