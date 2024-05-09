import FoodItem from "./FoodItem";


export default function FoodOptions({result}){
    return <>
    <div className="food-flex">
    {result.map(item=><FoodItem key={item.id} food={item}/>)}
    </div>
        
    
    </>
}