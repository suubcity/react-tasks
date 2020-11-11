import React from "react";
import uniqid from "uniqid";
import Editing from "./Editing";

function Overview(props) {
  return (
    <div>
      <ul>
        {props.tasks.map((task, index) => {
          return (
            <div key={uniqid()}>
              <li>
                {index + 1} {task}
              </li>

              <div>
                <button onClick={() => props.handleDelete(index)}>
                  Delete
                </button>
                <Editing
                  handleEdit={props.handleEdit}
                  handleCommit={props.handleCommit}
                  editing={props.editing}
                  index={index}
                  indexToEdit={props.indexToEdit}
                />
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Overview;
