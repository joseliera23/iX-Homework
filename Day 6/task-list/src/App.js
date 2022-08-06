import React from 'react'
import Counter from "./components/Counter";

export default function App() {
  
  function onCounterChanged(count, time) {
    console.log(count, time);
  }

  return (
    <div className='test'>

      <Counter change={onCounterChanged}></Counter>
      

    </div>
  )
}
