import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Header from './Component/Header'
import './Index.css'
import './App.css'
import Home from './Component/Home/Home'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Home/>
  </StrictMode>,
)
