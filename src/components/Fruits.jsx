import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = [
    { name: "Apple", price: "21", sold: false },
    { name: "Orange", price: "51", sold: true },
    { name: "Pineapple", price: "65", sold: false },
    { name: "Mongo", price: "65", sold: false },
    { name: "Grape", price: "65", sold: true },
    { name: "Kiwi", price: "65", sold: false },
  ];
  return (
    <>
      <ul>
        {fruits.map((fruit) =>
          fruit.price > 30 ? (
            <li key={fruit.name}>
              <Fruit fruit={fruit} />
            </li>
          ) : (
            ""
          )
        )}
      </ul>
    </>
  );
}
