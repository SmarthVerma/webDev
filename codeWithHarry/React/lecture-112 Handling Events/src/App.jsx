import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setname] = useState("Sammy")
  const [form, setform] = useState({email: "", phone: ""})

  const handleClick = ()=>{
    alert("Being click in ass u btixh")
  }
  const handleOver = ()=>{
    alert("INVASION!")
  }
  const handleInput = (e) => {
    setname(e.target.value)
  };
  const handleForm = (e) => {
    // setname(e.target.value)
    setform({...form, [e.target.name]:e.target.value})
    console.log(form)
  };

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      {/* <button className='inva' onMouseOver={handleOver}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsa rerum repudiandae quasi non ipsam accusantium. Quis, dolores! Deleniti nobis totam quaerat impedit itaque odit numquam? Incidunt natus est odit delectus fugiat voluptas itaque.
      </button> */}
      <input type="text" value={name} onChange={handleInput} />

      <input type="text" name='email' value={form.email} onChange={handleForm}/>
      <input type="text" name='phone' value={form.phone} onChange={handleForm}/>
        {/* agar bana ni ha ha tu aise krna ha */}
      <input type="text" name='sex' value={form.sex?form.sex:""} onChange={handleForm}/>
    </>
  )
}

export default App
