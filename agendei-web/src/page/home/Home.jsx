import './Home.css'

import Navbar from '../../components/Navbar/Navbar.jsx'
import Appointment from '../../components/Appointment/Appointment.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { doctors, appointments } from '../../constants/data/data.js'

function Home() {
  const navigate = useNavigate()

  function handleEdit(id_appointment) {
    navigate(`/appointments/edit/${id_appointment}`)
  }

  function handleDelete(id_appointment) {
    console.log(`Deletar: ${id_appointment}`)
  }

  return (
    <div className="container-fluid mt-page">
      <Navbar />

      <div className="d-flex justify-content-between align-items-center m-3">
        <div>
          <Link to="/appointments/add" className="btn btn-outline-primary">
            Novo Agendamento
          </Link>
        </div>

        <div className="d-flex justify-content-end align-items-center">
          <input id="startDate" type="date" className="form-control" />
          <span className="m-3">Até</span>
          <input id="endDate" type="date" className="form-control" />

          <div className="form-control m-3">
            <select name="doctor" id="doctor">
              <option value="0">Todos os médicos</option>
              {doctors.map((item) => {
                return (
                  <option key={item.id_doctor} value={item.id_doctor}>
                    {item.name}
                  </option>
                )
              })}
            </select>
          </div>

          <button className="btn btn-primary">Filtrar</button>
        </div>
      </div>

      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Paciente</th>
              <th scope="col">Médico</th>
              <th scope="col">Serviço</th>
              <th scope="col">Data/Hora</th>
              <th scope="col" className="text-end">
                Valor
              </th>
              <th scope="col" className="col-buttons"></th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((item) => {
              return (
                <Appointment
                  key={item.id_appointment}
                  id_appointment={item.id_appointment}
                  user={item.user}
                  doctor={item.doctor}
                  service={item.service}
                  booking_date={item.booking_date}
                  booking_hour={item.booking_hour}
                  price={item.price}
                  clickEdit={handleEdit}
                  clickDelete={handleDelete}
                />
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home
