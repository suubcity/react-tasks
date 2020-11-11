import React, { Component } from "react";
import Overview from "./components/Overview";

class App extends Component {
  constructor() {
    super();
    this.state = {
      task: "",
      tasks: [],
      editing: false,
      indexToEdit: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCommit = this.handleCommit.bind(this);
  }

  handleEdit(e) {
    const currentIndex = e.target.dataset.index;
    this.setState({
      editing: !this.state.editing,
      task: this.state.tasks[currentIndex],
      indexToEdit: currentIndex,
    });
  }

  handleCommit(e) {
    let workingArray = this.state.tasks;
    const currentIndex = this.state.indexToEdit;
    workingArray.splice(currentIndex, 1, this.state.task);

    this.setState({
      editing: !this.state.editing,
      tasks: workingArray,
      task: "",
    });
  }

  handleDelete(indexToRemove) {
    this.setState({
      tasks: this.state.tasks.filter((task, index) => {
        if (indexToRemove !== index) {
          return true;
        } else {
          return false;
        }
      }),
    });
  }

  handleChange(e) {
    this.setState({
      task: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.editing === false) {
      this.setState({
        tasks: this.state.tasks.concat(this.state.task),
        task: "",
      });
    }
  }

  render() {
    const { task, tasks } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Enter Task"
            value={this.state.task}
          ></input>
          <button type="submit">Add Task</button>
        </form>
        <Overview
          tasks={this.state.tasks}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          handleCommit={this.handleCommit}
          editing={this.state.editing}
          indexToEdit={this.state.indexToEdit}
        />
      </div>
    );
  }
}

export default App;
