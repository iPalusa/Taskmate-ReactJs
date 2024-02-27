import React, { useState } from 'react'
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  /* Add Task */
  const handleSubmit = (e) => {
      e.preventDefault();
      if(task.trim() !== ''){
          setTodos([task,...todos])
          setTask('');
      }
  }

  /* Edit Task */
  const handleEdit = (index) => {
    const data = [...todos];
    setTask(data[index]);
    data.splice(index,1);
    setTodos(data);

  }
  /* Delete Task */
  const handleDelete = (index) => {
    const data = [...todos];
    data.splice(index,1);
    setTodos(data);
  }
  return (
    <section id='container'>
      <AddTask task={task} setTask={setTask} todos={todos} setTodos={setTodos} handleSubmit={handleSubmit}/>
      <TaskList task={task} setTask={setTask} todos={todos} setTodos={setTodos} handleEdit={handleEdit} handleDelete={handleDelete}/>
    </section>
  )
}

export default App