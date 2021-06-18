import React from 'react';
import Task from './Task/Task';
import EditableTask from './EditableTask/EditableTask';

const Tasks = ({
  tasks,
  updateTask,
  isEditableVisible,
  addNewTask
}) => {

  const TasksList = tasks
    .map(task =>
      <Task
        key={ task._id }
        task={ task }
        updateTask={ updateTask }
      />
    );

  return (
    <div className="tasks">

      { isEditableVisible
        ? (<EditableTask addNewTask={ addNewTask } />)
        : null
      }
      { TasksList }
    </div>
  );
};

export default Tasks;
