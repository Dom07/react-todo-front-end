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
            <div className="TaskDiv" onClick={() => props.clickTask(props.id)} >
                <p style={pStyle}>{props.name}</p>
            </div>
            <div className="ButtonDiv" onClick={() => props.clickDelete(props.id)}>
                <p>Delete</p>
            </div>
        </div>
    );
}

export default task;
