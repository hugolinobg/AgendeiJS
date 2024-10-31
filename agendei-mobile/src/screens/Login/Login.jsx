import {
  SafeAreaView,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native'
import { useState } from 'react'

import styles from './styles.js'

import Button from '../../components/Button/Button.jsx'
import icon from '../../constants/icons/icons.js'
import { colorsTheme } from '../../constants/theme/theme.js'
import api from '../../constants/api/api.js'

function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin() {
    try {
      const response = await api.post('/users/login', {
        email,
        password,
      })

      if (response.data) {
        console.log(response.data)
      }
    } catch (error) {
      if (error.response?.data.error) {
        Alert.alert(error.response.data.error)
      } else {
        Alert.alert('Ocorreu um erro. Tenta novamente mais tarde!')
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={icon.logo} style={styles.img} />
      </View>

      <View style={styles.forms}>
        <View style={styles.containerInput}>
          <TextInput
            placeholder="E-mail"
            placeholderTextColor={colorsTheme.gray2}
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.containerInput}>
          <TextInput
            placeholder="Password"
            placeholderTextColor={colorsTheme.gray2}
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <Button text="Acessar" theme="primary" onPress={handleLogin} />
      </View>

      <View style={styles.signUp}>
        <Text style={styles.text}>Não tenho conta. </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Account')}>
          <Text style={styles.textBtn}>Criar conta agora.</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Login
