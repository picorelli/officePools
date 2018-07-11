import React from 'react'
import { View, Text, Image } from 'react-native'
import TextButton from '../../../components/TextButton'
import { colors, fonts } from '../../../styles/base'

const SectionFooter = () => (
  <View
    style={{
      backgroundColor: colors.secondary,
      width: '100%',
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
      flexDirection: 'row',
      flexWrap: 'wrap',
    }}
  >
    <Image
      source={require('./Facebook.png')}
      style={{
        height: 15,
        width: 15,
      }}
    />
    <TextButton
      label="Connect with Facebook"
      style={{
        color: colors.ternary,
        fontWeight: '700',
        fontSize: fonts.md,
        marginLeft: 5,
        textAlign: 'center',
      }}
    />
  </View>
)

export default SectionFooter
