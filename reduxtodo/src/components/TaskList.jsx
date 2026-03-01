import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, toggleComplete } from '../slice/todoSlice';
import EditTaskModal from './EditTaskModal';

const TaskList = () => {

  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const [toBeEdited, setToBeEdited] = useState(null)
  const closeModal = () => setToBeEdited(null)


    const deleteTodoFromStore = (id) => {
        if (window.confirm('Are you sure to delete this?')) {
            dispatch(deleteTask({id: id}))
        }
    }

  if (todos && todos.length === 0) {
    return (
      <div className="mt-12 text-center text-gray-500">
        No tasks to show
      </div>
    )
  }
  return (
    <div className="space-y-3 mt-12 h-[56vh] max-w-[80vw] w-[1000px] mx-auto overflow-y-scroll">
      {todos.map((todo) => (
      <div key={todo.id} className="flex items-start justify-between p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition">
        <div className="flex gap-4">
          <input 
            checked={todo.completed}
            type="checkbox" 
            className="mt-1.5 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            onChange={() => dispatch(toggleComplete({id: todo.id}))}
          />
          <div>
            <h3 className={`font-medium ${todo.completed ? 'line-through text-gray-500' : ' text-gray-900'}`}>{todo.task}</h3>
            {todo.priority === 'High' && (
            <span className="inline-block mt-1 px-2 py-0.5 text-[10px] font-bold tracking-wider rounded bg-orange-100 text-orange-700">
              High Priority
            </span>)
            }
            {todo.priority === 'Low' && (
            <span className="inline-block mt-1 px-2 py-0.5 text-[10px] font-bold tracking-wider rounded bg-green-100 text-green-700">
              Low Priority
            </span>)
            }
          </div>
        </div>

        <div className="flex gap-2">
          <button
        //   implement edit functionality 
            onClick={() => setToBeEdited(todo)}
          className="text-gray-400 hover:text-blue-600 p-1">Edit</button>
          <button 
            className="text-gray-400 hover:text-red-600 p-1"
            onClick={() => deleteTodoFromStore(todo.id)}
          >
            Delete
          </button>
        </div>
      </div>
      ))}
      {toBeEdited && (
        <EditTaskModal closeFunction={closeModal} todo={toBeEdited} />
      )}
    </div>
  );
};

export default TaskList;