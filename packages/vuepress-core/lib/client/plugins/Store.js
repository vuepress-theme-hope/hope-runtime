import Vue from "vue";

export default class Store {
  constructor() {
    this.store = new Vue({
      data: function () {
        return {
          state: {},
        };
      },
    });
  }

  $get(key) {
    return this.store.state[key];
  }

  $set(key, value) {
    Vue.set(this.store.state, key, value);
  }

  $emit(...args) {
    this.store.$emit(...args);
  }

  $on(...args) {
    this.store.$on(...args);
  }
}
