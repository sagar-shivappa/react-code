export default function FoodItem({food}){
return <>
    {/* <h3 style={{color:"red"}}>{food.title}</h3> */}
    <div className="food-card">
        <button>View Item</button> <span>{food.title}</span>
        <img src={food.image} alt={food.title}  />
    </div>
</>
}