import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from '../page/Login/Login.jsx'
import Account from '../page/Account/Account.jsx'
import Appointments from '../page/Appointments/Appointments.jsx'
import Home from '../page/Home/Home.jsx'

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Account />} />
        <Route path="/home" element={<Home />} />
        <Route path="/appointments" element={<Appointments />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers
