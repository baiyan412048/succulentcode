import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  scrollBehavior(savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return {
      x: 0,
      y: 0,
    };
  },
  routes: [{
    path: '*',
    redirect: 'login',
  },
  {
    name: 'Succulent',
    path: '/',
    redirect: 'index',
    component: () => import('./components/Succulent.vue'),
    children: [{
      name: 'Index', // 元件呈現的名稱
      path: 'index', // 對應的虛擬路徑
      component: () => import('./views/Index.vue'), // 對應的元件
    },
    {
      name: 'Abousus',
      path: 'abousus',
      component: () => import('./views/Abousus.vue'),
    },
    {
      name: 'Blog',
      path: 'blog',
      component: () => import('./views/Blog.vue'),
    },
    {
      name: 'Product',
      path: 'product',
      component: () => import('./views/Product.vue'),
    },
    {
      name: 'ProductPage',
      path: 'product_page/:productId',
      component: () => import('./views/ProductPage.vue'),
    },
    {
      name: 'Giftpage',
      path: 'giftpage',
      component: () => import('./views/Giftpage.vue'),
    },
    {
      name: 'Checkout1',
      path: 'checkout_1',
      component: () => import('./views/Checkout_step1.vue'),
    },
    {
      name: 'Checkout2',
      path: 'checkout_2/:orderId',
      component: () => import('./views/Checkout_step2.vue'),
    },
    {
      name: 'Checkout3',
      path: 'checkout_3/:orderId',
      component: () => import('./views/Checkout_step3.vue'),
    },
    {
      name: 'CheckoutOrder',
      path: 'checkout_order',
      component: () => import('./views/CheckoutOrder.vue'),
    },
    ],
  },
  {
    name: 'Backstage',
    path: '/backstage',
    component: () => import('./components/Backstage.vue'),
    children: [{
      name: 'Back_products',
      path: 'back_products',
      component: () => import('./views/Back_products.vue'),
    },
    {
      name: 'Back_orderList',
      path: 'back_orderList',
      component: () => import('./views/Back_orderList.vue'),
    },
    {
      name: 'Back_coupon',
      path: 'back_coupon',
      component: () => import('./views/Back_coupon.vue'),
    },
    ], // 對應的元件
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('./views/Login.vue'),
  },
  ],
});
