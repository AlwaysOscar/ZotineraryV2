import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import { QuizzesContextProvider } from './context/QuizzesContext.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuizzesContextProvider>
      <App />
    </QuizzesContextProvider>
  </React.StrictMode>
)