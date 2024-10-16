import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native'
import Login from './src/screens/Login/Login.jsx'
import Account from './src/screens/Account/Account.jsx'
import Home from './src/screens/Home/Home.jsx'
import Appointments from './src/screens/Appointments/Appointments.jsx'
import Profele from './src/screens/Profile/Profile.jsx'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 12 : 12,
  },
})
