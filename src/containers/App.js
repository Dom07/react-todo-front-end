import React, { Component } from 'react';
import Tasks from '../components/Tasks/Tasks';
import InputBox from '../components/InputBox/InputBox';
import axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    tasks: null,
    currValue: ""
  }

  componentDidMount() {
    axios.get('http://localhost:4000/api/task/')
      .then(response => {
        this.setState({
          tasks: response.data
        })
      })
      .catch(err => console.log(err))
  }

  addTask = () => {
    axios.post('http://localhost:4000/api/task/', { name: this.state.currValue, status: false })
      .then(response => {
        const dupTask = [...this.state.tasks]
        dupTask.push(response.data)
        this.setState({ tasks: dupTask, currValue: "" })
      })
      .catch(error => console.log(error))
  }

  markTask = (id) => {
    const dupTask = [...this.state.tasks]
    const index = dupTask.findIndex(elem => {
      return id === elem._id
    })
    axios.put("http://localhost:4000/api/task/" + id, {status: !dupTask[index].status})
      .then(() => {
        dupTask[index].status = !dupTask[index].status
        this.setState({
          tasks: dupTask
        })
      })
      .catch(error => console.log(error))
  }

  deleteTask = (id) => {
    axios.delete("http://localhost:4000/api/task/" + id)
      .then(() => {
        const dupTask = [...this.state.tasks]
        const index = dupTask.findIndex(elem => {
          return id === elem._id
        })
        dupTask.splice(index, 1)
        this.setState({
          tasks: dupTask
        })
      })
  }

  inputChange = (event) => {
    this.setState({
      currValue: event.target.value
    })
  }

  render() {
    let task = null;

    if (this.state.tasks) {
      task = (
        <Tasks
          tasks={this.state.tasks}
          delete={this.deleteTask}
          mark={this.markTask}
        />
      )
    } else {
      task = <p>Loading....</p>
    }


    return (
      <div className="App">
        <h1 style={{ textAlign: "center" }}> Todo App</h1>

        {/* Renders a list of task */}
        {task}

        {/* Task Input Component */}
        <InputBox
          status={this.state.currValue}
          onChange={this.inputChange}
          addTask={this.addTask}
        />

      </div>
    );
  }
}

export default App;
