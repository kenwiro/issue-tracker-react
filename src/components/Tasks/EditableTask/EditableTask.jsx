import React, { useMemo, useState } from 'react';

const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxxfake'.replace(/[xy]/g,  c => {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

const EditableTask = ({ addNewTask }) => {

  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');


  const computedTask = (title, description) => ({
    _id: uuidv4(),
    title,
    description,
    status: 'OPENED'
  });

  const newTask = useMemo(() =>
    computedTask(title, description),
  [ title, description ]);

  return (
    <div className="task task--editable">
      <div className="task__title task__title--editable">
        <input
          type="text"
          onInput={ e => setTitle(e.target.value) }
          value={ title }
        />
      </div>
      <div className="task__description task__description--editable">
        <textarea
          onInput={ e => setDescription(e.target.value) }
          value={ description }
        />
      </div>
      <div
        className="task__status"
        onClick={() => addNewTask(newTask)}
      >
        <span>Create</span>
      </div>
    </div>
  );

};

export default EditableTask;
