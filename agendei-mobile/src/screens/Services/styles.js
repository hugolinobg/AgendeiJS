import { StyleSheet } from 'react-native'
import { colorsTheme, fontSizes } from '../../constants/theme/theme.js'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsTheme.white,
  },

  banner: {
    backgroundColor: colorsTheme.blue,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 25,
  },

  name: {
    fontSize: fontSizes.md,
    color: colorsTheme.white,
    fontWeight: 'bold',
    marginTop: 5,
  },

  specialty: {
    fontSize: fontSizes.sm,
    color: colorsTheme.white,
    marginTop: 3,
  },
})
