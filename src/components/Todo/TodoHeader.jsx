import './css/style.css'
import style from './TodoHeader.module.css'

export default function TodoHeader(){
    return <>
    {/* In-line style */}
    {/* <h1 style={{color:"white",backgroundColor:'#ffc107', margin:0}} >To - Do APP</h1> */}
     <h1  className={style.header}>To - Do APP</h1>
    </>
}