import { NavLink, Outlet } from "react-router-dom"
export default function  ToDoHome(){
    return <>
    <nav className="nav-bar" style={{backgroundColor:"red"}}>
        <NavLink to ="/todo/feature">Features</NavLink>
        <NavLink to ="/todo/app">Application</NavLink>
    </nav>
    <Outlet/>
    </>
}