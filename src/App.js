import { useState } from 'react';
import AddTask from './components/AddTask.jsx';
import UpdateTask from './components/UpdateTask.jsx';
import ToDo from './components/ToDo.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {

  //Task to-do state
  const [toDo, setToDo] = useState([ ]);
  
  //Temp state
  const [newTask, setNewTask] = useState();
  const [updateData, setUpdateData] = useState();

  // Add Task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false }
      setToDo([...toDo, newEntry])
      setNewTask('');
    }
  };

  //Delete Task
  const deleteTask = (id) => {
    let newTasks = toDo.filter(task => task.id !== id)
    setToDo(newTasks);
  };

  // Mark task as done
  const markDone = (id) => {
    let newTask = toDo.map(task => {
      if (task.id === id) {
        return ({...task, status: !task.status })
      }
      return task;
    })
    setToDo(newTask);
  };

  // Cancel update 
  const cancelUpdate = () => {
    setUpdateData('');
  };

  // change task for update 
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id ,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);
  };

  // update task 
  const updateTask = () => {
      let filterRecords = [...toDo].filter(task => task.id !== updateData.id);
      let updatedObject = [...filterRecords , updateData]
      setToDo(updatedObject);
      setUpdateData('');
  }
  return (
    <div className='container App'>
      <br></br>
      <h1>To-Do List App</h1>
      <br></br>


      {/* Update task */}
    { updateData && updateData ? (
      <UpdateTask
      updateData = {updateData}
      changeTask = {changeTask}
      updateTask = {updateTask}
      cancelUpdate = {cancelUpdate}
      />
      ) : (
       <AddTask 
       newTask={newTask}
       setNewTask={setNewTask}
       addTask={addTask}
       />
      )}

      
      {/* Write TO-Do content*/}
      {toDo && toDo.length ? '' : 'No tasks ..'}
      <ToDo
      toDo={toDo}
      markDone={markDone}
      setUpdateData={setUpdateData}
      deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
