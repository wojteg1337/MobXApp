
import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { observer, inject } from 'mobx-react';
import styled from 'styled-components/native';

import Button from '../components/Button';

import type { TickerStore } from '../types';

const Container = styled.View`
  margin: 15;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

type Props = {
  tickerStore: TickerStore;
};

@inject('tickerStore')
@observer
export default class Ticker extends Component {
  props: Props;

  render() {
    const { tickerStore } = this.props;
    return (
      <Container>
        <View>
          <Button onPress={tickerStore.increment}>increment</Button>
          <Button onPress={tickerStore.decrement}>decrement</Button>
        </View>
        <Text>{`Ticker value: ${tickerStore.value}`}</Text>
      </Container>
    );
  }
}
