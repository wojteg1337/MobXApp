import { StackNavigator } from 'react-navigation';

import Home from './containers/Home';

const stackNavigatorConfig = {
  initialRouteName: 'Home',
};

export default StackNavigator({
  Home: {
    screen: Home,
  },
}, stackNavigatorConfig);
