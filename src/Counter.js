import React from 'react'
import { useState } from 'react'
function Counter() {
    const [count, setCount] = useState(0)
    const buttonclick = (name) =>{
        if(name === 'increase'){
            setCount(prev=>prev+1)
            setCount(prev=>prev+1)
        }
        if(name === 'decrese'){
            setCount(prev=>prev-1)
        }
    }
  return (
    <div>
      <div>{count}</div>
      <button  name='increase' onClick={()=>buttonclick('increase')}>increase</button>
      <button  name='decrese' onClick={()=>buttonclick('decrese')}>decrese</button>
    </div>
  )
}

export default Counter
