import Greet from "./components/Greet";
import ConditionalComp from "./components/ConditionalComp";
import Fruits from "./components/Fruits";
import React from "react";
import Message from "./components/Message";
import Counter from './components/Counter'
import Form from './components//Form'
import TodoBase from './components/Todo/Todobase';
import FoodBase from './Food-Reciepe/Foodbase';
import './App.css'

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <Greet name="Shivappa" message="See you" />
      <ConditionalComp/> */}
      {/* <Fruits/> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <TodoBase /> */}
      <FoodBase/>
    </>
  );
}

export default App;
