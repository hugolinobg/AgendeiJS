import { StyleSheet } from 'react-native'
import { colorsTheme, fontSizes } from '../../constants/Theme/Theme.js'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: colorsTheme.white,
    // justifyContent: 'space-between',
  },
  text: {
    fontSize: fontSizes.sm,
    color: colorsTheme.gray1,
    marginBottom: 15,
    marginLeft: 10,
  },
})
