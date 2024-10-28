import { StyleSheet } from 'react-native'
import { colorsTheme, fontSizes } from '../../constants/theme/theme.js'
import icon from '../../constants/icons/icons.js'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    backgroundColor: colorsTheme.white,
    alignItems: 'center',
    // backgroundColor: 'beige',
    borderWidth: 1,
    borderColor: colorsTheme.gray3,
    marginTop: 4,
    marginBottom: 4,
    borderRadius: 8,
  },

  icon: {
    width: 50,
    height: 50,
    marginRight: 8,
  },

  group: {},

  name: {
    fontSize: fontSizes.md,
    color: colorsTheme.black,
    marginTop: 6,
  },

  specialty: {
    fontSize: fontSizes.sm,
    color: colorsTheme.gray2,
  },
})
