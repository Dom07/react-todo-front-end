import React from 'react'
import Task from './Task/Task'

const tasks = (props) => props.tasks.map((elem, index) =>{
    return <Task
        id={elem._id}
        key={elem._id}
        name={elem.name}
        clickDelete={props.delete}
        clickTask={props.mark}
        status={elem.status}/>
  })

export default tasks;