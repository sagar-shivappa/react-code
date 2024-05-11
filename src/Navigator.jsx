import { NavLink } from "react-router-dom"

export default function NavigatorBox(){
    return <>
        <nav className="nav-bar">
            <NavLink to="/">Foodies</NavLink>
            <NavLink to="/todo">To Do</NavLink>
        </nav>
    </>
}