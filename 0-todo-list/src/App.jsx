import { useState, useEffect } from "react"
import TasksForm from "./components/TasksForm"
import Tasks from "./components/Tasks"
import blackHeader from '../assets/black_header.png'



const App = () => {
const [groups, setGroups] = useState([])


useEffect(() => {
  const taskData = [{ Productivity: ["task1", "task2"] }, { Work: ["task1", "task2"] }];
  setGroups(taskData)
}, [])

const addGroup = (group) => {
  setGroups(groups.concat(group))
}

  const containerStyle = {fontFamily: "'Inter', sans-serif"}
  const h1Style = {textAlign: "center"}

  return (
    <div style={containerStyle}>
      <img src={blackHeader} alt="" />
      <h1 style={h1Style}>To-Do App</h1>
      <TasksForm groups={groups} addGroup={addGroup}/>
      <Tasks groups={groups}/>
    </div>
  )
}

export default App