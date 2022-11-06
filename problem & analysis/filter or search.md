## react filter search
eg:
```js
import React from 'react';

const names = ['James', 'John', 'Paul', 'Ringo', 'George'];

function App() {
  return (
    <div>
      {names.filter(name => name.includes('J')).map(filteredName => (
        <li>
          {filteredName}
        </li>
      ))}
    </div>
  );
}

export default App;
```
```js

```js
import React from 'react';

const people = [
  {
    name: 'James',
    age: 31,
  },
  {
    name: 'John',
    age: 45,
  },
  {
    name: 'Paul',
    age: 65,
  },
  {
    name: 'Ringo',
    age: 49,
  },
  {
    name: 'George',
    age: 34,
  }
];

function App() {
  return (
    <div>
      {people.filter(person => person.age < 60).map(filteredPerson => (
        <li>
          {filteredPerson.name}
        </li>
      ))}
    </div>
  );
}

export default App;
```




[How to Build a Search Filter using React and React Hooks](https://www.freecodecamp.org/news/build-a-search-filter-using-react-and-react-hooks/)

[React Filter: Filtering Arrays in React (With Examples) - Upmostly](https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples)

[How to create a Filter/Search List in React (2022) - Kindacode](https://www.kindacode.com/article/how-to-create-a-filter-search-list-in-react/)
