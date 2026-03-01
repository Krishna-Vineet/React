import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../slice/todoSlice';

const EditTaskModal = ({ closeFunction, todo }) => {

  const [priority, setPriority] = useState(todo.priority)
  const [taskInput, setTaskInput] = useState(todo.task)
  const dispatch = useDispatch();
  const edit = () => {
    dispatch(editTask({
              id : todo.id,
              task : taskInput,
              priority : priority
            }))
            closeFunction();
          }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-2xl border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Edit Task</h2>
          <button onClick={closeFunction} className="text-gray-600 hover:text-gray-800 transition">
            ✕
          </button>
        </div>
        
        {/* Task Note Textarea */}
        <label className="block text-sm font-medium text-gray-700 mb-2 tracking-wide uppercase">
          Update Task
        </label>
        <textarea
          className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none mb-6 transition"
          rows="4"
          placeholder="Update your task note..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        
        {/* Priority Selection */}
        <label className="block text-sm font-medium text-gray-700 mb-3 tracking-wide uppercase">
          Update Priority
        </label>
        <div className="flex gap-3 mb-8">
          {['Low', 'Medium', 'High'].map((level) => (
            <button
              key={level}
              onClick={() => setPriority(level)}
              className={`px-3 py-1 text-xs font-medium rounded-full border border-gray-200 transition ${priority === level ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700' : 'bg-white text-gray-600 hover:border-blue-400'}`}
            >
              {level}
            </button>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3">
          <button 
            onClick={closeFunction}
            className="flex-1 px-4 py-3 text-gray-600 font-medium bg-gray-50 hover:bg-gray-100 rounded-xl transition"
          >
            Cancel
          </button>
          <button 
            className="flex-[2] px-4 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition"
            onClick={edit}
          >
            Update Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;