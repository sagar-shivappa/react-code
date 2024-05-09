import { useState } from "react"
import Search from "./Search"
import FoodOptions from "./FoodOptions"

export default function FoodBase(){
    const [result,setFoodItems]= useState([])
    return <>
    <h1>My Food App</h1>
    <Search setFoodItems={setFoodItems}/>
    <FoodOptions result={result} />
    </>
}