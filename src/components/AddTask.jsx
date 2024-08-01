import React from 'react'

function AddTask({tasklist, setTasklist, task, setTask}) {

  const handleSubmit = (e) => {
    e.preventDefault();

    function myFunction() {
      var x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000);
    }

    if (e.target.task.value === "" || e.target.task.value.trim() === "") {
      myFunction();
    } 
    
    else if (task.id) {
      const date = new Date();
      const updatedTask = tasklist.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: task.name,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : todo
      );
      setTasklist(updatedTask);
      setTask({});
    } 
    
    else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setTasklist([...tasklist, newTask]);
      setTask({});
    }
  };

  return (
    <>
    <div className='addTask'>
        <section className='addTaskSection'>
            <form onSubmit={handleSubmit}>
                <input type="text" name='task' value={task.name || ""} maxLength="25" onChange={(e) => setTask({ ...task, name: e.target.value })} placeholder='Enter Your Task'/>
                <button>{task.id ? "Update" : "Add"}</button>
            </form>
            <span className='snackbar'>Enter some task!</span>
        </section>
    </div>
    </>
  )
}

export default AddTask
