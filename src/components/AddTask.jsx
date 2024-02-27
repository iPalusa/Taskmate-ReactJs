const AddTask = ({task, setTask, todos, setTodos, handleSubmit}) => {

  return (
    <section id='addTask'>
            <p id='title'>Task-Mate</p>
        <section id='form'>
            <input type='text' placeholder='Add a new task' autoComplete='off' value={task} onChange={(e) => setTask(e.target.value)} required/>
            <button type='submit' onClick={handleSubmit}>Add</button>
        </section>
    </section>
  )
}
    
export default AddTask