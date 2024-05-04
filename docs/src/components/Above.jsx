

import React, { useState } from 'react';
import Card from './Card';

const Above = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    setShowDialog(true);
  };

  const handleConfirmTask = () => {
    if (newTask.trim() !== '') {
      const task = {
        content: newTask.trim()
      };
      setTasks([...tasks, task]);
      setNewTask('');
      setShowDialog(false);
    }
  };

  return (
    <div className='fixed top-0 z-[3] w-full overflow-y-scroll' style={{ maxHeight: 'calc(100vh - 100px)' }}>
      <div className='flex items-center'>
        <button
          className='text-white bg-gray-500 rounded-full py-4 px-7 m-5'
          onClick={handleAddTask}
        >
          Add Task
        </button>


        {showDialog && (
          <div className='dialog'>
            <input
              className='m-5 bg-gray-300 rounded-md p-3'
              type='text'
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button
              className='text-white bg-cyan-800 p-3 rounded-full'
              onClick={handleConfirmTask}
            >
              Add
            </button>
          </div>
        )}
      </div>

      <div className='flex flex-wrap'>
        {tasks.map((task, index) => (
          <Card key={index} taskContent={task.content} />
        ))}
      </div>
    </div>
  );
};

export default Above;