import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Container from './components/Container/Container'
import Bookmark from './components/Bookmark/Bookmark'

function App() {
  // const [count, setCount] = useState(0)
  const [readTime, setReadTime] = useState("");

  const handleWatchTime = (time) => {
    const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
    if (previousReadTime) {
      const sum = previousReadTime + time;
      localStorage.setItem("readTime", sum);
      setReadTime(sum);
    } else {
      localStorage.setItem("readTime", time);
      setReadTime(time);
    }

  }

  return (
    <div>
      <Header></Header>
     <div className='container grid grid-cols-1 lg:grid-cols-2 gap-20'>
     <Container handleWatchTime={handleWatchTime}></Container>
      <Bookmark readTime={readTime}></Bookmark>
     </div>

<hr />

     <div className='text-2xl mt-52 font-bold'>
      <h1 className='text-5xl'>1. What is the difference between props and state ?</h1>
      <p className='mt-10'>In React, both props and state are used to manage data within a component, but they have different purposes and usage.</p>
      <p className='mt-5 text-emerald-500 text-center'>Props:</p>
      <p className='mt-5'>props (short for "properties") are passed to a component from its parent component. They are read-only and cannot be changed by the component itself. The parent component defines the props when it creates the child component, and the child component can use them to render its content. props are used to pass information down the component tree, from the top-level parent to the deepest child.</p>
      <p className='mt-5 text-emerald-500 text-center'>State:</p>
      <p className='mt-5'>state, on the other hand, is an internal data storage mechanism for a component. It is a plain JavaScript object that can be modified by the component itself using the setState method. When the setState method is called, the component re-renders with the updated state. state is used to manage data that can change within the component, such as user input or a timer.</p>




       <h1 className='text-5xl mt-20'>2. How Use State Works ?</h1>
       <p className='mt-10'>In React, useState is a hook that allows functional components to have state. To use it, you declare a state variable using the useState hook, which returns an array with two elements: the current state value and a function that can be used to update the state value. You can use the state variable in your component to display data or control behavior, and when you update the state using the update function, React will automatically re-render your component with the new state value.</p>
       <img className='mt-10' src="https://www.freecodecamp.org/news/content/images/2022/06/carbon--4-.png" alt="" />




       <h1 className='text-5xl mt-20'>3. What else can the use effect do other than load data ?</h1>
       <p className='mt-10'>The useEffect hook in React is used to perform side effects within a functional component, such as fetching data, subscribing to events, or updating the document title. Here are some examples of what else useEffect can do other than loading data:</p>
       <p className='mt-8'>1...// Subscribe to events: You can use useEffect to subscribe to events like window resizing or keyboard input, and perform some action when the event occurs. For example, you can use useEffect to listen for a mousemove event and update the state accordingly.</p>
       <p className='mt-8'>2...// Update the document title: You can use useEffect to update the document title based on some state value. For example, you can use useEffect to set the document title to the current page title when the component mounts.</p>
       <p className='mt-8'>3...// Clean up after side effects: You can use useEffect to perform cleanup tasks when a component is unmounted or when some state value changes. For example, you can use useEffect to remove a listener when a component unmounts to avoid memory leaks.</p>
       <p className='mt-8'>4...// Trigger animations: You can use useEffect to trigger animations or other visual effects when some state value changes. For example, you can use useEffect to add a class to an element when a certain condition is met, which can be used to trigger CSS animations.</p>



       <h1 className='text-5xl mt-20'>4. How React Works ?</h1>
       <p className='my-10'>React works by using components, which are small, reusable pieces of code that represent a part of a user interface. These components can be composed together to create larger, more complex components. React uses a virtual DOM to represent the user interface, which allows it to efficiently update the UI when the state or props of a component change. Components can have state, which is an object that holds data that can change over time. When the state changes, React automatically updates the UI to reflect the new state. React also uses props to pass data from parent components to child components. Finally, when the state or props of a component change, React performs a process called reconciliation, which determines what parts of the virtual DOM need to be updated, and updates the actual DOM with the changes.</p>

     </div>
    </div>
  )
}

export default App
