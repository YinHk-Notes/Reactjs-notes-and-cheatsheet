// React components can only render one element, and if you have multiple elements, 
// the common practice is to wrap them in a single root element, usually a <div> tag or <></> as a wrapper.
// This workaround works for most cases, but sometimes adding an extra DOM element is not feasible.

// React Fragments allow you to wrap or group multiple elements without adding an extra node to the DOM.
// react fragment is used to wrap multiple elements into one node ,
// beacause return only accept one node


return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
);


//or

import react, {Fragment} from react;
//...
return (
    <Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    <Fragment>
);
 
  
//or

return (
    <>
      <ChildA />
      <ChildB />
      <ChildC />
    </>
);

