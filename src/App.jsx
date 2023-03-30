import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='container flex justify-between items-center ml-20 mt-10'>
      <h1 className=' text-3xl font-bold'>Knowledge Store</h1>
      <a href="">Menu</a>
      <a href="">About</a>
      <a href="">Help</a>
      <img className='h-20 rounded-full' src="https://bdun.org/wp-content/uploads/2020/03/HPM.jpg" alt="" />
      </div>
      <hr className='container ml-20 mt-6'/>
    </div>
  )
}

export default App
