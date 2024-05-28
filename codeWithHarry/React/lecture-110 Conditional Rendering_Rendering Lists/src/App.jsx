import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {



  const [showBtn, setshowBtn] = useState(false)
  const [Todoey, setTodoey] = useState([
    {
      title: "JavaScript",
      desc: "programming language used in web dev"
    },
    {
      title: "Express.js",
      desc: "used in backend of web"
    },
    {
      title: "Next.js",
      desc: "best frontend framework"
    }
  ])

  // const Todo= (props)=>{
  //   return (
  //     <>
  //     <div className="todo">
  //       I got some things to do {props.title} and my work is {props.desc}
  //     </div>
      
  //     </>
  //   )
  // }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showBtn ? <button>Sex</button> : <button>no sex</button>}
      {/* {showBtn && <button>Sex</button>} */}
      {Todoey.map(sam=>{
        // return <Todo title={sam.title} desc={sam.desc} />;
        return (
          
            <div className="todo">
              I got some things to do {sam.title} and my work is {sam.desc}
            </div>
          
        )

      })}
      {/* <Todo title="Teri ma ki chu" /> */}
      <div className="card">
        <button onClick={() => setshowBtn(!showBtn)}>Show me</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App
