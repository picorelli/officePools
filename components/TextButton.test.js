import React from 'react'
import renderer from 'react-test-renderer'
import TextButton from './TextButton'

it('should change the text value', () => {
  const label = 'Hello World!'
  const component = renderer.create(<TextButton label={label} />)

  expect(component.props.label).toEqual(label)
})
