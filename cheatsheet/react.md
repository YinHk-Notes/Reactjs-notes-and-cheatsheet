## React

![](../img/react-concept-logic.png)
### What is react?
***React is an open source JavaScript library/framework developed by Facebook since 2013 using in frontend***.

**React uses ES6 (ECMAScript 6)**, ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.

### What is virtual DOM
**DOM** stands for "**Document Object Model**". 

- It is ***a structured representation of the HTML elements that are present in a webpage***. 
- DOM represents the **entire UI** of your application you can see in the browser. 
- The DOM is represented as a **tree data structure**. It ***contains a node for each UI element present in the web document***.

A virtual DOM object is a *representation*
 of a DOM object, like a **lightweight copy**. 

React uses Virtual DOM exists which is like a lightweight copy of the actual DOM.

So for every object that exists in the original DOM, there is an object for that in React Virtual DOM.

A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing’s power to directly change what’s on the screen.

> **Manipulating the DOM is slow. Manipulating the virtual DOM is much faster**, because nothing gets drawn onscreen. Think of **manipulating the virtual DOM as editing a blueprint**, 


> React build the **virtual DOM,** finally the virtual DOM will **replaces the existing DOM nodes** in browser

| Real DOM | Virtual  DOM |
| --- | --- |
| 1. It updates slow. | 1. It updates faster. |
| 2. Can directly update HTML. | 2. Can’t directly update HTML. |
| 3. Creates a new DOM if element updates. | 3. Updates the JSX if element updates. |
| 4. DOM manipulation is very expensive. | 4. DOM manipulation is very easy. |
| 5. Too much of memory wastage. | 5. No memory wastage. |


## How to create a simple React app?

There are two ways to use React in your web application. The First way is to build a new React app, second is to add React to your current web app/ website no matter it was built by React or not, you can choose which part of your web app to use React as you like!

**Create a new React app:**

**prerequisite**:  node install +  npm install

open **cmd**  run follow command:

```jsx
npx create-react-app [your project name]
cd [your project name]
npm start
//http://localhost:3000
```

### Using TypeScript in React

Go to your existing React project, use command to install typescript

```jsx
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
# or
yarn add typescript @types/node @types/react @types/react-dom @types/jest
```

Next, rename any file to be a TypeScript file (e.g. `src/index.js` to `src/index.tsx`) and **restart your development server**!

### Getting Started with TypeScript and React[](https://create-react-app.dev/docs/adding-typescript/#getting-started-with-typescript-and-react)

You are not required to make a `[tsconfig.json` file](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html), one will be made for you. You are allowed to edit the generated TypeScript configuration.

- [TypeScript Handbook](https://www.typescriptlang.org/)
- [TypeScript Example on React](https://www.typescriptlang.org/play/index.html?jsx=2&esModuleInterop=true&e=196#example/typescript-with-react)
- [React + TypeScript Cheatsheets](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#reacttypescript-cheatsheets) has a good overview on how to use React with TypeScript

**Create a production build**

**npm run build** creates a build directory with a production build of your app. Inside the build/static directory will be your JavaScript and CSS files.

**Use react by CDN**

react and react-dom are available over a **CDN**. (add react to website )

```jsx
//react
<script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
//react-dom
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
```

eg:

```jsx
<!- ... existing HTML ... -->
<div id="root"></div>
<!-- ... existing HTML ... -->

<!-- ... other HTML ... -->
<!-- Load React. -->
<!-- Note: when deploying, replace "development.js" with "production.min.js". -->
<script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>

<!-- Load our React component. -->
<script src="react.js"></script>

```

create react.js script like this
```js
// ... the starter code you pasted ...
import App from ...

ReactDOM.render(<App />, document.getElementById('root'));
```

**React playground/online compiler**

[React](https://codesandbox.io/s/new)

