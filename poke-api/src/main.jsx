import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import './styles.css'
import { store } from './store/store';
import { PokeDex } from './pages/PokeDex'
import { PokeApp } from './PokeApp';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PokeApp />        
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
)
