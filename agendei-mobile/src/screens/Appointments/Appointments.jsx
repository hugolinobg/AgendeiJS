import { FlatList, SafeAreaView, Alert } from 'react-native'
import { useEffect, useState } from 'react'
import styles from './styles'

import Appointment from '../../components/Appointment/Appointment.jsx'

import api from '../../constants/api/api.js'

function Appointments() {
  const [appointments, setAppointments] = useState([])

  async function handleLoadAppointments() {
    try {
      const response = await api.get('/appointments')

      if (response.data) {
        setAppointments(response.data)
      }
    } catch (error) {
      if (error.response?.data.error) {
        Alert.alert(error.response.data.error)
      } else {
        Alert.alert('Ocorreu um erro. Tenta novamente mais tarde!')
      }
    }
  }

  async function handleDeleteAppointment(id_appointment) {
    try {
      const response = await api.delete(`/appointments/${id_appointment}`)

      if (response.data?.id_appointment) {
        handleLoadAppointments()
      }
    } catch (error) {
      if (error.response?.data.error) {
        Alert.alert(error.response.data.error)
      } else {
        Alert.alert('Ocorreu um erro. Tenta novamente mais tarde!')
      }
    }
  }

  useEffect(() => {
    handleLoadAppointments()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={appointments}
        keyExtractor={(id) => id.id_appointment}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Appointment
              id_appointment={item.id_appointment}
              doctor={item.doctor}
              service={item.service}
              specialty={item.specialty}
              bookingDate={item.booking_date}
              bookingHour={item.booking_hour}
              onPress={handleDeleteAppointment}
            />
          )
        }}
      />
    </SafeAreaView>
  )
}

export default Appointments
