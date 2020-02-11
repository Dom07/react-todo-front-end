import React from 'react'
import './Task.css'

const task = (props)=>{
    let pStyle= null
    let taskStyle = null

    if(props.status){
        pStyle = {
            textDecoration: "line-through"
        }
        taskStyle = {
            opacity: "0.5"
        }

    }

    return(
        <div className="Task" style={taskStyle} >
            <div className="TaskDiv" onClick={props.mark} >
                <p style={pStyle}>{props.name}</p>
            </div>
            <div className="ButtonDiv" onClick={props.delete}>
                <p>Delete</p>
            </div>
        </div>
    );
}

export default task;
