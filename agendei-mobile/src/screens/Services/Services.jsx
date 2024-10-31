import { FlatList, Image, SafeAreaView, Text, View, Alert } from 'react-native'
import { useEffect, useState } from 'react'
import styles from './styles'

import Service from '../../components/Service/Service.jsx'
import icon from '../../constants/icons/icons.js'

import api from '../../constants/api/api.js'

function Services(props) {
  const id_doctor = props.route.params.id_doctor
  const name = props.route.params.name
  const specialty = props.route.params.specialty
  const iconDoctor = props.route.params.icon

  const [doctorsServices, setDoctorsServices] = useState([])

  function handleServices(id_service) {
    props.navigation.navigate('Schedule', {
      id_doctor,
      id_service,
    })
  }

  async function handleLoadServices() {
    try {
      const response = await api.get(`/doctors/${id_doctor}/services`)

      if (response.data) {
        setDoctorsServices(response.data)
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
    handleLoadServices()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.banner}>
        <Image source={iconDoctor === 'M' ? icon.male : icon.female} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.specialty}>{specialty}</Text>
      </View>

      <FlatList
        data={doctorsServices}
        keyExtractor={(serv) => serv.id_service}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Service
              id_service={item.id_service}
              description={item.description}
              price={item.price}
              onPress={handleServices}
            />
          )
        }}
      />
    </SafeAreaView>
  )
}

export default Services
