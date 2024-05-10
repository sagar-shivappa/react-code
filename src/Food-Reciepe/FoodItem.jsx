import { useEffect, useState } from "react"

export default function FoodItem({food,setrecipeId}){


    
return <>

    <div className="food-card">
        <div className="food-header">
        <button className="btn btn-primary" onClick={()=>setrecipeId(food.id)}>View</button>
         <p style={{textAlign:"end"}}><strong>{food.title}</strong></p>
        </div>
        <div className="food-body">
        <img src={food.image} alt={food.title}  />
        </div>
        
    </div>
</>
}