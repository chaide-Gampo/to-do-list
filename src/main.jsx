import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './component/App.jsx'
import { Provider } from 'react-redux'
import configureStore from './store/store'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const store = configureStore() //fichier de configuration de store

ReactDOM.createRoot(document.getElementById('root')).render(

<Provider store={store}>
    <React.StrictMode>
        <Router>
           <App /> 
        </Router>
    </React.StrictMode>
</Provider>
   
    
)

