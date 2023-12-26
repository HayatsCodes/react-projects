import { useState } from "react";
import { FaPlus, FaFolderPlus, FaMinus, FaFolderMinus } from "react-icons/fa";

const TasksForm = () => {
  const [isClickedNewGroup, setIsClickedNewGroup] = useState(false);
  const [isClickedNewTask, setIsClickedNewTask] = useState(false);

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
    width: "55%"
  };
  const newTaskStyle = {
    fontSize: "25px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    width: "55%"
  };

  //   const InputStyle = {

  //   }
  return (
    <>
      <div style={containerStyle}>
        <div style={newGroupStyle} onClick={() => setIsClickedNewGroup(!isClickedNewGroup)}>
          {isClickedNewGroup ? <FaFolderMinus /> : <FaFolderPlus />}
          <p style={{ marginLeft: "1rem", fontSize: "20px" , userSelect: "none"}}>Add New Group</p>
        </div>
        {isClickedNewGroup ? (
          <>
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
                fontSize: "1.2rem"
              }}
            />
            <button style={{ borderRadius: "5px", outline: "none", height: "39px", width: "60px", backgroundColor: "black", color: "white"}}>
              Add
            </button>
          </>
        ) : (
          ""
        )}
        <div style={newTaskStyle} onClick={() => setIsClickedNewTask(!isClickedNewTask)}>
          {isClickedNewTask ? <FaMinus /> : <FaPlus />}
          <p style={{ marginLeft: "1rem", fontSize: "20px", userSelect: "none"}}>Add New Task</p>
        </div>
        {isClickedNewTask ? (
          <>
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
                fontSize: "1.2rem"
              }}
            />
            <button style={{ borderRadius: "5px", outline: "none", height: "39px", width: "60px", backgroundColor: "black", color: "white" }}>
              Add
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default TasksForm;
