import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles'
import icon from '../../constants/icons/icons.js'

function Doctor(props) {
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          props.onPress(
            props.id_doctor,
            props.name,
            props.specialty,
            props.icon
          )
        }
      >
        <Image
          source={props.icon === 'M' ? icon.male : icon.female}
          style={styles.icon}
        />
        <View style={styles.group}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.specialty}>{props.specialty}</Text>
        </View>
      </TouchableOpacity>
    </>
  )
}

export default Doctor
