import React from 'react'
import { View, Text } from 'react-native'
import TextButton from '../../../components/TextButton'
import { colors, padding } from '../../../styles/base'

const styles = {
  text: {
    color: colors.secondary,
    fontWeight: '700',
  },
}

const SectionLinks = () => (
  <View
    style={{
      borderColor: 'red',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: padding.md,
      width: '100%',
    }}
  >
    <TextButton style={styles.text} label="Create Account" />
    <TextButton style={styles.text} label="Forgot your password?" />
  </View>
)

export default SectionLinks
