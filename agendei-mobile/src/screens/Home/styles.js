import { StyleSheet } from 'react-native'
import { colorsTheme, fontSizes } from '../../constants/theme/theme.js'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: colorsTheme.white,
  },

  text: {
    fontSize: fontSizes.sm,
    color: colorsTheme.gray1,
    marginBottom: 15,
    marginLeft: 10,
  },
})
