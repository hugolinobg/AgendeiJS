import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from '../page/Login/Login.jsx'
import Account from '../page/Account/Account.jsx'
import Appointments from '../page/Appointments/Appointments.jsx'
import Home from '../page/Home/Home.jsx'
import Profile from '../page/Profile/Profile.jsx'
import Doctors from '../page/Doctors/Doctors.jsx'

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Account />} />
        <Route path="/home" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/appointments/add" element={<Appointments />} />
        <Route
          path="/appointments/edit/:id_appointment"
          element={<Appointments />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers
