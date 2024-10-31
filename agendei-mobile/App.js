import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes/routes.js'

import { AuthProvider } from './src/contexts/AuthContext.js'

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}
