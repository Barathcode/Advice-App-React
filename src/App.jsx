import { useState } from 'react'

const App = () => {

  const [advice,setAdvice] = useState("Please Click the button to get Barath's advice")
  const [count,setCount] = useState(0)

  async function generateAdvice(){
    const res = await fetch ("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice)
    setCount((count)=>count+1)
  }

  return (
    <div>
      <h3>{advice}</h3>
      <button onClick={generateAdvice}>Advice</button>
      <Counter count={count} />
    </div>
  )
}

function Counter (props) {
  return (
    <p>You have read <b>{props.count}</b> advices till now</p>
  )
}

export default App
