import { StyleSheet } from 'react-native'
import { colorsTheme, fontSizes } from '../../constants/Theme/Theme.js'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: colorsTheme.white,
    // justifyContent: 'space-between',
  },
  text: {
    fontSize: fontSizes.sm,
    color: colorsTheme.gray1,
    marginTop: 15,
    marginLeft: 10,
  },
})
