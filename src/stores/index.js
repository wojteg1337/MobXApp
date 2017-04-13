/* @flow */

import SearchStore from './searchStore';
import TickerStore from './tickerStore';

export default {
  searchStore: new SearchStore(),
  tickerStore: new TickerStore(),
  // place for other stores
};
