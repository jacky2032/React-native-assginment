import {
  createAppContainer
} from 'react-navigation';

import {
  createStackNavigator
} from 'react-navigation-stack';
import HomeScreen from './HomeScreen.js';
import DetailScreen from './DetailScreen.js'
import MoreScreen from './MoreScreen.js'
const RootStack = createStackNavigator({
  Home:{
      screen:HomeScreen,
      navigationOptions:{
        headerShown:null
      }
  },
  Detail:{
    screen: DetailScreen

  },
  More:MoreScreen
},
{
  initialRouteKey:'Home',
})

const AppContainer = createAppContainer(RootStack);
export default AppContainer