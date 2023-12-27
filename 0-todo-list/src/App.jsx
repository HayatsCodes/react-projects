import { useState, useEffect } from "react";
import TasksForm from "./components/TasksForm";
import Tasks from "./components/Tasks";
import blackHeader from "../assets/black_header.png";

const App = () => {
  const [groups, setGroups] = useState([]);
  const [isGroupClicked, setIsGroupClicked] = useState({}); // store in localStorage

  useEffect(() => {
    const clickData = {};
    const taskData = [
      { Productivity: ["task1", "task2"] },
      { Work: ["task1", "task2"] },
    ];
    taskData.forEach((task) => {
      const key = Object.keys(task)[0];
      clickData[key] = false;
    });
    setGroups(taskData);
    setIsGroupClicked(clickData);
  }, []);

  const addGroup = (group) => {
    setGroups(groups.concat(group));
  };

  const addTask = (groupName, task) => {
    const updatedGroups = groups.map((currentGroup) => {
      const key = Object.keys(currentGroup)[0];
      if (key === groupName) {
        return {
          [key]: [...currentGroup[key], task],
        };
      } else {
        return currentGroup;
      }
    });

    setGroups(updatedGroups);
  };

  const deleteGroup = (groupName) => {
    const updatedGroups = groups.filter(
      (group) => groupName !== Object.keys(group)[0]
    );
    setGroups(updatedGroups);
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


  const containerStyle = { fontFamily: "'Inter', sans-serif" };
  const h1Style = { textAlign: "center" };

  return (
    <div style={containerStyle}>
      <img
        src={blackHeader}
        style={{ width: "100%", objectFit: "cover", objectPosition: "center" }}
        alt=""
      />
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
      />
    </div>
  );
};

export default App;
