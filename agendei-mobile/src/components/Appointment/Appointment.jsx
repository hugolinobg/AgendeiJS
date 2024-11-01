import { Image, SafeAreaView, Text, View } from 'react-native'
import styles from './styles'
import icon from '../../constants/icons/icons'
import Button from '../Button/Button.jsx'

function Appointment(props) {
  const dt = new Date(`${props.bookingDate}T${props.bookingHour}`)

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.doctor}>
        {props.service} - {props.doctor}
      </Text>
      <Text style={styles.specialty}>{props.specialty}</Text>

      <View style={styles.containerBooking}>
        <View style={styles.booking}>
          <View style={styles.bookingDate}>
            <Image source={icon.calendar} style={styles.img} />
            <Text style={styles.text}>{dt.toLocaleDateString()}</Text>
          </View>

          <View style={styles.bookingHour}>
            <Image source={icon.clock} style={styles.img} />
            <Text style={styles.text}>{props.bookingHour}h</Text>
          </View>
        </View>

        <View style={styles.containerButton}>
          <Button
            text="Cancelar Reserva"
            theme="danger"
            onPress={() => props.onPress(props.id_appointment)}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Appointment
