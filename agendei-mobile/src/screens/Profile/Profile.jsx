import { SafeAreaView, Text, View } from 'react-native'
import styles from './styles'

function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Nome:</Text>
        <Text style={styles.text}>Hugolino B. Guimarães</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.date}>Data de Nascimento:</Text>
        <Text style={styles.text}>26/09/1993</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.fone}>Fone:</Text>
        <Text style={styles.text}>(18) 99696-5987</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.email}>E-mail:</Text>
        <Text style={styles.text}>hugolino@hbgsystem.com</Text>
      </View>
    </SafeAreaView>
  )
}

export default Profile
