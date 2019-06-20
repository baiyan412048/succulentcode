import axios from 'axios';

export default ({
  strict: true,
  namespaced: true,
  state: {
    products: [],
    product: {
    },
  },
  mutations: {
    /* eslint-disable no-param-reassign */
    PRODUCTS(state, payload) {
      state.products = payload;
    },
    PRODUCT(state, payload) {
      state.product = payload;
    },
    /* eslint-disable no-param-reassign */
  },
  actions: {
    getProduct(context, id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/product/${id}`;
      context.commit('LOADING', true, { root: true });
      axios.get(api).then((response) => {
        context.commit('LOADING', false, { root: true });
        context.commit('PRODUCT', response.data.product);
      });
    },
    getProducts(context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/products/all`;
      context.commit('LOADING', true, { root: true });
      axios.get(api).then((response) => {
        context.commit('LOADING', false, { root: true });
        context.commit('PRODUCTS', response.data.products);
      });
    },
  },
  getters: {
    products: state => state.products,
    product: state => state.product,
  },
});
