import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles'

function Doctor(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={props.icon} style={styles.icon}/>
      <View style={styles.group}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.specialty}>{props.specialty}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Doctor
