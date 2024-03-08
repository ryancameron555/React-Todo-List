/** @format */

import React, { useReducer } from 'react';

const initialState = { todos: [] };

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [...state.todos, { task: action.task, completed: false }],
      };
    case 'REMOVE_DONE':
      return {
        todos: state.todos.filter((todo) => !todo.completed),
      };
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map((todo, index) =>
          index === action.index
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    default:
      return state;
  }
}

export default function Todos() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodoTask = e.target.elements.todoInput.value;
    dispatch({ type: 'ADD_TODO', task: newTodoTask });
    e.target.elements.todoInput.value = '';
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input name="todoInput" type="text" />
        <button type="submit">Add Todo</button>
      </form>
      <button onClick={() => dispatch({ type: 'REMOVE_DONE' })}>
        Remove Completed
      </button>
      {state.todos.map((todo, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch({ type: 'TOGGLE_TODO', index })}
          />
          {todo.task}
        </div>
      ))}
    </div>
  );
}
