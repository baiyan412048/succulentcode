import axios from 'axios';
import $ from 'jquery';

export default ({
  strict: true,
  namespaced: true,
  state: {
    pagination: {},
    coupons: [],
    tempCoupon: {},
    orders: [],
    products: [],
    tempProduct: {},
    productImgurl: '',
    isNew: false,
    fileupLoading: false,
  },
  mutations: {
    /* eslint-disable no-param-reassign */
    PAGINATION(state, payload) {
      state.pagination = payload;
    },
    COUPONS(state, payload) {
      state.coupons = payload;
    },
    TEMPCOUPON(state, payload) {
      state.tempCoupon = payload;
    },
    ORDERS(state, payload) {
      state.orders = payload;
    },
    PRODUCTS(state, payload) {
      state.products = payload;
    },
    TEMPPRODUCT(state, payload) {
      state.tempProduct = payload;
    },
    PRODUCTIMGURL(state, payload) {
      state.productImgurl = payload;
    },
    ISNEW(state, payload) {
      state.isNew = payload;
    },
    FILEUPLOADING(state, payload) {
      state.fileupLoading = payload;
    },
    /* eslint-disable no-param-reassign */
  },
  actions: {
    getCoupons(context, page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/admin/coupons?page=${page}`;
      context.commit('LOADING', true, { root: true });
      axios.get(api).then((response) => {
        context.commit('LOADING', false, { root: true });
        context.commit('COUPONS', response.data.coupons);
        context.commit('PAGINATION', response.data.pagination);
        console.log(response.data.coupons, context.state.coupons);
      });
    },
    openCouponModal(context, { isNew, item }) {
      if (isNew) {
        const coupon = {};
        context.commit('TEMPCOUPON', coupon);
        context.commit('ISNEW', true);
      } else {
        const coupon = {
          title: item.title,
          percent: item.percent,
          due_date: item.due_date,
          code: item.code,
          is_enabled: item.is_enabled,
        };
        context.commit('TEMPCOUPON', coupon);
        context.commit('ISNEW', false);
      }
      $('#couponModal').modal('show');
    },
    updateCoupon(context, tempCoupon) {
      const coupon = tempCoupon;
      context.commit('TEMPCOUPON', coupon);
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`;
      let httpMethod = 'post';
      if (!context.state.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${context.state.tempCoupon.id}`;
        httpMethod = 'put';
      }
      axios[httpMethod](api, { data: context.state.tempCoupon }).then((response) => {
        $('#couponModal').modal('hide');
        if (response.data.success) {
          if (httpMethod === 'post') {
            context.dispatch('updateMessage', { message: '已新增優惠劵', status: 'orange' }, { root: true });
            context.dispatch('getCoupons');
          } else {
            context.dispatch('updateMessage', { message: '已修改優惠劵', status: 'orange' }, { root: true });
            context.dispatch('getCoupons');
          }
        } else if (!response.data.success) {
          if (httpMethod === 'post') {
            context.dispatch('updateMessage', { message: '新增優惠劵失敗', status: 'danger' }, { root: true });
            context.dispatch('getCoupons');
          } else {
            context.dispatch('updateMessage', { message: '修改優惠劵失敗', status: 'danger' }, { root: true });
            context.dispatch('getCoupons');
          }
        }
      });
    },
    openCouponDelModal(context, item) {
      context.commit('TEMPCOUPON', Object.assign({}, item));
      $('#delCoupontModal').modal('show');
    },
    delCoupon(context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/admin/coupon/${context.state.tempCoupon.id}`;
      axios.delete(api).then((response) => {
        if (response.data.success) {
          $('#delCoupontModal').modal('hide');
          context.dispatch('updateMessage', { message: '已刪除優惠劵', status: 'orange' }, { root: true });
          context.dispatch('getCoupons');
        } else {
          $('#delCoupontModal').modal('hide');
          context.dispatch('updateMessage', { message: '刪除優惠劵失敗', status: 'danger' }, { root: true });
          context.dispatch('getCoupons');
        }
      });
    },
    getOrders(context, page) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/admin/orders?page=${page}`;
      context.commit('LOADING', true, { root: true });
      axios.get(api).then((response) => {
        context.commit('LOADING', false, { root: true });
        context.commit('ORDERS', response.data.orders);
        context.commit('PAGINATION', response.data.pagination);
      });
    },
    getProducts(context, page) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/admin/products?page=${page}`;
      context.commit('LOADING', true, { root: true });
      axios.get(api).then((response) => {
        context.commit('LOADING', false, { root: true });
        context.commit('PRODUCTS', response.data.products);
        context.commit('PAGINATION', response.data.pagination);
      });
    },
    openProductModal(context, { isNew, item }) {
      if (isNew) {
        const product = {};
        context.commit('TEMPPRODUCT', product);
        context.commit('ISNEW', true);
      } else {
        const product = {
          imageUrl: item.imageUrl,
          title: item.title,
          category: item.category,
          unit: item.unit,
          origin_price: item.origin_price,
          price: item.price,
          description: item.description,
          is_enabled: item.is_enabled,
          id: item.id,
        };
        context.commit('TEMPPRODUCT', product);
        context.commit('ISNEW', false);
      }
      $('#productsModal').modal('show');
    },
    updateProduct(context, tempProduct) {
      const product = tempProduct;
      context.commit('TEMPPRODUCT', product);
      let api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/admin/product`;
      let httpMethod = 'post';
      if (!context.state.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${
          process.env.VUE_APP_CUSTOMPATH
        }/admin/product/${context.state.tempProduct.id}`;
        httpMethod = 'put';
      }
      context.commit('LOADING', true, { root: true });
      axios[httpMethod](api, { data: context.state.tempProduct }).then((response) => {
        context.commit('LOADING', false, { root: true });
        $('#productsModal').modal('hide');
        if (response.data.success) {
          if (httpMethod === 'post') {
            context.dispatch('updateMessage', { message: '已成功新增商品', status: 'orange' }, { root: true });
            context.dispatch('getProducts');
          } else {
            context.dispatch('updateMessage', { message: '已成功更改商品', status: 'orange' }, { root: true });
            context.dispatch('getProducts');
          }
        } else if (!response.data.success) {
          if (httpMethod === 'post') {
            context.dispatch('updateMessage', { message: '新增商品失敗', status: 'danger' }, { root: true });
            context.dispatch('getProducts');
          } else {
            context.dispatch('updateMessage', { message: '修改商品失敗', status: 'danger' }, { root: true });
            context.dispatch('getProducts');
          }
        }
      });
    },
    openProductDelModal(context, item) {
      context.commit('TEMPPRODUCT', Object.assign({}, item));
      $('#delProductModal').modal('show');
    },
    delProduct(context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/admin/product/${context.state.tempProduct.id}`;
      context.commit('LOADING', true, { root: true });
      axios.delete(api).then((response) => {
        context.commit('LOADING', false, { root: true });
        $('#delProductModal').modal('hide');
        if (response.data.success) {
          context.dispatch('updateMessage', { message: '已成功刪除商品', status: 'orange' }, { root: true });
          context.dispatch('getProducts');
        } else {
          $('#delProductModal').modal('hide');
          context.dispatch('updateMessage', { message: `刪除商品失敗 ${response.data.message} `, status: 'danger' }, { root: true });
          context.dispatch('getProducts');
        }
      });
    },
    upFile(context, upedFile) {
      const formData = new FormData();
      formData.append('file-to-upload', upedFile);
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/admin/upload`;
      context.commit('FILEUPLOADING', true);
      axios.post(api, formData, { headers: { 'Content-Type': 'multipart/form-data' } }).then((response) => {
        if (response.data.success) {
          const product = {
            imageUrl: response.data.imageUrl,
          };
          context.commit('FILEUPLOADING', false);
          context.commit('TEMPPRODUCT', product);
          context.commit('PRODUCTIMGURL', response.data.imageUrl);
        } else {
          context.dispatch('updateMessage', { message: `上傳失敗 ${response.data.message}`, status: 'danger' }, { root: true });
        }
      });
    },
  },
  getters: {
    pagination: state => state.pagination,
    coupons: state => state.coupons,
    tempCoupon: state => state.tempCoupon,
    orders: state => state.orders,
    products: state => state.products,
    tempProduct: state => state.tempProduct,
    productImgurl: state => state.productImgurl,
    isNew: state => state.isNew,
    fileupLoading: state => state.fileupLoading,
  },
});
