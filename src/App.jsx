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
    </div>
  )
}

export default App
