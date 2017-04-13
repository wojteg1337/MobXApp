
import { observable, autorun, action } from 'mobx';

export default class TickerStore {
  @observable value = 0;

  @action.bound increment() {
    this.value = this.value + 1;
  }

  @action.bound decrement() {
    this.value = this.value - 1;
  }

  disposer = autorun(() => console.log(this.value));  // eslint-disable-line
}
