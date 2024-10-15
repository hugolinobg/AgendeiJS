import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native'
import Login from './src/screens/Login/Login.jsx'
import Account from './src/screens/Account/Account.jsx'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Login />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 14 : 14,
  },
})
