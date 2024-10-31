import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Main from '../screens/Main/Main.jsx'
import Services from '../screens/Services/Services.jsx'
import Schedule from '../screens/Schedule/Schedule.jsx'

import { colorsTheme } from '../constants/theme/theme.js'

const Stack = createNativeStackNavigator()

function RoutesPrivate() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Services"
        component={Services}
        options={{
          headerTitle: 'Serviços',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerTintColor: colorsTheme.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: colorsTheme.blue,
          },
        }}
      />
      <Stack.Screen
        name="Schedule"
        component={Schedule}
        options={{
          headerTitle: 'Fazer Reserva',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerTintColor: colorsTheme.blue,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: colorsTheme.white,
          },
        }}
      />
    </Stack.Navigator>
  )
}

export default RoutesPrivate
