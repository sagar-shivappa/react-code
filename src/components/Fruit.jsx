export default function Fruit({ fruit }) {
  return (
    <>
      <h3>{fruit.name}</h3>

      <h3>{fruit.price}</h3>
      <span>{fruit.sold ? "SoldOUT" : "Available"} </span>
    </>
  );
}
