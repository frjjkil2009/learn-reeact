import React, { useState } from 'react';
import TodoList from './components/TodoList';

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Sleep',
      status: 'new'
    },
    {
      id: 2,
      title: 'Eat',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Working',
      status: 'new'
    }
  ]

  const [todoList, setTodoList] = useState(initTodoList);
  const handleTodoClick = (todo, index) => {
    const newTodoList = [...todoList];

    if (todo.status === 'new') {
      newTodoList[index].status = 'completed';
    } else if (todo.status === 'completed') {
      newTodoList[index].status = 'new';
    }

    setTodoList(newTodoList);
  };

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList
        todoList={todoList}
        onTodoClick={handleTodoClick}
      />
    </div>
  );
}

export default TodoFeature;