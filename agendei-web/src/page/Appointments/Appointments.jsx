import './Appointments.css'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar.jsx'
import {
  doctors,
  doctors_services,
  schedule,
} from '../../constants/data/data.js'

function Appointments() {
  const { id_appointment } = useParams()

  return (
    <>
      <Navbar />

      <div className="container-fluid mt-page">
        <div className="row col-lg-6 offset-lg-3">
          <div className="col-12 mt-2 text-center">
            <h1>
              {id_appointment > 0 ? 'Editar Agendamento' : 'Novo Agendamento'}
            </h1>
          </div>

          <div className="col-12 mt-4">
            <label htmlFor="doctor" className="form-label">
              Médico
            </label>
            <div className="form-control md-2">
              <select name="doctor" id="doctor">
                <option value="0">Selecione o médico</option>
                {doctors.map((item) => {
                  return (
                    <option key={item.id_doctor} value={item.id_doctor}>
                      {item.name}
                    </option>
                  )
                })}
              </select>
            </div>
          </div>

          <div className="col-12 mt-4">
            <label htmlFor="service" className="form-label">
              Serviço
            </label>
            <div className="form-control md-2">
              <select name="service" id="service">
                <option value="0">Selecione o Serviço</option>
                {doctors_services.map((item) => {
                  return (
                    <option key={item.id_service} value={item.id_service}>
                      {item.description}
                    </option>
                  )
                })}
              </select>
            </div>
          </div>

          <div className="col-6 mt-4">
            <label htmlFor="bookingDate" className="form-label">
              Data
            </label>

            <input
              type="date"
              name="bookingDate"
              id="bookingDate"
              className="form-control"
            />
          </div>

          <div className="col-6 mt-4">
            <label htmlFor="bookingHour" className="form-label">
              Horário
            </label>

            <div className="form-control md-2">
              <select name="service" id="service">
                <option value="0">Horário</option>
                {schedule.map((item) => {
                  return (
                    <option key={item.id_schedule} value={item.id_schedule}>
                      {item.time}
                    </option>
                  )
                })}
              </select>
            </div>
          </div>

          <div className="col-12 mt-5">
            <div className="d-flex justify-content-end">
              <Link to="/home" className="btn btn-outline-danger me-3">
                Cancelar
              </Link>
              <button className="btn btn-primary">Salvar Dados</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Appointments
