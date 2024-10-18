import { StyleSheet } from 'react-native'
import { colorsTheme, fontSizes } from '../../constants/Theme/Theme.js'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsTheme.white,
    // justifyContent: 'space-between',
  },

  banner: {
    backgroundColor: colorsTheme.blue,
  },

  text: {
    fontSize: fontSizes.sm,
    color: colorsTheme.gray1,
    marginBottom: 15,
    marginLeft: 10,
  },
})
