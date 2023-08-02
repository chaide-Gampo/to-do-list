import React from "react";
import {FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash} from 'react-icons/fa' 
import { Link } from "react-router-dom";



const NavBar = ({onDeleteTask}) => (
    <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
        <div className="btn-group">
          <Link to="/" className="btn btn-outline-dark bg-light"><FaListAlt/></Link>
          <Link to="/completed" className="btn btn-outline-dark bg-light"><FaCheckSquare/></Link>
          <Link to="/add-task" className="btn btn-outline-dark bg-light"><FaPlusSquare/></Link>
        </div>
        <button className="btn btn-outline-dark bg-light" onClick={onDeleteTask}><FaTrash/></button>
      </footer>
      
)

export default NavBar