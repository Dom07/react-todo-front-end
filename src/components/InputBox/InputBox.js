import React from 'react';
import './InputBox.css';

const inputBox = (props) => {
    return (
        <div className="InputDiv">
            <input 
                className="InputText" 
                type="text" hint="Enter task here:" 
                value={props.status}
                onChange={(event) => props.onChange(event)}/>
            <button className="AddButton" onClick={props.addTask}>New Task</button>
        </div>
  )
}

export default inputBox;