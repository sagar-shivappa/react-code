import "bootstrap/dist/css/bootstrap.min.css";

import FoodBase from "./Food-Reciepe/Foodbase";
import OrderSummary from "./Food-Reciepe/OrderSummary";
import ToDoHome from "./components/Todo/ToDoHome";
import NavigatorBox from "./Navigator";
import PageNF from './PageNotFound';
import "./App.css";
import { Route, Routes } from "react-router-dom";
import FeatureDeatails from "./components/Todo/Feature";
import TodoApp from "./components/Todo/TodoApp";

function App() {
  return (
    <>
      <NavigatorBox />

      <Routes>
        <Route path="/" element={<FoodBase />}></Route>
        <Route path="todo" element={<ToDoHome />}>
          <Route index element={<FeatureDeatails />}></Route>
          <Route path="feature" element={<FeatureDeatails />}></Route>
          <Route path="app" element={<TodoApp />}></Route>
        </Route>
        <Route path="order-summary" element={<OrderSummary/>}></Route>
        <Route path="*" element={<PageNF/>}></Route>
      </Routes>
    </>
  );
}

export default App;
