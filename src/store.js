import Vue from 'vue';
import Vuex from 'vuex';

import productsModule from './store/product';
import cartsModule from './store/cart';
import backstageModule from './store/backstage';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: false,
    category: 'all',
    title: '所有商品',
    messages: [],
  },
  mutations: {
    /* eslint-disable no-param-reassign */
    LOADING(state, payload) {
      state.isLoading = payload;
    },
    TITLE(state, payload) {
      state.title = payload;
    },
    CATEGORY(state, payload) {
      state.category = payload;
    },
    UPDATAMESSAGES(state, payload) {
      state.messages.push({
        message: payload.message,
        status: payload.status,
        timestamp: payload.timestamp,
      });
    },
    REMOVEMESSAGES(state, payload) {
      state.messages.splice(payload, 1);
    },
    REMOVEMESSAGESWITEHTIMING(state, payload) {
      state.messages.forEach((item, i) => {
        if (item.timestamp === payload) {
          state.messages.splice(i, 1);
        }
      });
    },
    /* eslint-disable no-param-reassign */
  },
  actions: {
    updateLoading(context, payload) {
      context.commit('LOADING', payload);
    },
    assort(context, name) {
      context.commit('CATEGORY', name);
      if (name === 'hot') {
        context.commit('TITLE', '熱門商品');
      } else if (name === 'all') {
        context.commit('TITLE', '所有商品');
      } else if (name === 'bsize') {
        context.commit('TITLE', '大型多肉');
      } else if (name === 'ssize') {
        context.commit('TITLE', '多肉植物');
      } else {
        context.commit('TITLE', '多肉盆栽');
      }
    },
    updateMessage(context, { message, status }) {
      const timestamp = Math.floor(new Date() / 1000);
      context.commit('UPDATAMESSAGES', { timestamp, message, status });
      context.dispatch('removeMessageWithTiming', timestamp);
    },
    removeMessages(context, num) {
      context.commit('REMOVEMESSAGES', num);
    },
    removeMessageWithTiming(context, timestamp) {
      setTimeout(() => {
        context.commit('REMOVEMESSAGESWITEHTIMING', timestamp);
      }, 3000);
    },
  },
  getters: {
    isLoading: state => state.isLoading,
    title: state => state.title,
    category: state => state.category,
    messages: state => state.messages,
  },
  modules: {
    productsModule,
    cartsModule,
    backstageModule,
  },
});
