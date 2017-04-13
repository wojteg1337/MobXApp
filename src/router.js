/* flow */

import { StackNavigator } from 'react-navigation';

import Home from './containers/Home';
import Ticker from './containers/Ticker';

const stackNavigatorConfig = {
  initialRouteName: 'Ticker',
};

export default StackNavigator({
  Home: {
    screen: Home,
  },
  Ticker: {
    screen: Ticker,
  },
}, stackNavigatorConfig);
