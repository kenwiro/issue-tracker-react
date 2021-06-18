import React, { useMemo } from 'react';

const Task = ({ task, updateTask }) => {

  const computedTaskClasses = status => `task__status task__status--${status.toLowerCase()}`;

  const taskStatusClasses = useMemo(() =>
    computedTaskClasses(task.status),[ task.status ]);

  const updatedTask = task => {
    if(task.status === 'OPENED') {
      return { ...task, status: 'PENDING' };
    } else if(task.status === 'PENDING') {
      return { ...task, status: 'CLOSED' };
    }
    return task;
  };

  return (
    <div className="task">
      <div className="task__title">
        <span>{ task.title }</span>
      </div>
      <div className="task__description">
        <span>{ task.description }</span>
      </div>
      <div
        className={ taskStatusClasses }
        onClick={ () => task.status === 'CLOSED' ? null : updateTask(updatedTask(task)) }
      >
        <span>{ task.status }</span>
      </div>
    </div>
  );
};

export default Task;
