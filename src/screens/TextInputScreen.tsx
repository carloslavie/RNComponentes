/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {useForm} from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';
import { Text } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const TextInputScreen = () => {
  const {onChange, form, isSuscribed} = useForm({
    name: '',
    email: '',
    phone: '',
    isSuscribed: false,
  });
  const {theme:{colors, dividerColor}} = useContext(ThemeContext)
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      // style={styles.container}
    >
      <ScrollView>
        <View style={styles.globalMargin}>
          <HeaderTitle title="Text Inputs" />

          <TextInput
            style={{...stylesScreen.inputStyles, borderColor: colors.border, color:colors.text}}
            placeholder="Ingrese su nombre"
            autoCorrect={false}
            autoCapitalize="words"
            onChangeText={value => onChange(value, 'name')}
            placeholderTextColor={dividerColor}
          />
          <TextInput
            style={{...stylesScreen.inputStyles, borderColor: colors.border, color:colors.text}}
            placeholder="Ingrese su email"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={value => onChange(value, 'email')}
            keyboardType="email-address"
            placeholderTextColor={dividerColor}
          />
          <View style={stylesScreen.switchRows}>
            <Text style={stylesScreen.switchText}>Suscribirse</Text>
            <CustomSwitch
              isOn={isSuscribed}
              onChange={value => onChange(value, 'isSuscribed')}
            />
          </View>
          <HeaderTitle title={JSON.stringify(form, null, 5)} />
          <HeaderTitle title={JSON.stringify(form, null, 5)} />
          <TextInput
            style={{...stylesScreen.inputStyles, borderColor: colors.border, color:colors.text}}
            placeholder="Ingrese su teléfono"
            onChangeText={value => onChange(value, 'phone')}
            keyboardType="phone-pad"
            placeholderTextColor={dividerColor}
          />
          <View style={{height: 100}} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
  inputStyles: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  switchRows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
  },
});
