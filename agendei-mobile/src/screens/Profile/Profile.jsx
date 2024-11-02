import { SafeAreaView, Text, View, Alert } from 'react-native'
import styles from './styles'

import Button from '../../components/Button/Button.jsx'

import api from '../../constants/api/api'
import { useContext, useEffect, useState } from 'react'

import { AuthContext } from '../../contexts/AuthContext.js'

function Profile() {
  const { setUser } = useContext(AuthContext)
  const [name, setName] = useState('')
  const [dateBirth, setdateBirth] = useState('')
  const [cell, setCell] = useState('')
  const [email, setEmail] = useState('')

  async function handleLoadProfile() {
    try {
      const response = await api.get('/users/profile')

      if (response.data?.name) {
        setName(response.data.name)
        setdateBirth(response.data.date_birth)
        setCell(response.data.cell)
        setEmail(response.data.email)
      }
    } catch (error) {
      if (error.response?.data.error) {
        Alert.alert(error.response.data.error)
      } else {
        Alert.alert('Ocorreu um erro. Tenta novamente mais tarde!')
      }
    }
  }

  function handleLogout() {
    api.defaults.headers.common['Authorization'] = ''
    setUser({})
  }

  useEffect(() => {
    handleLoadProfile()
  })

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.card}>
          <Text style={styles.title}>Nome:</Text>
          <Text style={styles.text}>{name}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.date}>Data de Nascimento:</Text>
          <Text style={styles.text}>{dateBirth}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.fone}>Fone:</Text>
          <Text style={styles.text}>{cell}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.email}>E-mail:</Text>
          <Text style={styles.text}>{email}</Text>
        </View>
      </View>

      <View style={styles.button}>
        <View style={[styles.card, styles.buttonCard]}>
          <Button text="Desconectar" theme="danger" onPress={handleLogout} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Profile
