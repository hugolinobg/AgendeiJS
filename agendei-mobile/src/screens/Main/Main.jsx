import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Home/Home.jsx'
import Appointments from '../Appointments/Appointments.jsx'
import Profile from '../Profile/Profile.jsx'
import icon from '../../constants/icons/icons.js'
import { colorsTheme } from '../../constants/theme/theme.js'

const Tab = createBottomTabNavigator()

function Main() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerTitleAlign: 'center',
            headerTitle: () => {
              return (
                <Image source={icon.logo} style={{ width: 125, height: 30 }} />
              )
            },
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={icon.home}
                  style={{
                    width: 30,
                    height: 30,
                    opacity: focused ? 1 : 0.3,
                  }}
                />
              )
            },
          }}
        />

        <Tab.Screen
          name="Calendar"
          component={Appointments}
          options={{
            headerTitleAlign: 'center',
            headerTitle: () => {
              return (
                <Image source={icon.logo} style={{ width: 125, height: 30 }} />
              )
            },
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={icon.calendar}
                  style={{
                    width: 30,
                    height: 30,
                    opacity: focused ? 1 : 0.3,
                  }}
                />
              )
            },
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerTitleAlign: 'center',
            headerTitle: () => {
              return (
                <Image source={icon.logo} style={{ width: 125, height: 30 }} />
              )
            },
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={icon.profile}
                  style={{
                    width: 30,
                    height: 30,
                    opacity: focused ? 1 : 0.3,
                  }}
                />
              )
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Main
