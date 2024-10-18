import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import icon from '../../constants/icons/icons'
import Button from '../Button/Button.jsx'

function Appointment(props) {
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
            <Text style={styles.text}>{props.date}</Text>
          </View>

          <View style={styles.bookingHour}>
            <Image source={icon.clock} style={styles.img} />
            <Text style={styles.text}>
              {props.hour}
              {/* .toLocaleDateString('pt-BR', {
                timeZone: 'UTC',
              }) */}
            </Text>
          </View>
        </View>

        <View style={styles.containerButton}>
          <Button text="Cancelar Reserva" theme="danger" />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Appointment
