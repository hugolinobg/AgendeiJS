import { StyleSheet } from 'react-native'
import { colorsTheme, fontSizes } from '../../constants/theme/theme.js'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: colorsTheme.gray4,
    backgroundColor: colorsTheme.white,
  },

  text: {
    flex: 1,
  },

  button: {
    marginTop: 5,
  },

  description: {
    fontSize: fontSizes.md,
    color: colorsTheme.gray2,
    marginTop: 5,
  },

  price: {
    fontSize: fontSizes.sm,
    color: colorsTheme.blue,
  },
  marginTop: 3,
})
