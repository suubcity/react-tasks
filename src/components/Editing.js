import React, { Component } from "react";

function IsEditing(props) {
  return (
    <div>
      <button onClick={props.handleCommit}>Commit Change</button>
    </div>
  );
}

function IsNotEditing(props) {
  return (
    <div>
      <button data-index={props.index} onClick={props.handleEdit}>
        Edit
      </button>
    </div>
  );
}

function Editing(props) {
  if (props.editing && +props.indexToEdit === +props.index) {
    return <IsEditing handleCommit={props.handleCommit} />;
  }
  return <IsNotEditing handleEdit={props.handleEdit} index={props.index} />;
}

export default Editing;
