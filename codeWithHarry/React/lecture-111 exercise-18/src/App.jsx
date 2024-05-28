import { useState,useEffect } from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards';


function App() {
  const [cards, setcards] = useState([])
  
  async function getme(){
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data= await a.json()
    setcards(data)

  }
  useEffect(() => {
    getme()
  }, [])
  
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className=" text-white font-semibold text-3xl p-4">
        <h1 className="text-center p-4 font-semibold font-mono ">CARDS</h1>
        <div className="auto-grid">
          {cards.map((e) => {
            return <Cards title={e.title} body={e.body} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App
