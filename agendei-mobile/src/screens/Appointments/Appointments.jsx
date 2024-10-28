import { FlatList, SafeAreaView } from 'react-native'
import styles from './styles'
import { appointments } from '../../constants/data/data.js'
import Appointment from '../../components/Appointment/Appointment.jsx'
import icon from '../../constants/icons/icons.js'

function Appointments() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={appointments}
        keyExtractor={(id) => id.id_appointment}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Appointment
              doctor={item.doctor}
              service={item.service}
              specialty={item.specialty}
              date={item.booking_date}
              hour={item.booking_hour}
            />
          )
        }}
      />
    </SafeAreaView>
  )
}

export default Appointments
