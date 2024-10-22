import {
  SafeAreaView,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import styles from './styles.js'

import Button from '../../components/Button/Button.jsx'
import icon from '../../constants/icons/icons.js'
import { colorsTheme } from '../../constants/theme/theme.js'

function Account() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={icon.logo} style={styles.img} />
      </View>

      <View style={styles.forms}>
        <View style={styles.containerInput}>
          <TextInput
            placeholder="Nome"
            placeholderTextColor={colorsTheme.gray2}
            style={styles.input}
          />
        </View>

        <View style={styles.containerInput}>
          <TextInput
            placeholder="Data de Nascimento"
            placeholderTextColor={colorsTheme.gray2}
            style={styles.input}
          />
        </View>

        <View style={styles.containerInput}>
          <TextInput
            placeholder="Contato"
            placeholderTextColor={colorsTheme.gray2}
            style={styles.input}
          />
        </View>

        <View style={styles.containerInput}>
          <TextInput
            placeholder="E-mail"
            placeholderTextColor={colorsTheme.gray2}
            style={styles.input}
          />
        </View>

        <View style={styles.containerInput}>
          <TextInput
            placeholder="Password"
            placeholderTextColor={colorsTheme.gray2}
            style={styles.input}
            secureTextEntry={true}
          />
        </View>

        <Button text="Criar Conta" theme="primary" />
      </View>

      <View style={styles.signUp}>
        <Text style={styles.text}>Já tenho conta. </Text>
        <TouchableOpacity>
          <Text style={styles.textBtn}>Fazer login.</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Account
