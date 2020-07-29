import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import AccountScreen from './src/screens/AccountScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import { Provider as AuthProvider } from './src/contexts/AuthContext';
import { Provider as LocationProvider } from './src/contexts/LocationContext';
import { Provider as TrackProvider } from './src/contexts/TrackContext';
import { setNavigator } from './src/navigatorRef';
import AuthResolveScreen from './src/screens/AuthResolveScreen';
 
const switchNavigator = createSwitchNavigator({
  authResolve: AuthResolveScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),

  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }),

    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })
}, {
  defaultRouteName: 'authResolve'
});

const App = createAppContainer(switchNavigator);

export default () => {
  return <TrackProvider>
    <LocationProvider>
      <AuthProvider>
      <App ref={(navigator) => setNavigator(navigator)}/>
      </AuthProvider>
    </LocationProvider>
  </TrackProvider>
}