import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VeeValidate from 'vee-validate';
import zhTWVeeValidate from 'vee-validate/dist/locale/zh_TW';
import VueClipboard from 'vue-clipboard2';
import router from './router';
import App from './App.vue';

import currencyFilter from './filters/currency';
import dateFilter from './filters/date';
import store from './store';

Vue.use(VueAxios, axios);
Vue.use(VeeValidate);
VeeValidate.Validator.localize('zh_TW', zhTWVeeValidate);
Vue.use(VueAwesomeSwiper /* { default global options } */);
Vue.use(VueClipboard);

Vue.config.productionTip = false;
axios.defaults.withCredentials = true;

Vue.component('Loading', Loading);
Vue.filter('currency', currencyFilter);
Vue.filter('date', dateFilter);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

// 跳轉時到頁面頂部
router.afterEach(() => {
  window.scrollTo(0, 0);
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.APIPATH}/api/user/check`;
    axios.post(api).then((response) => {
      if (response.data.success) {
        next();
      } else {
        next({
          path: '/index',
        });
      }
    });
  } else {
    next();
  }
});
