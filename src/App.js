import React from 'react'
import {add,sub,mul,div} from './Calc'

function App() {
  return (
    <div>
    <ul>
      <li>The addition is {add(10,20  )}</li>
      <li>The Subtraction is {sub(10,10  )}</li>
      <li>The multiplication is {mul(10,20  )}</li>
      <li>The division is {div(10,3)}</li>

    </ul>
  </div>
  )
}

export default App