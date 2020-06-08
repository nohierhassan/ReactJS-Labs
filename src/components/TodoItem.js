import React, { Component } from 'react'
import PropTypes from 'prop-types';
import addItem from './addItem'


export class TodoItem extends Component {
   getStyle = () =>
   {
        return{
            borderBottopm: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            backgroung: '#f4f4f4',
        }
   }

   
   
   
    render() 
    {
        const{ id , title } = this.props.todo
        return (
            
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.markDone.bind(this ,id)}/>
                {title}
                <button style={btnStyle} onClick={this.props.delItem.bind(this , id)}> X </button>
            </div>
            
        )
    }
}
TodoItem.propTypes = {
  
    todo: PropTypes.object.isRequired
  }

const btnStyle = {
    background:'#ff0000',
    color:'#fff',
    padding: '5px 10px',
    borderRadius:'50%',
    cursor:'pointer',

}
  
  

export default TodoItem
