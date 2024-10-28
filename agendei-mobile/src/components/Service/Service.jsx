import { SafeAreaView, Text, View } from 'react-native'
import styles from './styles'
import Button from '../Button/Button.jsx'

function Service(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.description}>{props.description}</Text>
        <Text style={styles.price}>
          {new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }).format(props.price)}
        </Text>
      </View>

      <View style={styles.button}>
        <Button text="Agendar" theme="primary" />
      </View>
    </SafeAreaView>
  )
}

export default Service
