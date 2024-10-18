import { TouchableOpacity, Text, Alert } from 'react-native'
import styles from './styles.js'

function Button(props) {
  function click() {
    Alert.alert('clicou')
  }
  return (
    <TouchableOpacity
      style={[
        styles.containerBtn,
        props.theme === 'danger' ? styles.danger : styles.primary,
      ]}
      onPress={click}
    >
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  )
}

export default Button
