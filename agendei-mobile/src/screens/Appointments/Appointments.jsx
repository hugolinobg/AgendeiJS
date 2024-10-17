import { FlatList, SafeAreaView, Text } from 'react-native'
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
          return (<Appointment 
    
          />)
        }}
      />
    </SafeAreaView>
  )
}

export default Appointments