import React from 'react'
import { StatusBar, View, Text } from 'react-native'

import TextField from '../../components/TextField'
import PrimaryButton from '../../components/PrimaryButton'

import Background from './components/Background'
import SectionFooter from './components/SectionFooter'
import SectionLinks from './components/SectionLinks'
import SectionLogo from './components/SectionLogo'

import { alertMessage } from '../../actions'

import { colors, fonts, padding } from '../../styles/base'

const SignIn = () => (
  <View
    style={{
      flex: 1,
    }}
  >
    <StatusBar hidden />
    <SectionLogo />
    <Background>
      <Text
        style={{
          color: colors.secondary,
          fontSize: fonts.xl,
          fontWeight: '700',
          textAlign: 'center',
          paddingTop: 150,
          paddingBottom: padding.xl,
        }}
      >
        {'SIGN IN'}
      </Text>
      <TextField label="Username" />
      <TextField label="Password" secureTextEntry />
      <SectionLinks />
      <PrimaryButton label="Sign In" onPress={() => alertMessage()} />
    </Background>
    <SectionFooter />
  </View>
)

export default SignIn
