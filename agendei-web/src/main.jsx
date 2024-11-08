import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Login from './page/Login/Login.jsx'
import Acconunt from './page/Account/Account.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Acconunt />
  </StrictMode>
)
