import React, { Component } from 'react'

export class Form extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <input type="text" name="user"  onChange={this.props.handleChange}/>
                <button type="submit">Add</button>
            </form>
        )
    }
}

export default Form
