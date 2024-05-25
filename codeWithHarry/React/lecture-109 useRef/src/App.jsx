import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const btn_ref= useRef();
    

  useEffect(() => {
    console.log("Rendering")
    btn_ref.current.style.backgroundColor = "red"
  }, [count]);

  return (
    <>
      <div>
        <span>The count is: {count}</span>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          ref={btn_ref}
        >
          Click me
        </button>
      </div>
      <button onClick={()=>{
        btn_ref.current.style.display ="none"
      }}>Change me bicth</button>
    </>
  );
}

export default App;
