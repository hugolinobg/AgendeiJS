import { StyleSheet } from 'react-native'
import { colorsTheme, fontSizes } from '../../constants/theme/theme.js'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: colorsTheme.white,
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  theme: {
    todayTextColor: colorsTheme.red,
    selectedDayBackgroundColor: colorsTheme.blue,
    selectedDayTextColor: colorsTheme.white,
    arrowColor: colorsTheme.blue,
  },

  textHour: {
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    color: colorsTheme.gray1,
    marginTop: 20,
  },
})
