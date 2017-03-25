/* @flow */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Provider } from 'mobx-react';

import Stack from './router';

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
