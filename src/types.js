/* flow */

export type SearchStore = {
  query: ?string;
  tracks: Array<Object>;
};

export type TickerStore = {
  value: number;
  increment: Function;
  decrement: Function;
};
