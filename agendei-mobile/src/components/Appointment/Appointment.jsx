import { SafeAreaView, Text } from 'react-native'
import styles from './styles'

function Appointment(props) {
  return (
    <SafeAreaView>
      <Text>
        {props.service} - {props.name}
      </Text>
      <Text>{props.specialty}</Text>
    </SafeAreaView>
  )
}

export default Appointment
