/* @flow */

import axios from 'axios';
import { observable } from 'mobx';
import { Alert } from 'react-native';

const API_URL = 'https://api.spotify.com/v1/search';

export default class SearchStore {
  @observable query = '';
  @observable tracks = [];

  get query() {
    return this.query;
  }

  set query(artist) {
    this.query = artist;
  }

  get tracks() {
    return this.tracks;
  }

  set tracks(result) {
    this.tracks = result;
  }

  async getTrackList(query: string) {
    if (!query) {
      this.tracks = [];
      return;
    }
    try {
      const requestURL = `${API_URL}?q=${query}&type=track&limit=10`;
      const response = await axios.get(requestURL);
      this.tracks = response.data.tracks.items;
    } catch (e) {
      Alert.alert('Connection error', 'Couldn\'t fetch the data.');
    }
  }
}
