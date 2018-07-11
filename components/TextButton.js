import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'

const TextButton = ({ label, onPress, style }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={style}>{label}</Text>
  </TouchableOpacity>
)

TextButton.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  style: PropTypes.object,
}

export default TextButton
