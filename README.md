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

// Javascript

it is a single threaded language:
it runs on jsEnjine like V8 engine in chrome

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
