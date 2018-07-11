import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TextInput, Animated } from 'react-native'
import { colors, fonts } from '../styles/base'

class TextField extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isFocused: false,
      value: '',
    }
  }

  componentWillMount() {
    this._animatedIsFocused = new Animated.Value(this.state.value === '' ? 0 : 1)
  }

  handleFocus = () => this.setState({ isFocused: true })
  handleBlur = () => this.setState({ isFocused: false })
  handleChange = event => this.setState({ value: event.target.value })

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: this.state.isFocused || this.state.value !== '' ? 1 : 0,
      duration: 200,
    }).start()
  }

  render() {
    const { label, ...props } = this.props

    const { value } = this.state

    const labelStyle = {
      position: 'absolute',
      left: 0,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [18, 0],
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [16, fonts.md],
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [colors.secondary, colors.secondary],
      }),
    }
    return (
      <View
        style={{
          paddingTop: 18,
        }}
      >
        <Animated.Text style={labelStyle}>{label}</Animated.Text>
        <TextInput
          {...props}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          blurOnSubmit
          value={value}
          style={{
            color: colors.secondary,
            borderBottomWidth: 1,
            borderBottomColor: colors.secondary,
            marginBottom: 20,
            height: 26,
          }}
        />
      </View>
    )
  }
}

TextField.propTypes = {
  value: PropTypes.string,
}

export default TextField
