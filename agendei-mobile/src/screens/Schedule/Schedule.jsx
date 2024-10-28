import { SafeAreaView, Text, View } from 'react-native'
import { useState } from 'react'
import { Calendar, LocaleConfig } from 'react-native-calendars'
import { Picker } from '@react-native-picker/picker'
import styles from './styles'

import Button from '../../components/Button/Button.jsx'

import { ptBR } from '../../constants/calendar/calendar.js'

LocaleConfig.locales['pt-br'] = ptBR
LocaleConfig.defaultLocale = 'pt-br'

function Schedule() {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().slice(0, 10)
  )
  const [selectedHour, setSelectedHour] = useState('')

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
        <Button text="Confirmar Reserva" theme="primary" />
      </View>
    </SafeAreaView>
  )
}

export default Schedule
