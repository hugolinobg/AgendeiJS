import { FlatList, SafeAreaView, Text } from 'react-native'
import styles from './styles'
import { doctors } from '../../constants/data/data.js'
import Doctor from '../../components/Doctor/Doctor.jsx'

function Home(props) {
  function handleDoctor(id_doctor, name, specialty, icon) {
    props.navigation.navigate('Services', {
      id_doctor,
      name,
      specialty,
      icon,
    })
  }

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
