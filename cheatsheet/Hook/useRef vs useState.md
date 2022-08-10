## useRef vs useState

**useState Hook**

```jsx
import React, { useState } from 'react';
function Count() {
  // Declare a new state variable called count
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    setCount(prevCount => prevCount + 1);
  });
}
```
  
**useRef Hook**
```jsx
import React, { useRef } from 'react';
function Count() {
  // Declare a ref for count
  const countRef = useRef(0);
  
  useEffect(() => {
    countRef.current =  countRef.current + 1;   // This can access and modify the value of ref
  });
```


### useRef vs useState
- Data or values stored in a reference or `ref` remains the same, even after component re-rendering, unlike states. So, **References do not affect component rendering but states do**.

- `useState` returns 2 properties or an array. One is the value or state and the other is the function to update the state. In contrast, `useRef` returns only one value which is the actual data stored.

- When the reference value is changed, it is **updated without the need to refresh or re-render**. However in `useState`, the **component must render again to update the state or its value**.

**For `useState`:**

- Allows functional components to have their own state.
- Allows us to update the state inside components.
- It causes components to re-render after state updates.
- Returns the current state.
- Has an updater function that updates the state.

**For `useRef`:**

- Returns an object with a property containing the initial value.
- Doesn’t cause a component to re-render when the value or state changes.
- Data is persisted between renders.
- Allows referencing DOM elements.
