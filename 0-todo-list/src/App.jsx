import { useState, useEffect } from "react";
import TasksForm from "./components/TasksForm";
import Tasks from "./components/Tasks";
import blackHeader from "../assets/black_header.png";

const App = () => {
  const [groups, setGroups] = useState([]);
  const [isGroupClicked, setIsGroupClicked] = useState({}); // store in localStorage
  // const [isTaskChecked, setIsTaskChecked] = useState({}); // store in localStorage

  useEffect(() => {
    const clickData = {};
    const storedData = localStorage.getItem('taskData');
    if (storedData) {
      const taskData = JSON.parse(storedData)
      setGroups(taskData);
      taskData.forEach((task) => {
        const key = Object.keys(task)[0];
        clickData[key] = false;
      });
      setIsGroupClicked(clickData);
    }
    // const taskData = [
    //   { Productivity: [{task: "task1", isChecked: false}, {task: "task2", isChecked: false}] },
    //   { Work: [{task: "task1", isChecked: false}, {task: "task2", isChecked: false}] },
    // ];
  }, []);

  const addGroup = (group) => {
    setGroups(groups.concat(group));
    localStorage.setItem('taskData', JSON.stringify(groups.concat(group)));
  };

  const addTask = (groupName, task) => {
    const updatedGroups = groups.map((currentGroup) => {
      const key = Object.keys(currentGroup)[0];
      if (key === groupName) {
        return {
          [key]: [...currentGroup[key], {task, isChecked: false}],
        };
      } else {
        return currentGroup;
      }
    });

    setGroups(updatedGroups);
    localStorage.setItem('taskData', JSON.stringify(updatedGroups));
  };

  const updateTask = (groupName, taskIndex) => {
    setGroups((prevGroups) => {
      const updatedGroups = prevGroups.map((currentGroup) => {
        const key = Object.keys(currentGroup)[0];
        if (key === groupName) {
          return {
            [key]: currentGroup[key].map((task, index) => {
              if (index === taskIndex) {
                return { ...task, isChecked: !task.isChecked };
              } else {
                return task;
              }
            }),
          };
        } else {
          return currentGroup;
        }
      });
  
      localStorage.setItem('taskData', JSON.stringify(updatedGroups));
  
      return updatedGroups;
    });
  };
  
  

  const deleteGroup = (groupName) => {
    const updatedGroups = groups.filter(
      (group) => groupName !== Object.keys(group)[0]
    );
    setGroups(updatedGroups);
    localStorage.setItem('taskData', JSON.stringify(updatedGroups));
  };

  const updateIsGroupClicked = (groupName) => {
    let isMatch = false;
    Object.keys(isGroupClicked).forEach((groupKey) => {
      if (groupKey === groupName) {
        isMatch = true;
        setIsGroupClicked({
          ...isGroupClicked,
          [groupName]: !isGroupClicked[groupName],
        });
      }
    });
    if (!isMatch) {
      setIsGroupClicked({ ...isGroupClicked, [groupName]: false });
    }
  };


  const containerStyle = { fontFamily: "'Inter', sans-serif"};
  const h1Style = { textAlign: "center" };

  return (
    <div style={containerStyle}>
      <img
        src={blackHeader}
        style={{ width: "100%"}}
        alt=""
      />
      <div style={{width: "80%", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={h1Style}>To-Do App</h1>
      <TasksForm
        groups={groups}
        addGroup={addGroup}
        addTask={addTask}
        updateIsGroupClicked={updateIsGroupClicked}
      />
      <Tasks
        groups={groups}
        isGroupClicked={isGroupClicked}
        updateIsGroupClicked={updateIsGroupClicked}
        deleteGroup={deleteGroup}
        updateTask={updateTask}
      />
      </div>
      
    </div>
  );
};

export default App;
