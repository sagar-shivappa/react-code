import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = [
    { name: 'Apple', price: '21' },
    { name: 'Orange', price: '51' },
    { name: 'Pineapple', price: '65' },
  ];
  return (
    <>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.name}><Fruit fruit={fruit}/></li>
        ))}
      </ul>
    </>
  );
}
