//Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

/* useState */
const [ statObj, setStateObj ] = useState({v1: 0, v2: 1})
// setState
setState({ ...stateObj, v2:99 })

/* useEffect */
//lifecycle method in function component

useEffect(() => {
	/* ComponentDidMount code */
}, []);

useLayoutEffect(() => {
	/* ComponentDidMount code */
}, []);

useEffect(() => {
	/* componentDidUpdate code */
}, [var1, var2,...]);
//when var1, var2,... updated, it will trigger this method

useEffect(() => {
	...
	return () => {
		/* componentWillUnmount code */
	}
}, []);

useEffect(() => {
	/* componentDidMount code + componentDidUpdate code */
	return () => {
		/* componentWillUnmount code */
	}
}, [var1, var2,...]);
    
   
/* useContext */
const value = useContext(MyContext);
// Accepts a context object (the value returned from React.createContext) and returns the current context value for that context.
// the argument to useContext must be the context object itself
// useContext(MyContext) only lets you read the context and subscribe to its changes.

//eg:
function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}

/* useReducer */
//useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values
const [state, dispatch] = useReducer(reducer, initialState);

//eg:
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

/* useMemo */
// Pass a “create” function and an array of dependencies. useMemo will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.
// 目的是用來「避免重複進行複雜耗時的計算」，所以把計算的結果存起來用
// useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running
// The React useMemo Hook returns a memoized value.
// The useMemo Hook only runs when one of its dependencies update
// return a memoized value
// with 2 parameters, one is callback function with return value another one is array of dependies.
// This can improve performance.
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

//eg:
// Assume this returns an Array of 3000 records
const menuItemRows = useMemo(
    () => thousandsOfMenuItems.map(menuItem => (
        <MenuItemRow key={menuItem.uuid} name={menuItem.name} />
    )),
    [thousandsOfMenuItems]
);

/* useCallback */
// 記住 function instance 的 useCallback
// useCallback → 大部分不用，僅在搭配 PureComponent 等、或是提供多個 useEffect 時使用
// useCallback 是 useMemo 的一種變體，用來記住一個 function instance。useCallback 其實就等於回傳一個 function 的 useMemo。
// return a function
// prevent for unnecessary rendering in child component
useCallback(callback, [...someValues])

const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);

useCallback(callback):     // 如果沒有加上這個陣列，每次都會重新執行函式去產生新的函式
useCallback(callback, []): // 空陣列的話，回傳的函式不會改變
useCallback(callback, [...someValues]): // 有加上一些元素值的話，當元素值改變時會重新更新回傳的函式

/* useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function. 
   - useCallback: 記憶的是函式
   - useMemo: 記憶的是函式執行後的回傳值
 */


/* useRef */

// creat a reference
const nodeRef = useRef(initialValue);

// Access refs
const node = nodeRef.current;

// update refs
nodeRef.current = newValue;

// The reference must be updated either inside a useEffect() callback or inside handlers (event handlers, timer handlers, etc).
































   

