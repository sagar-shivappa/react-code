import { useState } from "react"
import Search from "./Search"
import FoodOptions from "./FoodOptions"
import FoodAppHeader from "./AppHeader"
import SimilarFood from "./SimilarFoodOptions"

export default function FoodBase() {
    const [result, setFoodItems] = useState([])
    const [recipeId, setrecipeId]= useState([])
    return <>
    <FoodAppHeader />
        <div className="container">
         
            
            <Search setFoodItems={setFoodItems} />
            <hr />
            <div className="row">
                <div className="col-md-8">
                <FoodOptions result={result} setrecipeId={setrecipeId} />
                </div>
                <div className="col-md-4">
                    <SimilarFood recipeId={recipeId} />
                </div>
            </div>
            
        </div>

    </>
}