import { useNavigate } from "react-router-dom"

export default function FoodItem({food,setrecipeId}){
const navigate= useNavigate();

function submitOrder(){
    setTimeout(() => {
        navigate('order-summary')
    }, 2000);
}
    
return <>

    <div className="food-card">
        <div className="food-header">
            <div>
            <button className="btn btn-primary" onClick={()=>setrecipeId(food.id)}>View</button>
            <button className="btn btn-secondary" onClick={submitOrder}>Order</button>
            </div>
        
         <p style={{textAlign:"end"}}><strong>{food.title}</strong></p>
        </div>
        <div className="food-body">
        <img src={food.image} alt={food.title}  />
        </div>
        
    </div>
</>
}