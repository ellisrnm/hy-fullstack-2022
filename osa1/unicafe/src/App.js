import { useState } from 'react'

const Title = ({text}) => (
  <h1>{text}</h1>
)

const Statistics = (props) => (
  <p>{props.text} {props.value} {props.unit}</p>
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

  if (good + neutral + bad) {
    return (
      <div>
        <Title text="give feedback" />
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
        <Title text="statistics" />
        <Statistics text="good" value={good} />
        <Statistics text="neutral" value={neutral} />
        <Statistics text="bad" value={bad} />
        <Statistics text="all" value={good + neutral + bad} />
        <Statistics text="average" value={avg(good, neutral, bad)} />
        <Statistics text="positive" value={pos(good, neutral, bad)} unit="%" />
      </div>
    )
  }
  return (
    <div>
    <Title text="give feedback" />
    <Button handleClick={() => setGood(good + 1)} text="good" />
    <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
    <Button handleClick={() => setBad(bad + 1)} text="bad" />
    <Title text="statistics" />
    <p>No feedback given</p>
    </div>
  )
}

export default App