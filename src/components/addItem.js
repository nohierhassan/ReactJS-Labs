import React, { Component } from 'react'

export class AddItem extends Component {
    state = {
        title: ''
    }
   
    onChange = (e) =>
     {
        this.setState({ title: e.target.value });
    }

    

    onSub = (e) => 
    {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: "" });
    };
    
   
    render() {
        return (
            <form onSubmit={this.onSub}>
                <h1> Here</h1>
                <input type="text"
                name="title"
                placeholder="add Todo"
                value={this.state.title} 
                onChange={this.onChange}

                />

                <input  type="submit" value="Submit"  />
                    <p>{this.state.title}</p>
            </form>
        )
    }
}

export default AddItem
