import React from 'react'
import {useState} from 'react'
export default function Counter() {
    const[count,setCount]=useState(0);
    const[count1,setCount1]=useState(1000);
  return (
    <div>
        <p>
            {count}
        </p>
        <p>{count1}</p>
        <button onClick={()=>setCount(count+25)}>click</button>
        <button onClick={()=>setCount1(count1-25)}>click</button>
    </div>
  )
}
