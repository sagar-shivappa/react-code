import { useState } from 'react';

// import Greet from './Greet';

function Greet(props) {
  const [count, setCount] = useState(0);
  const name = 'Simha1';

  return (
    <div className="app">
      Hello Sagararr {name} {20 + 30} {props.name} {props.message}
    </div>
  );
}

export default Greet;
