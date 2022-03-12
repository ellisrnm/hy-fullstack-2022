import { useState } from 'react'

const Title = ({text}) => (
  <h1>{text}</h1>
)

const Stats = ({text, value}) => (
  <p>{text} {value}</p>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const avg = (a, b, c) => (1*a + 0*b + -1*c)/(a+b+c)
  const pos = (a, b, c) => a/(a+b+c)*100

  return (
    <div>
      <Title text="give feedback" />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Title text="statistics" />
      <Stats text="good" value={good} />
      <Stats text="neutral" value={neutral} />
      <Stats text="bad" value={bad} />
      <Stats text="all" value={good + neutral + bad} />
      <Stats text="average" value={avg(good, neutral, bad)} />
      <Stats text="positive" value={pos(good, neutral, bad)} />
    </div>
  )
}

export default App