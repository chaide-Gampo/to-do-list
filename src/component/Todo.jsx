import React from "react";


class Todo extends React.Component {

    state = {
        completed : this.props.task.completed
    }

    toggleCompleted = () => {
        this.setState (privState => ({
            completed : !privState.completed
        })) 

        this.props.onToggleCompleted (this.props.task.id)
    }
   
    

    render () {
        return(
            <li className={"list-group-item d-flex justify-content-between align-items-center " + (this.state.completed ? "text-white bg-success" : null)}>
                {this.props.task.name}
                <button className="btn btn-sm ml-auto btn-outline-success" onClick={() => this.toggleCompleted()}>&#x2713;</button>
            </li>
        )
    }
}

export default Todo