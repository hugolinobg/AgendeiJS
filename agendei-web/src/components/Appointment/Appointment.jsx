import './Appointment.css'

function Appointment(PropTypes) {
  const newDate = new Date(PropTypes.booking_date)
  return (
    <>
      <tr>
        <td>{PropTypes.user}</td>
        <td>{PropTypes.doctor}</td>
        <td>{PropTypes.service}</td>
        <td>
          {new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short' }).format(
            newDate
          )}
        </td>
        <td className="text-end">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(PropTypes.price)}
        </td>
        <td className="text-end">
          <div className="d-inkine">
            <button
              className="btn btn-sm btn-primary me-3"
              onClick={() => PropTypes.clickEdit(PropTypes.id_appointment)}
            >
              <i className="bi bi-pencil-square"></i>
            </button>

            <button
              className="btn btn-sm btn-danger"
              onClick={() => PropTypes.clickDelete(PropTypes.id_appointment)}
            >
              <i className="bi bi-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    </>
  )
}

export default Appointment
