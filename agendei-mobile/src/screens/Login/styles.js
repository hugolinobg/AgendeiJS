import { StyleSheet } from 'react-native'
import { colorsTheme, fontSizes } from '../../constants/theme/theme.js'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colorsTheme.white,
    padding: 40,
  },

  header: {
    alignItems: 'center',
  },

  img: {
    width: 200,
    height: 45,
  },

  forms: {
    alignItems: 'center',
  },

  containerInput: {
    width: '100%',
    marginBottom: 15,
  },

  input: {
    backgroundColor: colorsTheme.gray4,
    padding: 10,
    borderRadius: 10,
    fontSize: fontSizes.md,
  },

  signUp: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: fontSizes.sm,
    color: colorsTheme.gray2,
  },

  textBtn: {
    fontSize: fontSizes.sm,
    color: colorsTheme.blue,
  },
})
