import React from 'react'

const TaskList = ({task, setTask, todos, setTodos, handleEdit, handleDelete}) => {
  return (
    <section id='taskList'>
      {todos.map((task, index) => (
        <div className='todos' id={index}>
          <p className='text'>{task}</p>
          <button className='edit' onClick={()=> handleEdit(index)}>Edit</button>
          <button className='delete' onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </section>
  )
}

export default TaskList