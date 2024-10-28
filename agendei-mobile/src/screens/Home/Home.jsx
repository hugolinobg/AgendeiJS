import { FlatList, SafeAreaView, Text } from 'react-native'
import styles from './styles'
import { doctors } from '../../constants/data/data.js'
import Doctor from '../../components/Doctor/Doctor.jsx'
import icon from '../../constants/icons/icons.js'

function Home() {
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
              name={item.name}
              icon={item.icon === 'M' ? icon.male : icon.female}
              specialty={item.specialty}
            />
          )
        }}
      />
    </SafeAreaView>
  )
}

export default Home
