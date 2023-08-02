import React from "react";
import Todo from "./Todo";
import { useParams } from "react-router-dom";

const ToDoList = ({ props, onToggleCompleted }) => {
    let filrerdonne;
    const { filter } = useParams();

    // Switch to verify if the filter is "completed" in props
    switch (filter) {
        case 'completed':
            filrerdonne = props.filter(task => task.completed);
            break;

        default:
            filrerdonne = props;
            break;
    }

    if (filrerdonne.length === 0) {
        return (
            // <> as a sign represents a fragment to wrap multiple elements at once
            <>
                <h1 className="m-3">Liste des taches</h1>
                <ul className="list-group m-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Aucune donnée pour le moment
                    </li>
                </ul>
            </>
        );
    } else {
        return (
            // <> as a sign represents a fragment to wrap multiple elements at once
            <>
                <h1 className="m-3">Liste des taches</h1>
                <ul className="list-group m-3">
                    {
                        filrerdonne.map((task) => <Todo task={task} key={task.id} onToggleCompleted={onToggleCompleted}/>)
                    }
                </ul>
            </>
        );
    }
};

export default ToDoList;
