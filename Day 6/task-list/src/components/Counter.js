import React, { useState } from "react";
import './Counter.css';

export default function Counter(props) {
  const [count, setCount] = useState(0);

  function addOneToCount() {
    setCount(count + 1);
    props.change({
      count: count+1,
      time: '10am'
    });
  }

  return (
    <div>
      <div className={
        (count % 2 === 0 ? 'green' : 'red')
      }> {count} </div>

      <button onClick={addOneToCount}>
        Add 1
      </button>
    </div>
  );
}
