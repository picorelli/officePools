import React, { Component } from 'react'
import SignIn from './screens/SignIn'
import { ScreenOrientation } from 'expo'

class App extends Component {
  componentDidMount() {
    ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT)
  }

  render() {
    return <SignIn />
  }
}
export default App
