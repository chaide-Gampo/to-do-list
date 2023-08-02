import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


/* class AddTask extends React.Component {
     
    //Fonction pour changer le mecanisme normale de l'execution d'un formulaire

    handleChange = (e) => {
        const navigate = useNavigate();
        e.preventDefault(this.newTask) 
        this.props.onAddTask(this.newTask.value) //on appel ici la fonction aui ajoute la tache en lui donnons comme parrametre la tache recuperer depuis le formulaire
        
        navigate('/')
       
    }

    render (){
        return(
            <section>
                <h1 className="m-3">Nouvelle tâche</h1>
                <div className="card mx-3">
                    <form className="card-body" onSubmit={e => this.handleChange(e)}>
                        <div className="form-group">
                            <label form="taskName">Nom de la tâche</label>
                            <input type="text" className="form-control" name="taskName" id="taskName" required 
                            ref={ input => this.newTask = input } />
                        </div>
                        <br/>
                        <button type="submit" className="btn btn-primary">Créer</button>
                    </form>
                </div>
            </section>
        )
    }
}

export default AddTask */




const AddTask = (props) => {
  const navigate = useNavigate();
  const [newTask, setNewTask] = useState('');

  const handleChange = (e) => {
    e.preventDefault();  //Fonction pour changer le mecanisme normale de l'execution d'un formulaire
    props.onAddTask(newTask); //on appel ici la fonction aui ajoute la tache en lui donnons comme parrametre la tache recuperer depuis le formulaire
        
    navigate('/');
  };

  return (
    <section>
      <h1 className="m-3">Nouvelle tâche</h1>
      <div className="card mx-3">
        <form className="card-body" onSubmit={handleChange}>
          <div className="form-group">
            <label htmlFor="taskName">Nom de la tâche</label>
            <input
              type="text"
              className="form-control"
              name="NewTask"
              id="taskName"
              required
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Créer
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddTask;
