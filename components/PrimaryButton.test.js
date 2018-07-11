import React from 'react'
import renderer from 'react-test-renderer'
import PrimaryButton from './PrimaryButton'

it('renders without crashing', () => {
  const rendered = renderer.create(<PrimaryButton />).toJSON()

  expect(rendered).toBeTruthy()
})

it('renders correctly', () => {
  const tree = renderer.create(<PrimaryButton />).toJSON()

  expect(tree).toMatchSnapshot()
})
