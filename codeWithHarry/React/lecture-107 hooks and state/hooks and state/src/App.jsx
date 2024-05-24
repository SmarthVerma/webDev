import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1000);

  return (
    <>
      <div>
        <h2>Beat me bitch: {count} </h2>
        <button onClick={()=>{setCount(count - 1)}} className="px-4 py-1 bg-yellow-300 rounded-md border hover:bg-yellow-400 active:bg-yellow-500 select-none font-normal">
          Click me
        </button>
      </div>
    </>
  );
}

export default App;
