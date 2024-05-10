import FoodItem from "./FoodItem";


export default function FoodOptions({result,setrecipeId}){
    return <>
    <div className="food-flex">
    {result.map(item=><FoodItem setrecipeId={setrecipeId}
     key={item.id} food={item}/>)}
    </div>
        
    
    </>
}