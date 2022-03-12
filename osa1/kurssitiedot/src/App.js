const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  const part = props.part

  return (
    <div>
      <p>
        {part.name} {part.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  const parts = props.parts

  return (
    <div>
      <p>
        <Part part={parts[0]} />
        <Part part={parts[1]} />
        <Part part={parts[2]} />
      </p>
    </div>
  )
}

const Total = (props) => {
  const parts = props.parts

  return (
    <div>
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App