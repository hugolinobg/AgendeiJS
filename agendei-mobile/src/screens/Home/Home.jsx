import { FlatList, SafeAreaView, Text, Alert } from 'react-native'
import { useEffect, useState } from 'react'
import styles from './styles'

import Doctor from '../../components/Doctor/Doctor.jsx'

import api from '../../constants/api/api.js'

function Home(props) {
  const [doctors, SetDoctors] = useState([])

  function handleDoctor(id_doctor, name, specialty, icon) {
    props.navigation.navigate('Services', {
      id_doctor,
      name,
      specialty,
      icon,
    })
  }

  async function handlesLoadDoctors() {
     try {
      const response = await api.get('/doctors')

      if (response.data) {
        SetDoctors(response.data)
      }
    } catch (error) {
      if (error.response?.data.error) {
        Alert.alert(error.response.data.error)
      } else {
        Alert.alert('Ocorreu um erro. Tenta novamente mais tarde!')
      }
    }
  }

  useEffect(() => {
    handlesLoadDoctors()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Agende os seus serviços médicos</Text>

      <FlatList
        data={doctors}
        keyExtractor={(doc) => doc.id_doctor}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Doctor
              id_doctor={item.id_doctor}
              name={item.name}
              icon={item.icon}
              specialty={item.specialty}
              onPress={handleDoctor}
            />
          )
        }}
      />
    </SafeAreaView>
  )
}

export default Home
