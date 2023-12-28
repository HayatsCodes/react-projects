/* eslint-disable react/prop-types */
// import { useState } from "react"
import { FaFolder, FaTrash, FaSquare, FaCheckSquare } from "react-icons/fa";

const Tasks = ({
  groups,
  isGroupClicked,
  updateIsGroupClicked,
  deleteGroup,
  updateTask,
}) => {
  const handleGroupClick = (groupName) => {
    updateIsGroupClicked(groupName);
  };

  const handleGroupDelete = (groupName) => {
    deleteGroup(groupName);
  };

  const handleIsTaskChecked = (groupName, taskIndex) => {
    updateTask(groupName, taskIndex);
  };

  const containerStyle = {
    marginTop: "10px",
    paddingLeft: "5px",
    fontSize: "16px",
    userSelect: "none"
  };

  const ulStyle = {
    listStyle: "none",
    margin: 0,
    paddingLeft: 5,
    fontSize: "20px",
    fontWeight: "bold",
    userSelect: "none"
  };
  return (
    <div style={containerStyle}>
      <ul style={ulStyle}>
        {groups.map((group) => {
          if (group && Object.keys(group).length > 0) {
            const groupName = Object.keys(group)[0];
            const taskName = group[groupName].map(
              (currentTask) => currentTask.task
            );

            return (
              <li key={groupName} style={{marginBottom: "20px"}}>
                <div
                  onClick={() => handleGroupClick(groupName)}
                  style={{ width: "50%", display: "inline" }}
                >
                  <FaFolder style={{ color: "rgb(65, 63, 63)" }} /> {groupName}
                </div>
                <FaTrash
                  style={{
                    position: "absolute",
                    right: "20%",
                    color: "rgb(65, 63, 63)",
                  }}
                  onClick={() => handleGroupDelete(groupName)}
                />

                {isGroupClicked[groupName] ? (
                  <ul style={ulStyle}>
                    {taskName.map((task, index) => (
                      <li
                        key={index}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          marginBottom: "15px",
                          marginTop: "15px"
                        }}
                      >
                        {(group[groupName][index]).isChecked === false ? (
                          <>
                          <FaSquare
                            onClick={() => handleIsTaskChecked(groupName, index)}
                            style={{
                              color: "rgb(229, 229, 229)",
                              border: "3px solid rgb(196, 196, 196)",
                              borderRadius: "5px",
                            }}
                          />
                          </>
                        ) : (
                          <>
                          <FaCheckSquare
                            onClick={() => handleIsTaskChecked(groupName, index)}
                            style={{
                              color: "rgb(119, 110, 201)",
                              border: "3px solid rgb(181, 181, 186)",
                              borderRadius: "5px",
                              padding: 0
                            }}
                          />
                          </>
                        )}
                        {task}
                      </li>
                    ))}
                  </ul>
                ) : (
                  ""
                )}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Tasks;
