import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos : []
}

const todoSlice = createSlice({
    name : 'todo',
    initialState : initialState,
    reducers : {
        bringTasksFromLocalStorage : (state, actions) => {
            state.todos = actions.payload.todos
        },
        addTask : (state, actions) => {
            const todo = {
                id: Date.now(),
                task: actions.payload.task,
                completed: false,
                priority: actions.payload.priority
            }
            state.todos.push(todo)
        },
        editTask : (state, actions) => {
            state.todos.forEach(todo => {
                if (todo.id === actions.payload.id) {
                    todo.id = Date.now();
                    todo.task = actions.payload.task;
                    todo.priority = actions.payload.priority;
                }
            })
        },
        toggleComplete : (state, actions) => {
            state.todos.forEach(todo => {
                if (todo.id === actions.payload.id) {
                    const checked = todo.completed;
                        const copy = {
                        id : todo.id,
                        task : todo.task,
                        completed : !todo.completed,
                        priority : todo.priority
                    }
                    state.todos = state.todos.filter(todo => todo.id != actions.payload.id)
                    if (checked) {   
                        state.todos.unshift(copy)
                    } else {
                        state.todos.push(copy)
                    }
                }
            })
        },
        deleteTask : (state, actions) => {
            state.todos = state.todos.filter(todo => todo.id != actions.payload.id)
        }
    }
})

export const { addTask, editTask, toggleComplete, deleteTask, bringTasksFromLocalStorage } = todoSlice.actions;

export const todoReducers = todoSlice.reducer;

