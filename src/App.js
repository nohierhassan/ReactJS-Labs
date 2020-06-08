import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';
import AddItem from './components/addItem';
// import uuid from 'uuid/v1'
import uuid from 'react-uuid';




class App extends Component
{
  state = {
    todos:[
      {
        id: 1,
        title: 'Studying',
        completed: false,
      },
      {
        id: 2,
        title: 'reading',
        completed: true,
      },
      {
        id: 3,
        title: 'playing',
        completed: false,
      },
    ]
  }

  delItem = (id) => {
    this.setState({ todos:[...this.state.todos.filter(todo => todo.id !== id)]});

  }

  //Toggle Done

  markDone = (id) =>
   {
     console.log(id);
     
     this.setState({ todos: this.state.todos.map(todo =>
      {
           if(todo.id === id)
           {
             todo.completed = !todo.completed
           }
           return todo;
         })
       }
     )
       
   }

   addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title: title,
      completed:false
    }
    this.setState({ todos: [...this.state.todos , newTodo]})
    console.log(title)
  }

   

  render()
  {

    return (
      <div className="App">
          
         <Todos todos={this.state.todos} markDone={this.markDone} delItem={this.delItem}/>
         <AddItem  addTodo={this.addTodo}/>

      </div>
    );

  }
  
}




export default App;
