import React, { useEffect } from 'react';
import AddTaskInput from './components/AddTaskInput';
import TaskList from './components/TaskList';
import EditTaskModal from './components/EditTaskModal';
import { useDispatch, useSelector } from 'react-redux';
import { bringTasksFromLocalStorage } from './slice/todoSlice';

const Container = () => {

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos)

    useEffect(() => {
        const stored = localStorage.getItem('todos');
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed)) {
                    dispatch(bringTasksFromLocalStorage({ todos: parsed }));
                }
            } catch (err) {
                console.error('Failed to parse todos from localStorage', err);
            }
        }
    }, [dispatch]);

    useEffect(() => {
        // always stringify the array before saving
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

  return (
    <div className="h-screen w-screen bg-gray-50 py-12 px-4 absolute">
      <div className="mx-auto">
        <header className="mb-8">
          <h1 className="text-5xl font-bold text-center text-gray-900">Task Manager</h1>
          <p className="text-gray-500 text-2xl text-center mt-2">Redux Learning Project</p>
        </header>

          <AddTaskInput />
          <TaskList />

      </div>
    </div>
  );
};

export default Container;