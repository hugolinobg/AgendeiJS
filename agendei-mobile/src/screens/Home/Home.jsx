import { FlatList, SafeAreaView, Text } from 'react-native'
import styles from './styles'
import doctors from '../../constants/data/data.js'

function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Agende os seus serviços médicos</Text>

      <FlatList
        data={doctors}
        keyExtractor={(doc) => doc.id_doctor}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>
        }}
      />
    </SafeAreaView>
  )
}

export default Home
