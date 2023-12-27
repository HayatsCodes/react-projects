/* eslint-disable react/prop-types */
// import { useState } from "react"
import { FaFolder, FaTrash, FaSquare} from "react-icons/fa";

const Tasks = ({ groups, isGroupClicked, updateIsGroupClicked, deleteGroup }) => {
  const handleGroupClick = (groupName) => {
   updateIsGroupClicked(groupName)
  };

  const handleGroupDelete = (groupName) => {
    deleteGroup(groupName)
  };

 

  const containerStyle = {
    marginTop: "10px",
    paddingLeft: "5px",
    fontSize: "16px",
  };

  const ulStyle = {
    listStyle: "none",
    margin: 0,
    paddingLeft: 5,
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div style={containerStyle}>
      <ul style={ulStyle}>
        {groups.map((group) => {
          if (group && Object.keys(group).length > 0) {
            const groupName = Object.keys(group)[0];
            const tasks = group[groupName];

            return (
              <li key={groupName} >
                <div onClick={() => handleGroupClick(groupName)} style={{width: "50%", display: "inline"}}>
                <FaFolder style={{ color: "rgb(65, 63, 63)" }} /> {groupName}
                </div>
                <FaTrash style={{position: "absolute", right: "1rem", color: "rgb(65, 63, 63)"}} onClick={() => handleGroupDelete(groupName)}/>

                { isGroupClicked[groupName] ?
                  <ul style={ulStyle}>
                  {tasks.map((task, index) => (
                    <li key={index} style={{display: "flex", alignItems: "center", gap: "10px"}}>
                     <FaSquare style={{color: "rgb(229, 229, 229)", border: "3px solid rgb(196, 196, 196)", borderRadius: "5px"}}/>  {task}
                    </li>
                  ))}
                </ul> : ""
                }
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Tasks;