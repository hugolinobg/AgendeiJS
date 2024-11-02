import { SafeAreaView, Text, View, Alert } from 'react-native'
import { useEffect, useState } from 'react'
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
  const [time, setTime] = useState([])

  async function handleBooking() {
    try {
      const response = await api.post('/appointments', {
        id_doctor,
        id_service,
        booking_date: selectedDate,
        booking_hour: selectedHour,
      })

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

  async function schedule() {
    try {
      const response = await api.get('/schedules')

      if (response.data) {
        setTime(response.data)
      }
    } catch (error) {
      if (error.response?.data.error) {
        Alert.alert(error.response.data.error)
      } else {
        Alert.alert('Ocorreu um erro. Tenta novamente mais tarde!')
      }
    }
  }

  useEffect(() => {
    schedule()
  }, [])

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
            {time.map((item) => {
              return (
                <Picker.Item
                  itemIndex={item.id_schedule}
                  label={item.time}
                  value={item.time}
                />
              )
            })}
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
