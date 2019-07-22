import axios from 'axios';

export default ({
  strict: true,
  namespaced: true,
  state: {
    cartList: {
      carts: {},
    },
    category: '所有商品',
    title: '所有商品',
    tag: '慶開幕',
  },
  mutations: {
    /* eslint-disable no-param-reassign */
    CATRLIST(state, payload) {
      state.cartList = payload;
    },
    TITLE(state, payload) {
      state.title = payload;
    },
    CATEGORY(state, payload) {
      state.category = payload;
    },
    TAG(state, payload) {
      state.tag = payload;
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
    assort(context, name) {
      context.commit('CATEGORY', name);
      if (name === '熱門商品') {
        context.commit('TITLE', '熱門商品');
      } else if (name === '所有商品') {
        context.commit('TITLE', '所有商品');
      } else if (name === '大型多肉') {
        context.commit('TITLE', '大型多肉');
      } else if (name === '小型多肉') {
        context.commit('TITLE', '小型多肉');
      } else {
        context.commit('TITLE', '多肉盆栽');
      }
      context.commit('TAG', '沒有商品');
    },
    tagSelet(context, tag) {
      if (tag === '送禮首選') {
        context.commit('TAG', tag);
      } else if (tag === '好照顧') {
        context.commit('TAG', tag);
      } else if (tag === '桌上型盆栽') {
        context.commit('TAG', tag);
      } else if (tag === '室外大型植物') {
        context.commit('TAG', tag);
      } else if (tag === '開運盆栽') {
        context.commit('TAG', tag);
      } else {
        context.commit('TAG', tag);
      }
      context.commit('TITLE', '');
    },
  },
  getters: {
    cartList: state => state.cartList,
    title: state => state.title,
    category: state => state.category,
    tag: state => state.tag,
  },
});
