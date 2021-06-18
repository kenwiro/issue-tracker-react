import React, { useEffect, useState, useMemo } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Tasks from './components/Tasks/Tasks';
import axios from 'axios';

const App = () => {

  const [ tasks, setTasks ] = useState([]);
  const [ currentFilter, setFilter ] = useState('ALL');
  const [ isEditableVisible, setEditableVisibility ] = useState(false);

  useEffect(() => {
    (async function () {
      const { data } = await axios.get('http://localhost:3000/api/tasks');
      setTasks([ ...data ]);
    })();
  }, []);

  const computedTasks = (tasks, currentFilter) => tasks.filter(task =>
    currentFilter === 'ALL'
      ? task.status
      : task.status === currentFilter
  );

  const filteredTasks = useMemo(() =>
    computedTasks(tasks, currentFilter),
  [ tasks, currentFilter ]);

  const updateTask = updatedTask => {
    axios
      .put('http://localhost:3000/api/task', {
        id: updatedTask._id,
        status: updatedTask.status
      })
      .then(() => {
        setTasks(tasks.map(task => task._id === updatedTask._id ? updatedTask : task));
      })
      .catch(err => Error(err));
  };

  const addNewTask = newTask => {
    axios
      .post('http://localhost:3000/api/task', {
        title: newTask.title,
        description: newTask.description,
        status: newTask.status
      })
      .then(({ data }) => {
        const syncedTask = { ...newTask, _id: data._id };
        setTasks([ ...tasks, syncedTask ]);
        setEditableVisibility(false);
      })
      .catch(err => {
        Error(err);
      });
  };

  const changeFilter = filterName => {
    setFilter(filterName);
    setEditableVisibility(false);
  };

  return(
    <>
      <header className="header">
        <h1>React tracker</h1>
      </header>

      <main className="main">
        <Sidebar
          setFilter={ changeFilter }
          currentFilter={ currentFilter }
          toggleEditable={ setEditableVisibility }
          isEditableVisible={ isEditableVisible }
        />
        <Tasks
          tasks={ filteredTasks }
          updateTask={ updateTask }
          addNewTask={ addNewTask }
          isEditableVisible={ isEditableVisible }
        />
      </main>
      <footer className="footer">
        <h3>React</h3>
      </footer>
    </>
  );
};

export default App;
