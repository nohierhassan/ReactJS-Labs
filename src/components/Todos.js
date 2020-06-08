import React, { Component } from 'react';
import { render } from '@testing-library/react';
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';


class Todos extends Component
{

 
   render() 
   {
     
    return this.props.todos.map( (todo) => (
      <TodoItem  todo={todo} markDone={this.props.markDone} delItem={this.props.delItem}/>
      ))
  }
}

Todos.propTypes = {
  
  todos: PropTypes.array.isRequired
}



export default Todos;
