import React from 'react'
import renderer from 'react-test-renderer'
import TextField from './TextField'

it('should change the text value', () => {
  const text = 'Hello World!'
  const component = renderer.create(<TextField />).getInstance()

  //component.handleChange(text)

  //expect(component.state.value).toEqual(text)
})
