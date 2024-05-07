import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoHeader from "./TodoHeader";
import Form from './Form/Form';
import TodoItems from './TodoItems/TodoItem';


export default function TodoBase() {
  const [todoList, setToDoList] = useState([]);

  return (
    <>
      <TodoHeader />
      <Form todoList={todoList} setToDoList={setToDoList}/>
      <TodoItems todoList={todoList} setToDoList={setToDoList}/>
    </>
  );
}
