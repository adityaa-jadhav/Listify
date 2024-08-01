import React from 'react'

function ShowTask({tasklist, setTasklist, task, setTask}) {
  
    const handleEdit = (id) => {
        const seletedTask = tasklist.find(todo => todo.id === id);
        setTask(seletedTask);
    }
  
    const handleDelete = (id) => {
        const updatedTasklist = tasklist.filter(todo => todo.id !== id);
        setTasklist(updatedTasklist);
    }
  
    return (
    <>
        <section className='showTaskSection'>
            <div className='head'>
                <div>
                    <span>Todays Tasks</span>
                    <span className='count'>{tasklist.length}</span>
                </div>
                
                <button onClick={()=> setTasklist([])} className='clear-all'>Clear All</button>
            </div>
            <ul>
                { tasklist.map((todo) => (
                    <li key={todo.id}>
                        <p>
                            <span className="name">{todo.name}</span>
                            <span className="time">{todo.time}</span>
                        </p>
                        <i onClick={() => handleEdit(todo.id)} className="bi bi-pencil-square"></i>
                        <i onClick={() => handleDelete(todo.id)} className="bi bi-trash"></i>
                    </li>
                )) }            
            </ul>
        </section>
    </>
  )
}

export default ShowTask
