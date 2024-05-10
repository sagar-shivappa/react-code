export default function FoodItem({food}){
return <>
    {/* <h3 style={{color:"red"}}>{food.title}</h3> */}
    <div className="food-card">
        <div className="food-header">
        <button className="btn btn-primary">View</button>
         <p style={{textAlign:"end"}}><strong>{food.title}</strong></p>
        </div>
        <div className="food-body">
        <img src={food.image} alt={food.title}  />
        </div>
        
    </div>
</>
}