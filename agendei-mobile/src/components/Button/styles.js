import { StyleSheet } from 'react-native'
import { colorsTheme, fontSizes } from '../../constants/Theme/Theme.js'

export default StyleSheet.create({
  containerBtn: {
    width: '100%',

    padding: 12,
    borderRadius: 10,
  },

  primary: {
    backgroundColor: colorsTheme.blue,
  },

  danger: {
    backgroundColor: colorsTheme.red,
  },

  text: {
    color: colorsTheme.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
