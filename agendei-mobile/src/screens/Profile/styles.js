import { StyleSheet } from 'react-native'
import { colorsTheme, fontSizes } from '../../constants/theme/theme.js'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsTheme.white,
    justifyContent: 'space-between',
  },

  card: {
    padding: 15,
    borderWidth: 0.5,
    borderColor: colorsTheme.gray3,
  },

  title: {
    fontSize: fontSizes.sm,
    color: colorsTheme.gray2,
    marginBottom: 4,
  },

  date: {
    fontSize: fontSizes.sm,
    color: colorsTheme.gray2,
    marginBottom: 4,
  },

  fone: {
    fontSize: fontSizes.sm,
    color: colorsTheme.gray2,
    marginBottom: 4,
  },

  email: {
    fontSize: fontSizes.sm,
    color: colorsTheme.gray2,
    marginBottom: 4,
  },

  text: {
    fontSize: fontSizes.md,
    color: colorsTheme.black,
  },

  button: {
    marginBottom: 50,
  },

  buttonCard: {
    borderWidth: 0,
  },
})
