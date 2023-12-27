/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaPlus, FaFolderPlus, FaMinus, FaFolderMinus } from "react-icons/fa";

const TasksForm = ({ groups, addGroup, addTask, updateIsGroupClicked }) => {
  const [isClickedNewGroup, setIsClickedNewGroup] = useState(false);
  const [isClickedNewTask, setIsClickedNewTask] = useState(false);
  const [newGroup, setNewGroup] = useState("");
  const [newTask, setNewTask] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");
  const [groupNames, setGroupNames] = useState([])

  // const groupNames = [];
  // groups.forEach((group) => {
  //   if (group && Object.keys(group).length > 0) {
  //     const groupName = Object.keys(group)[0];
  //     // isGroupClicked[groupName] = false
  //     groupNames.push(groupName);
  //   }
  // });

  useEffect(() => {
    let allGroupNames = []
    groups.forEach((group) => {
      if (group && Object.keys(group).length > 0) {
        const groupName = Object.keys(group)[0];
        allGroupNames.push(groupName)
      }
    });
    setGroupNames(allGroupNames);
    if (!selectedGroup) {
      setSelectedGroup(allGroupNames[0])
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groups])

  const createGroup = (event) => {
    event.preventDefault()
    let group = {}
    group[newGroup] = []
    updateIsGroupClicked(newGroup)
    addGroup(group)
    setNewGroup('')
  }

  const createTask = (event) => {
    event.preventDefault()
    addTask(selectedGroup, newTask)
    setNewTask('')
  }

  const containerStyle = {
    marginTop: "10px",
    paddingLeft: "5px",
    fontSize: "16px",
  };
  const newGroupStyle = {
    fontSize: "25px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    width: "55%",
  };
  const newTaskStyle = {
    fontSize: "25px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    width: "55%",
  };

  return (
    <>
      <div style={containerStyle}>
        <div
          style={newGroupStyle}
          onClick={() => setIsClickedNewGroup(!isClickedNewGroup)}
        >
          {isClickedNewGroup ? <FaFolderMinus /> : <FaFolderPlus />}
          <p
            style={{ marginLeft: "1rem", fontSize: "20px", userSelect: "none" }}
          >
            Add New Group
          </p>
        </div>
        {isClickedNewGroup ? (
          <form onSubmit={createGroup}>
            <input
              type="text"
              value={newGroup}
              onChange={({ target }) => setNewGroup(target.value)}
              style={{
                borderRadius: "5px",
                padding: "5px",
                width: "50%",
                maxWidth: "400px",
                outline: "none",
                marginRight: "5px",
                height: "25px",
                fontSize: "1.2rem",
              }}
            />
            <button
              style={{
                borderRadius: "5px",
                outline: "none",
                height: "39px",
                width: "60px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Add
            </button>
          </form>
        ) : (
          ""
        )}
        <div
          style={newTaskStyle}
          onClick={() => setIsClickedNewTask(!isClickedNewTask)}
        >
          {isClickedNewTask ? <FaMinus /> : <FaPlus />}
          <p
            style={{ marginLeft: "1rem", fontSize: "20px", userSelect: "none" }}
          >
            Add New Task
          </p>
        </div>
        {isClickedNewTask ? (
          <form onSubmit={createTask}>
            <input
              type="text"
              value={newTask}
              onChange={({target}) => setNewTask(target.value)}
              style={{
                borderRadius: "5px",
                padding: "5px",
                width: "50%",
                maxWidth: "400px",
                outline: "none",
                marginRight: "5px",
                height: "25px",
                fontSize: "1.2rem",
              }}
            />
            <label>Choose a group:</label>
            <select name="groups" id="groups" value={selectedGroup} onChange={({target}) => { console.log(target.value); setSelectedGroup(target.value)}}>
              {groupNames.map((groupName) => {
                return (
                  <option key={groupName} value={groupName}>
                    {groupName}
                  </option>
                );
              })}
            </select>
            <button
              type="submit"
              style={{
                borderRadius: "5px",
                outline: "none",
                height: "39px",
                width: "60px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Add
            </button>
          </form>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default TasksForm;