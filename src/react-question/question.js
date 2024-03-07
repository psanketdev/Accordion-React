const question = [
  {
    id: 1,
    que: "How does React work?",
    ans: 'React creates a virtual DOM. When state changes in a component it firstly runs a "diffing" algorithm, which identifies what has changed in the virtual DOM. The second step is reconciliation, where it updates the DOM with the results of the difference.',
  },
  {
    id: 2,
    que: "What are props in React?",
    ans: 'Props are inputs to a React component. They are single values or objects containing a set of values that are passed to React Components on creation using a naming convention similar to HTML-tag attributes. i.e, They are data passed down from a parent component to a child component.',
  },
  {
    id: 3,
    que: "What are React Hooks?",
    ans: 'Hooks are a new addition to React 16.8. They let you use state and other React features without writing a class. With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.',
  },
  {
    id: 4,
    que: "What are the major features of ReactJS?",
    ans: 'It uses VirtualDOM instead RealDOM considering that RealDOM manipulations are expensive, Supports server-side rendering, Follows Unidirectional data flow or data binding, Uses reusable/composable UI components to develop the view',
  },
  {
    id: 5,
    que: 'What is Context API in ReactJS?',
    ans: 'Context provides a way to pass data through the component tree without having to pass props down manually at every level. Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language. Using context, we can avoid passing props through intermediate elements.'
  },
];

export default question;
