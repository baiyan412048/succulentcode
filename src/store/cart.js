import axios from 'axios';

export default ({
  strict: true,
  namespaced: true,
  state: {
    cartList: {
      carts: {},
    },
  },
  mutations: {
    /* eslint-disable no-param-reassign */
    CATRLIST(state, payload) {
      state.cartList = payload;
    },
    /* eslint-disable no-param-reassign */
  },
  actions: {
    getCart(context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/cart`;
      context.commit('LOADING', true, { root: true });
      axios.get(api).then((response) => {
        context.commit('CATRLIST', response.data.data);
        context.commit('LOADING', false, { root: true });
      });
    },
    removeCart(context, id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/cart/${id}`;
      context.commit('LOADING', true, { root: true });
      axios.delete(api).then(() => {
        context.commit('LOADING', false, { root: true });
        context.dispatch('updateMessage', { message: '已刪除購物車商品', status: 'danger' }, { root: true });
        context.dispatch('getCart');
      });
    },
    addtoCart(context, { id, qty }) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/cart`;
      context.commit('LOADING', true, { root: true });
      const cart = {
        product_id: id,
        qty,
      };
      context.commit('LOADING', true, { root: true });
      axios.post(api, {
        data: cart,
      }).then(() => {
        context.commit('LOADING', false, { root: true });
        context.dispatch('updateMessage', { message: '成功加入購物車', status: 'orange' }, { root: true });
        context.dispatch('getCart');
      });
    },
  },
  getters: {
    cartList: state => state.cartList,
  },
});
