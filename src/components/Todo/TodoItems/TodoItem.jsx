import { useState } from "react";
import TodoItem from "../TodoItem";
import style from "./TodoItem.module.css";


export default function TodoItems({ todoList, setToDoList }) {

  return (
    <>
      <div className={style.todoItemList}> 
        {todoList.map((todo) => {
          return <TodoItem key={todo} item={todo} setToDoList={setToDoList} todoList={todoList}/>;
        })}
      </div>
    </>
  );
}
