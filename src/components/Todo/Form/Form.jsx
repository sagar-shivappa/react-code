import { useState } from "react";
import style from './Form.module.css'

export default function Form({todoList,setToDoList}) {
  
  const [todo, setToDo] = useState('')
  

  function addToDo(e) {
    e.preventDefault();
    setToDoList([...todoList, todo]);
    setToDo("");
  }
  return (
    <>
      <form action="submit" className="" onSubmit={addToDo}>
        <input
          type="text"
          onChange={(e) => setToDo(e.target.value)}
          value={todo} placeholder="Enter your Task"
        />
        <button className={style.modernbutton}type="submit">Add</button>
      </form>
    </>
  );
}
