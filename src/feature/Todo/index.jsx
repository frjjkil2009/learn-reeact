import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
  const todoList = [
    {
      id: 1,
      title: 'Sleep'
    },
    {
      id: 2,
      title: 'Eat',
    },
    {
      id: 3,
      title: 'Working'
    }
  ]
  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={todoList}></TodoList>
    </div>
  );
}

export default TodoFeature;