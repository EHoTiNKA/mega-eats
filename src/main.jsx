import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Header from './widgets/header'
import MainBody from './widgets/MainBody'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <MainBody/>
  </React.StrictMode>,
)
