/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaPlus, FaFolderPlus, FaMinus, FaFolderMinus } from "react-icons/fa";

const TasksForm = ({ groups, addGroup }) => {
  const [isClickedNewGroup, setIsClickedNewGroup] = useState(false);
  const [isClickedNewTask, setIsClickedNewTask] = useState(false);
  const [newGroup, setNewGroup] = useState("");
  // const [newTask, setNewTask] = useState("");

  const groupNames = [];
  groups.map((group) => {
    const groupName = Object.keys(group)[0];
    groupNames.push(groupName);
  });

  const createGroup = (event) => {
    event.preventDefault()
    let group = {}
    group[newGroup] = []
    setNewGroup('')
    addGroup(group)
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
          <form>
            <input
              type="text"
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
            <select name="groups" id="groups">
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
