import React, { Component } from 'react'
import { Image, View } from 'react-native'

import { padding } from '../../../styles/base'

class SectionLogo extends Component {
  render() {
    const { children } = this.props

    return (
      <View
        style={{
          height: '20%',
          justifyContent: 'center',
          alignItems: 'center',
          padding: padding.xl,
        }}
      >
        <Image
          source={require('./Logo.png')}
          style={{
            width: '100%',
          }}
          resizeMode="contain"
        />
      </View>
    )
  }
}

export default SectionLogo
