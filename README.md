# package.json

- is a configuration for the app and its packages/dependencies for npm.
- this file is added after running npm init.

the most important package for react applications is a bundler. like Webpack, parcel, vite, rollup etc.
bundlers help in

- code bundling and differential bundling(for supporting older browsers)
- minimization(removing white spaces, variable name shortening and lazy loading/chunking)
- compression(for transfering of chunks)
- hot-module-replacement
- cacheing-and-reliable-content Hashing(file watching algorithm)
- image optimization
- diagnostics and better error suggestions in console

transitive dependencies are dependencies that are rquired by the dependencies taht are installed

using react through script tag and having network call for react package is not recommended:

- becoz network calls will be made rather than having the code inside node_modules
- becoz letting npm to manage the package version of react is way better than keep changing the url in the script tag.

// JSX

- JSX, which stands for JavaScript XML, is a syntax extension for JavaScript that allows developers to write HTML-like code within JavaScript.
- JSX helps in readability(deep nesting is easy) and maintainability with scale.
- it was built with the concept of having html code along with js logic.
- JSX helps in rendering dynamic data alongwith markup, logic(JS code) inside JSX is enclosed with "{}".
- JSX needs to be transpiled to es6 syntax by bundler compiler dependency like BABEL before the code reaches the JS Engine.
- attributes have to be in camel case.
- multiple line JSX needs to be wrapped in paranthesis for babel to understand.
- JSX =>(by babel) React.creeateElement => react element(JS Object) => rendered as HTML element.

// React-router v6

- createBrowserRouter takes a list of objects...where each object has path and element keys.
- createBrowserRouter returns a brouser router. => const appRouter = createBrowserRouter([{path: "/", element: <App />}]);
- the react root render method needs to be passed the RouterProvider component with prop router => root.render(<RouterProvider router={appRouter} />);
- Outlet can be used to render children components through children routes. => [{path: "/", element: <App />, chidren: [{path: "about", element: <About />}]}];
- in react for links never use <a> tags as it relaods the whole page, rather use <Link to="">About</Link>;
- two types of routing: client side and server side routing, react follows clientr side routing, the markup code is already available as single page application.
- useParam Hook is used to get the quesryParam values in a component.
- in a error page component useRouteError can be used to get additional router error details for populating info on the error page.

// react class components

- constructor called => render called => componentDidMount called
- if parent and chimkd components are both class components: parent constructor => parent render => child constructor => child render => child componentDidMopunt => parent componentDidMount
- if parent class component has multiple child class comp-onents: see below
- parent constructor
- parent render

  - first child constructor
  - first child render

  - second child constructor
  - second child render

  - first child componentDidMount
  - second child componentDidMount

- parent componentDidMount.

- react completes this in two phases to batch all dom manipulation simultaneously for optimization at one time:
  - render phase
  - commit phase

// misc

1. Why we need react?

- everything we can do with react can be done with js/html/css
- react makes the development experience smooth/hasslefree and helps making performant scalable production ready SPAs.
- in terms of performance, the most costlty operation that effects performance is dom manipulation, react through its diffing/reconciliation algorithm and virtual dom concept does very efficient DOM manipulation.

2. Why is react fast?

- in terms of performance, the most costlty operation that effects performance is dom manipulation, react through its diffing/reconciliation algorithm and virtual dom concept does very efficient DOM manipulation.

2. why to use keys in case of array/list of siblings

- in react for list of siblings, siblings of a parent component/dom element should have unique ids, this is required by the diff algorithm as it tries to identify each sibling component with its unique ids and makes optimised changes...if we dont provide unique ids, it will not be able to differentiate the siblings and it will have to rerender all the siblings(very inefficient like in case of infinite scroll etc).
- index (like from map function) is not recommended as keys for siblings in react if the order of siblings might change.

3. What are react hooks?

- They are JS utility functions written inside react source code. There are two most important hooks: useState and useEffect hooks.

4. What are the built-in react hooks?

- State hooks (useState, useReducer)
- Context Hooks (useContext)
- Ref hooks (useRef, useImperativeHandle)
- Effect hooks (useEffect)
- performance hooks (useMemo, useCallback)
- other hooks

5. How reconciliation algorithm works in react?

- React's reconciliation algorithm(or "diffing algorithm" or React Fiber (https://github.com/acdlite/react-fiber-architecture)) is a crucial part of how React efficiently updates the UI as and when the component's state or props. It works by comparing the new virtual DOM (generated based on JSX code) with the previous virtual DOM and determining the minimal number of changes required to update the actual DOM. Here's how the algorithm generally works using the object you provided:

- Initial Render:
  When your React component is first rendered, React creates a virtual DOM tree that represents the JSX structure. This tree is a JavaScript object hierarchy, similar to the one you logged for the x object.

- Subsequent Updates:
  When a component's state or props change, React re-renders the component.
  It generates a new virtual DOM tree based on the updated JSX code and the new data.
  Now comes the crucial part: React performs a "diffing" process by comparing the new virtual DOM tree with the previous one (the one created during the previous render).

- Diffing Process:
  React traverses the tree and compares the nodes in the new tree with their counterparts in the old tree.
  For each pair of corresponding nodes, React determines if there are any differences in their type, props, or children.
  If there are differences, React updates the corresponding part of the actual DOM to reflect the changes.

6. What happens when a local state variable is changed?

- React rerenders the component by triggeriung the reconciliation cycle and finding the diff between the prev and updated virtual DOM(JS object representation).
- Once it finds the minimum DOM modifications required it actually updates the DOM.
- So thought he whole component re-renders, only th eactual changes get updated in that component.
- React all this while keeps reference to the component instance and its state data so that the satte data is consistent between rerenders.

7. Effect of dependency array on useEffect callback called?

- The dependency array in the useEffect hook controls when the effect runs and what all state variables and props it has access to.
- Empty Array([]) : the effect will run only once, immediately after the component mounts. It doesnt rerun on any state or prop change.
- [state, props] : When you include variables or props in the dependency array, the effect runs whenever any of those dependencies change between renders. React compares the current values of the dependencies with the previous render's values and re-runs the effect if any of them have changed.
- No Dependency Array: the effect will re-run on every render/rerender of the component.

8. Key points to consider while setting the dependency array?

- dont modify those state variables that are part of the dependency array of the same effect... can cause infite loops.
- if the dependencies are objects or arrays...react compares them by reference, so even if the object/array contents get changed, react will not run the effect if the reference is same.

9. Why cant we have useEffect callback funcrtion as async?
10. Can we have componentDidMount as async?

11. What is dynamic import?
