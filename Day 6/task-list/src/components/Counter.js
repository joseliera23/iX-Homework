import React, { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(0);

  function addOneToCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <div> {count} </div>

      <button onClick={addOneToCount}>Add 1</button>
    </div>
  );
}
