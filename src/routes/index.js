import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from '../pages/Home'
import Main from '../pages/Main'

const Router = createStackNavigator({
  Home,
  Main
})

export default createAppContainer(Router)