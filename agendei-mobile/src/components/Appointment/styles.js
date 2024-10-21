import { StyleSheet } from 'react-native'
import { colorsTheme, fontSizes } from '../../constants/theme/theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: colorsTheme.gray3,
    backgroundColor: colorsTheme.white,
    marginTop: 4,
    marginBottom: 4,
    borderRadius: 8,
    // justifyContent: 'space-between',
  },

  doctor: {
    fontSize: fontSizes.dm,
    color: colorsTheme.black,
    marginBottom: 5,
  },

  specialty: {
    fontSize: fontSizes.sm,
    color: colorsTheme.gray2,
    marginBottom: 10,
  },

  containerBooking: {
    flexDirection: 'row',
  },

  booking: {
    flex: 1,
  },

  bookingDate: { flexDirection: 'row' },

  bookingHour: { flexDirection: 'row' },

  img: { width: 25, height: 25, marginRight: 5 },

  text: { fontSize: fontSizes.sm, color: colorsTheme.gray2 },

  containerButton: { justifyContent: 'center' },
})
