import { FlatList, Image, SafeAreaView, Text, View } from 'react-native'
import styles from './styles'
import { doctors_services } from '../../constants/data/data.js'
import icon from '../../constants/icons/icons.js'

function Services() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.banner}>
        <Image source={icon.female} />
        <Text style={styles.name}>Hugo</Text>
        <Text style={styles.specialty}>Pediatria</Text>
      </View>

      <FlatList
        data={doctors_services}
        keyExtractor={(serv) => serv.id_service}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Text>{item.description}</Text>
            // <Doctor
            //   name={item.name}
            //   icon={item.icon === 'M' ? icon.male : icon.female}
            //   specialty={item.specialty}
            // />
          )
        }}
      />
    </SafeAreaView>
  )
}

export default Services
