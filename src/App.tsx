import 'bootstrap/dist/css/bootstrap.min.css';

import FoodBase from './Food-Reciepe/Foodbase';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<FoodBase />}>

      </Route>
    </Routes>
  </BrowserRouter>

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
