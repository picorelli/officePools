import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { colors, padding } from '../styles/base'

const PrimaryButton = props => (
  <TouchableOpacity
    {...props}
    style={{
      backgroundColor: colors.secondary,
      paddingVertical: padding.md,
    }}
  >
    <Text
      style={{
        color: colors.primary,
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
      }}
    >
      {props.label}
    </Text>
  </TouchableOpacity>
)

export default PrimaryButton
