/* eslint-disable react/prop-types */
// import { useState } from "react"
import { FaFolder } from "react-icons/fa";


const Tasks = ({ groups }) => {
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
      }
  return (
    <div style={containerStyle}>
      <ul style={ulStyle}>
        {groups.map((group) => {
          const groupName = Object.keys(group)[0];
          const tasks = group[groupName];

          return (
            <li key={groupName}>
              <FaFolder style={{color: "rgb(65, 63, 63)"}}/> {groupName}
              <ul style={ulStyle}>
                {tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};


export default Tasks;
