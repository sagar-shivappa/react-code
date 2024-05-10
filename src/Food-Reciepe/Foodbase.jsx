import { useState } from "react"
import Search from "./Search"
import FoodOptions from "./FoodOptions"
import FoodAppHeader from "./AppHeader"

export default function FoodBase() {
    const [result, setFoodItems] = useState([])
    return <>
    <FoodAppHeader />
        <div className="container">
         
            
            <Search setFoodItems={setFoodItems} />
            <hr />
            <FoodOptions result={result} />
        </div>

    </>
}