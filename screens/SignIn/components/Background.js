import React, { Component } from 'react'
import { ImageBackground, View } from 'react-native'
import { padding } from '../../../styles/base'

class Background extends Component {
  render() {
    const { children } = this.props

    return (
      <ImageBackground
        style={{
          width: '100%',
          height: '100%',
        }}
        source={require('./Background.png')}
      >
        <View
          style={{
            paddingLeft: padding.lg,
            paddingRight: padding.lg,
          }}
        >
          {children}
        </View>
      </ImageBackground>
    )
  }
}

export default Background
