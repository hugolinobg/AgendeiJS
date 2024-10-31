import { FlatList, Image, SafeAreaView, Text, View } from 'react-native'
import styles from './styles'
import { doctors_services } from '../../constants/data/data.js'
import Service from '../../components/Service/Service.jsx'
import icon from '../../constants/icons/icons.js'

function Services(props) {
  const id_doctor = props.route.params.id_doctor
  const name = props.route.params.name
  const specialty = props.route.params.specialty
  const iconDoctor = props.route.params.icon

  function handleServices(id_service) {
    props.navigation.navigate('Schedule', {
      id_service,
      id_doctor,
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.banner}>
        <Image source={iconDoctor === 'M' ? icon.male : icon.female} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.specialty}>{specialty}</Text>
      </View>

      <FlatList
        data={doctors_services}
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
