1. What is JSX, and why is it used?
   Ans : JSX (JavaScript XML) is a syntax used in React that looks like HTML inside JavaScript.
   JSX makes it easier to write UI in React.Code looks like HTML, Easier to understand, Helps create UI components quickly

2. What is the difference between State and Props?
   Ans :

State :
i. State is internal data of a component
ii. State can change
iii. Managed inside the component

Props :
i. Props are data passed from parent to child
ii. Props are read-only
iii. Passed from another component

3. What is the useState hook, and how does it work?
   Ans : useState is a React Hook used to store and update data in a component.

Example : 

<!-- const [state, setState] = useState(initialValue);

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
} -->

How it works

i. count → current value

ii. setCount() → updates the value

iii. When state changes → React re-renders the component


4. How can you share state between components in React?
Ans : The most common way is lifting state up to a parent component.

Step 1 : Parent stores the state

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Child1 count={count} />
      <Child2 setCount={setCount} />
    </>
  );
}

Step 2 : Child components receive it using props

Child 1 : 
function Child1({ count }) {
  return <h1>{count}</h1>;
}

Child 2 : 
function Child2({ setCount }) {
  return <button onClick={() => setCount(c => c + 1)}>Increase</button>;
}

Both components share the same state.

5. How is event handling done in React?
Ans : Use event attributes

React uses camelCase events.

<button onClick={() => console.log("Clicked")}>
  Click
</button>

Example:

onClick

onChange

onSubmit


