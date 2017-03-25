/* @flow */

import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components/native';
import debounce from 'lodash.debounce';

import SearchInput from '../components/SearchInput';
import ListItem from '../components/ListItem';

type Props = {
  searchStore: Object;
}

const Container = styled.View`
  margin: 15;
`;

@inject('searchStore')
@observer
export default class MyHomeScreen extends Component {
  props: Props;
  @observable query='';

  static navigationOptions = {
    title: 'Spotify songs',
  }

  debounceInput = debounce((query) => { this.props.searchStore.getTrackList(query); }, 500);


  onTextInputChange = (value: string) => {
    this.query = value;
    this.debounceInput(value);
  }

  render() {
    return (
      <Container>
        <SearchInput
          value={this.query}
          onChangeText={(value) => { this.onTextInputChange(value); }}
          placeholder="Search..."
        />
        {this.props.searchStore.tracks && (
          <FlatList
            data={this.props.searchStore.tracks}
            keyExtractor={(_, i) => i}
            renderItem={({ item }) => (
              <ListItem
                imageUrl={item.album.images[0].url && item.album.images[0].url}
                songName={item.name}
              />
            )}
          />
        )}
      </Container>
    );
  }
}
