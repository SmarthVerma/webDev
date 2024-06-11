import { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import search from "./assets/search_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import { v4 as uuidv4 } from "uuid";
import Delete from "./assets/delete and edit/delete_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import Edit from "./assets/delete and edit/edit_24dp_FILL0_wght400_GRAD0_opsz24.svg";

function App() {
  const [todos, settodos] = useState([]);
  const [task, settask] = useState("");

  const handleAdd = (e) => {
    settodos([...todos, { id: uuidv4(), name: task, isComplete: false }]);
    settask("");
    console.log(todos);
  };

  const handleChange = (e) => {
    settask(e.target.value);
    console.log(task);
  };

  const handleDelete = (id) => {
    let newTodos = todos.filter((x) => {
      return x.id!==id
    });
    settodos(newTodos)
  };

  const handleCheckbox = (e) => {
    console.log(e.target.id);
    let indxy = e.target.id;
    let index = todos.findIndex((e) => {
      return e.id === indxy;
    });

    console.log(index);

    let newTodos = [...todos];
    newTodos[index].isComplete = !newTodos[index].isComplete;
    console.log(newTodos);

    settodos(newTodos);
  };

  return (
    <>
      <Navbar />
      <div className="h-screen w-screen bg-[url('https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHx8fDE3MTY5NTA2NjZ8MA&ixlib=rb-4.0.3&q=85')] bg-no-repeat bg-cover text-black flex justify-center items-center">
        <div className="bg-[#75796585]  w-[40vw] min-h-[70vh] p-5 px-28 rounded-2xl">
          <h1 className=" text-4xl font-bold my-7">Things to do: </h1>
          <div className="flex items-center gap-5 h-12">
            <div className="input-cont w-full bg-yellow-300 pl-3 h-12 rounded-xl border-2 border-black flex overflow-clip">
              <input
                onChange={handleChange}
                type="text"
                value={task}
                placeholder="Enter your task"
                className=" placeholder:text-slate-700 placeholder:font-medium bg-transparent border-none outline-none h-full text-2xl"
              />
              <div className="flex-grow flex justify-center items-center  cursor-pointer bg-black">
                <img className="w-10 " src={search} alt="" />
              </div>
            </div>
            <button
              onClick={handleAdd}
              className="flex-grow basis-[14rem] h-full bg-slate-900 text-white rounded-xl font-medium"
            >
              New Task
            </button>
          </div>
          <div className="task border border-black w-full mt-10"></div>
          <div className="w-full min-h-60  py-6">
            {todos.map((e) => {
              return (
                <div
                  key={e.id}
                  className="w-full border border-black font-semibold h-11 rounded-lg flex justify-between items-center px-3 bg-[#B380DA] hover:bg-[#c48eee] group"
                >
                  <div className="flex gap-3">
                    <input
                      className="w-5 rounded-sm"
                      onClick={handleCheckbox}
                      type="checkbox"
                      id={e.id}
                    />
                    <span className={e.isComplete ? "line-through" : ""}>
                      {e.name}{" "}
                    </span>
                  </div>
                  <div className="edit_delete invisible group-hover:visible flex gap-3">
                    <button className="btn">
                      <img className="invert" src={Edit} alt="" />
                    </button>
                    <button
                      onClick={() => handleDelete( e.id)}
                      className="btn bg-red-400"
                    >
                      <img className="invert" src={Delete} alt="" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
