import { useState } from 'react'

const Title = ({text}) => (
  <h1>{text}</h1>
)

const StatisticLine = (props) => (
  <p>{props.text} {props.value} {props.unit}</p>
)

const Statistics = (props) => {
  const avg = (a, c, d) => (a - c)/d
  const pos = (a, d) => a/d*100
  return(
    <div>
      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="all" value={props.all} />
      <StatisticLine text="average" value={avg(props.good, props.bad, props.all)} />
      <StatisticLine text="positive" value={pos(props.good, props.all)} unit="%" />
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const handleGood = () => {
    setGood(good + 1)
    setAll(all +1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all +1)
  }
  const handleBad = () => {
    setBad(bad + 1)
    setAll(all +1)
  }

  if (all) {
    return (
      <div>
        <Title text="give feedback" />
        <Button handleClick={handleGood} text="good" />
        <Button handleClick={handleNeutral} text="neutral" />
        <Button handleClick={handleBad} text="bad" />
        <Title text="statistics" />
        <Statistics good={good} neutral={neutral} bad={bad} all={all} />
      </div>
    )
  }
  return (
    <div>
    <Title text="give feedback" />
    <Button handleClick={handleGood} text="good" />
    <Button handleClick={handleNeutral} text="neutral" />
    <Button handleClick={handleBad} text="bad" />
    <Title text="statistics" />
    <p>No feedback given</p>
    </div>
  )
}

export default App