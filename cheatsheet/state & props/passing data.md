## passing data between components

> Passing data/sharing just like a communication between components.

### Passing state/data to child/**descendant** components

- **use event emitter, or**
- **use props to pass value/state to child**
    
  

### **Lifting state/data up to parent/ancestor components**

- **use event emitter, or**
- use **props** to pass a function to child,  and the child use it and fill it with local state/data etc.
parent use this function with state/data from child to update its local state


### Sharing data between **sibling**

- **use event emitter, or**
- use **parent's local state,**  parent **set data from  the sibling component** to the local state, pass the state as props to other **sibling components.**

### ref
[Passing Data Between a Parent and Child in React](https://medium.com/@jasminegump/passing-data-between-a-parent-and-child-in-react-deea2ec8e654)

