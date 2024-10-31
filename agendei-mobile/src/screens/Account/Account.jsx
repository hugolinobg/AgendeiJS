import {
  SafeAreaView,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { useState } from 'react'
import { TextInputMask } from 'react-native-masked-text'
import styles from './styles.js'

import Button from '../../components/Button/Button.jsx'
import icon from '../../constants/icons/icons.js'
import { colorsTheme } from '../../constants/theme/theme.js'

function Account(props) {
  const [name, setName] = useState('')
  const [dateBirth, setDateBirth] = useState('')
  const [cell, setCell] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleRegister() {
    try {
      const response = await api.post('/users/register', {
        name,
        dateBirth,
        cell,
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
            placeholder="Nome"
            placeholderTextColor={colorsTheme.gray2}
            style={styles.input}
            onChangeText={(text) => setName(text)}
          />
        </View>

        <View style={styles.containerInput}>
          <TextInputMask
            placeholder="Data de Nascimento"
            placeholderTextColor={colorsTheme.gray2}
            style={styles.input}
            type={'datetime'}
            options={{
              format: 'MM/DD/YYYY',
            }}
            value={dateBirth}
            onChange={(text) => setDateBirth(text)}
          />
        </View>

        <View style={styles.containerInput}>
          <TextInputMask
            placeholder="Contato"
            placeholderTextColor={colorsTheme.gray2}
            style={styles.input}
            type={'cel-phone'}
            options={{
              maskType: 'BRL',
              withDDD: true,
              withDDD: '(99) ',
            }}
            value={cell}
            onChangeText={(text) => setCell(text)}
          />
        </View>

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

        <Button text="Criar Conta" theme="primary" onPress={handleRegister} />
      </View>

      <View style={styles.signUp}>
        <Text style={styles.text}>Já tenho conta. </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.textBtn}>Fazer login.</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Account
