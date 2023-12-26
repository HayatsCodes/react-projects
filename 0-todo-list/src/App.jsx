import TasksForm from "./components/TasksForm"
import blackHeader from '../assets/black_header.png'

const App = () => {
  const containerStyle = {fontFamily: "'Inter', sans-serif"}
  const h1Style = {textAlign: "center"}

  return (
    <div style={containerStyle}>
      <img src={blackHeader} alt="" />
      <h1 style={h1Style}>To-Do App</h1>
      <TasksForm />
    </div>
  )
}

[{groupName: ["task"]}]
export default App