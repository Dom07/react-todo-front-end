import React, { Component } from 'react';
import Tasks from '../components/Tasks/Tasks';
import InputBox from '../components/InputBox/InputBox';
import './App.css';

class App extends Component {

  state = {
    tasks: [
      {id: "asfasf" ,name: "First todo task", status: false},
      {id: "acxcxzc" ,name: "Testing it out", status: false}
    ],
    currValue: ""
  }

  addTask = () =>{
    const dupTask = [...this.state.tasks]
    const newTask = {id: this.mongoObjectId() ,name: this.state.currValue, status: false}
    dupTask.push(newTask)
    this.setState({tasks : dupTask, currValue: ""})
  }

  markTask = (id) =>{
    const dupTask = [...this.state.tasks]
    const index = dupTask.findIndex(elem=>{
      return id === elem.id
    })

    dupTask[index].status = !dupTask[index].status
    this.setState({
      tasks : dupTask
    })
  }

  deleteTask = (index) =>{
    const dupTask = [...this.state.tasks]
    dupTask.splice(index, 1)
    this.setState({tasks: dupTask})
  }

  inputChange = (event)=>{
    this.setState({
      currValue:event.target.value
    })
  }

  mongoObjectId = ()=>{
    var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
    return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
        return (Math.random() * 16 | 0).toString(16);
    }).toLowerCase();
  };

  render(){
    let task = null;
    task = (
      <Tasks
        tasks = {this.state.tasks}
        delete = {this.deleteTask}
        mark = {this.markTask}
      />
    )

    return (
      <div className="App">
        <h1 style={{textAlign: "center"}}> Todo App</h1>

        {/* Renders a list of task */}
        {task} 

        {/* Task Input Component */}
        <InputBox
          status = {this.state.currValue}
          onChange = {this.inputChange}
          addTask = {this.addTask}
        />

      </div>
    );
  }
}

export default App;
