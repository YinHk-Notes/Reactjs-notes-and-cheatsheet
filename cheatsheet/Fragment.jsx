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

