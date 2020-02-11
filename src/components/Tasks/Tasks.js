import React from 'react'
import Task from './Task/Task'

const tasks = (props) => props.tasks.map((elem, index) =>{
    return <Task
        key={elem.id}
        name={elem.name}
        delete={()=> props.delete(index)}
        mark={()=>props.mark(elem.id)}
        status={elem.status}/>
  })

export default tasks;