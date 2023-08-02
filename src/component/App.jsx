import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../toDo.css'
import ToDoList from './ToDolist'
import NavBar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import AddTask from './AddTask'
import initialData from '../initialData'
import uniqueId from 'uniqueid'
import Fetching from './fetching'


class App extends React.Component {

state = {
  tasks: initialData,
  fetching: true
}

onToggleCompleted = (taskID) =>{
  let onUpdate = this.state.tasks.find(task => task.id === taskID) //recuperer les id des taches dans la variables onupdate en suite les comparer
  onUpdate.completed = !onUpdate.completed // la variable onchangedcompleted recoit l'inverse des taches complete

  this.setState (prevState => (
    prevState.tasks.map(task => {
      return task.id === taskID ? onUpdate : task
    })

  ))

}

  //fonction pour ajoiter une nouvelle tache
 onAddTask = (addNewsTask) => {
    let newTask = {
      id : uniqueId(),
      name : addNewsTask,
      completed : false
    }
  
    this.setState (preventState => ({
      tasks : [...preventState.tasks, newTask]
    }))
  }

  onDeleteTask = () => {
    this.setState(preventState => {
      let DelTask = preventState.tasks.filter(task => !task.completed) //la vqriqble deltask recoit les taches qui ne sont pas completer
      return {
        tasks: DelTask
      }
    })

   
  }

  render(){
    return(
      <section id="todo">
        {this.state.fetching ? <Fetching/> : null}
          <Routes>
              <Route path="/:filter?" element={<ToDoList props = {this.state.tasks} onToggleCompleted={this.onToggleCompleted} /> } />
              <Route exact path="/add-task/" element={<AddTask props onAddTask={this.onAddTask} />}/>
          </Routes>
      <NavBar onDeleteTask={this.onDeleteTask}/>
    </section>
    )
  }
}


export default App
