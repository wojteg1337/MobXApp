/* @flow */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import Stack from './router';

import { Provider } from 'mobx-react';                           // eslint-disable-line
import stores from './stores';

export default class MobXApp extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Stack />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('MobXApp', () => MobXApp);
