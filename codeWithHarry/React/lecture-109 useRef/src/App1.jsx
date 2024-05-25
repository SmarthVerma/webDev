import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const a= useRef(0)

  useEffect(() => {
  a.current= a.current + 1;
  console.log('rendering and its value is: ', a.current)

  });
  

  return (
    <>
    <div>

    <span>The count is: {count}</span>
     <button onClick={()=>{setCount(count + 1)}}>Click me bitch</button>
    </div>
    </>
  )
}

export default App
