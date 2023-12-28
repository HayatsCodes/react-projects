/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaPlus, FaFolderPlus, FaMinus, FaFolderMinus } from "react-icons/fa";

const TasksForm = ({ groups, addGroup, addTask, updateIsGroupClicked }) => {
  const [isClickedNewGroup, setIsClickedNewGroup] = useState(false);
  const [isClickedNewTask, setIsClickedNewTask] = useState(false);
  const [newGroup, setNewGroup] = useState("");
  const [newTask, setNewTask] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");
  const [groupNames, setGroupNames] = useState([]);

  useEffect(() => {
    let allGroupNames = [];
    groups.forEach((group) => {
      if (group && Object.keys(group).length > 0) {
        const groupName = Object.keys(group)[0];
        allGroupNames.push(groupName);
      }
    });
    setGroupNames(allGroupNames);
    if (!selectedGroup) {
      setSelectedGroup(allGroupNames[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groups]);

  const createGroup = (event) => {
    event.preventDefault();
    let group = {};
    group[newGroup] = [];
    if (newGroup) {
      updateIsGroupClicked(newGroup);
      addGroup(group);
      setNewGroup("");
    }
  };

  const createTask = (event) => {
    event.preventDefault();
    addTask(selectedGroup, newTask);
    setNewTask("");
  };

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
            New Group
          </p>
        </div>
        {isClickedNewGroup ? (
          <form onSubmit={createGroup}>
            <input
              type="text"
              value={newGroup}
              onChange={({ target }) => setNewGroup(target.value)}
              placeholder="Grocery..."
              style={{
                backgroundColor: "rgb(229, 229, 229)",
                borderRadius: "5px",
                padding: "5px",
                width: "50%",
                maxWidth: "400px",
                outline: "none",
                borderBottom: "3px solid rgb(0,0,0)",
                borderRight: "none",
                borderLeft: "none",
                borderTop: "none",
                marginRight: "5px",
                height: "25px",
                fontSize: "1.2rem",
                lineHeight: "1.5",
              }}
            />
            {/* <button
              style={{
                borderRadius: "5px",
                outline: "none",
                height: "39px",
                width: "60px",
                backgroundColor: "rgb(65, 63, 63)",
                color: "white",
                marginLeft: "5px"
              }}
            >
              Add
            </button> */}
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
            New Task
          </p>
        </div>
        {isClickedNewTask ? (
          <form onSubmit={createTask}>
            <input
              type="text"
              value={newTask}
              placeholder="Buy garri..."
              onChange={({ target }) => setNewTask(target.value)}
              style={{
                backgroundColor: "rgb(229, 229, 229)",
                borderRadius: "5px",
                padding: "5px",
                width: "50%",
                maxWidth: "400px",
                outline: "none",
                borderBottom: "3px solid rgb(0,0,0)",
                borderRight: "none",
                borderLeft: "none",
                borderTop: "none",
                marginRight: "5px",
                height: "25px",
                fontSize: "1.2rem",
                lineHeight: "1.5",
              }}
            />
            <br></br>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "10px 0 20px 0",
                gap: "10px",
                fontSize: "1.2rem",
              }}
            >
              <label style={{ fontWeight: "bold" }}>Choose a group:</label>
              {
                <>
                  {groupNames.length > 0 ? (
                    <select
                      name="groups"
                      id="groups"
                      value={selectedGroup}
                      onChange={({ target }) => {
                        setSelectedGroup(target.value);
                      }}
                      style={{
                        backgroundColor: "rgb(229, 229, 229)",
                        borderRadius: "5px",
                        padding: "5px",
                        outline: "none",
                        marginRight: "5px",
                        fontSize: "1rem",
                        lineHeight: "1.5",
                      }}
                    >
                      {groupNames.map((groupName) => {
                        return (
                          <option
                            key={groupName}
                            value={groupName}
                            style={{ fontSize: "1rem" }}
                          >
                            {groupName}
                          </option>
                        );
                      })}
                    </select>
                  ) : (
                    "No group"
                  )}
                </>
              }
            </div>

            {/* <button
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
            </button> */}
          </form>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default TasksForm;
