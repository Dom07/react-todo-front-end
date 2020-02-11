import React, { Component } from 'react';
import Task from './Task/Task';
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
    task = this.state.tasks.map((elem, index) =>{
      return <Task
      key={elem.id}
      name={elem.name}
      delete={()=> this.deleteTask(index)}
      mark={()=>this.markTask(elem.id)}
      status={elem.status}/>
    })

    return (
      <div className="App">
        <h1 style={{textAlign: "center"}}> Todo App</h1>
        {task}
        <div className="InputDiv">
          <input 
            className="InputText" 
            type="text" hint="Enter task here:" 
            value={this.state.currValue}
            onChange={(event) => this.inputChange(event)}/>
          <button className="AddButton" onClick={this.addTask}>New Task</button>
        </div>
      </div>
    );
  }
}

export default App;
