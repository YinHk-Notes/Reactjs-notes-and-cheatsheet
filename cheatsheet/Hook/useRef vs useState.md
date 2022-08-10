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
