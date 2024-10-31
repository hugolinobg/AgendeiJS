import { SafeAreaView, Text, View, Alert } from 'react-native'
import { useState } from 'react'
import { Calendar, LocaleConfig } from 'react-native-calendars'
import { Picker } from '@react-native-picker/picker'
import styles from './styles'

import Button from '../../components/Button/Button.jsx'

import { ptBR } from '../../constants/calendar/calendar.js'

import api from '../../constants/api/api.js'

LocaleConfig.locales['pt-br'] = ptBR
LocaleConfig.defaultLocale = 'pt-br'

function Schedule(props) {
  const id_doctor = props.route.params.id_doctor
  const id_service = props.route.params.id_service

  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().slice(0, 10)
  )
  const [selectedHour, setSelectedHour] = useState('')

  async function handleBooking() {
    try {
      const response = await api.post('/appointments', {
        id_doctor: id_doctor,
        id_service: id_service,
        booking_date: selectedDate,
        booking_hour: selectedHour,
      })

      console.log(response.data)

      if (response.data?.id_appointment) {
        props.navigation.popToTop()
      }
    } catch (error) {
      if (error.response?.data.error) {
        Alert.alert(error.response.data.error)
      } else {
        Alert.alert('Ocorreu um erro. Tenta novamente mais tarde!')
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Calendar
          theme={styles.theme}
          onDayPress={(day) => {
            setSelectedDate(day.dateString)
          }}
          markedDates={{
            [selectedDate]: { selected: true },
          }}
          minDate={new Date().toDateString()}
        />

        <View>
          <Text style={styles.textHour}>Horário</Text>
        </View>

        <View>
          <Picker
            selectedValue={selectedHour}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedHour(itemValue)
            }}
          >
            <Picker.Item label="09:00" value="09:00" />
            <Picker.Item label="09:30" value="09:30" />
            <Picker.Item label="10:00" value="10:00" />
          </Picker>
        </View>
      </View>

      <View>
        <Button
          text="Confirmar Reserva"
          theme="primary"
          onPress={handleBooking}
        />
      </View>
    </SafeAreaView>
  )
}

export default Schedule
