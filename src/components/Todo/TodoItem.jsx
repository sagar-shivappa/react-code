import style from './TodoItems/TodoItem.module.css'

export default function TodoItem({item, setToDoList,todoList}){

    function deleteItem(item){
        const list = todoList.filter(i=>i!=item)
        setToDoList(list)
    }
    return <>
        <h1 className={style.todoItem}>{item} is added  <span > <button onClick={()=>deleteItem(item)}>X</button></span></h1>
    </>
}