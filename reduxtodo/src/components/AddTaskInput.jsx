import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../slice/todoSlice';

const AddTaskInput = () => {
    
    const [selectedPriority, setSelectedPriority] = useState('Medium');
    const [taskInput, setTaskInput] = useState('');
    const dispatch = useDispatch()

    const addTaskToStore = (e) => {
        if (taskInput.trim() == "") return;
        e.preventDefault()
        dispatch(addTask({
            task: taskInput,
            priority: selectedPriority
        }))
        setTaskInput('')
        setSelectedPriority('Medium')
    }

  return (
    <div className="fixed left-0 right-0 bottom-0 flex justify-center">
    <div className="min-w-[50vw] bg-white border border-gray-200 rounded-2xl shadow-sm p-4 mb-12">
      <textarea
        placeholder="What needs to be done?"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        className="w-full resize-none border-none focus:ring-0 text-lg placeholder-gray-400 outline-none"
        rows="2"
      />
      
      <div className="flex items-center gap-10 justify-between pt-1 border-t border-gray-100">
        <div className="flex gap-2">
          {['Low', 'Medium', 'High'].map((level) => (
            <button
              key={level}
              onClick={() => setSelectedPriority(level)}
              className={`px-3 py-1 text-xs font-medium rounded-full border border-gray-200 transition ${selectedPriority === level ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700' : 'bg-white text-gray-600 hover:border-blue-400'}`}
            >
              {level}
            </button>
          ))}
        </div>
        
        <button
        onClick={addTaskToStore} className="bg-blue-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-blue-700 transition">
          Add Task
        </button>
      </div>
    </div>
    </div>
  );
};

export default AddTaskInput;