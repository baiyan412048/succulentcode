<template>
  <div>
    <Alert />
    <div class="container checkout">
      <div class="row my-5 justify-content-center">
        <div class="col-md-7 col-12">
          <div class="row step">
            <div class="col text-center step-point-line step-point">
              <span class="bg-info px-4 py-2 rounded-pill
              text-grass mb-3 d-inline-block">STEP 1</span>
              <p class="text-info h6">確認訂單資料</p>
            </div>
            <div class="col text-center step-point-line">
              <span
                class="border border-info bg-grass px-4 py-2
                rounded-pill text-info mb-3 d-inline-block"
              >STEP 2</span>
              <p class="text-info h6">確認付款</p>
            </div>
            <div class="col text-center">
              <span
                class="border border-info bg-grass px-4 py-2
                rounded-pill text-info mb-3 d-inline-block"
              >STEP 3</span>
              <p class="text-info h6">完成訂單！</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row my-5">
        <div class="col-12 my-5" v-if="cartList.carts.length < 1">
          <h6 class="mb-5 font-letter text-dark font-weight-bold text-center">
            您的購物車內還沒有任何商品！
            <router-link class="btn btn-warning cursor-pointer font-weight-bold"
              to="/product">快來逛逛</router-link>
          </h6>
          <div class="row justify-content-center">
            <div class="col-12">
              <p class="h4 font-letter text-dark font-weight-bold text-center my-5">來看看最熱門的商品！</p>
            </div>
            <div
              class="col-md-4 col-12 mb-3 text-dark detail"
              :class="{'sellout-box':item.is_enabled === 0}"
              v-show="item.category === '熱門商品'"
              v-for="item in products"
              :key="item.id"
            >
              <div class="card product-card bg-grass on-hover">
                <div
                  class="card-img-top banner cursor-pointer"
                  :style="{backgroundImage:`url('${item.imageUrl}')`}"
                  @click="toProductPage(item.id)"
                ></div>
                <p
                  class="p-3 mr-auto mb-0 h5 font-letter cursor-pointer"
                  @click="toProductPage(item.id)"
                >{{item.title}}</p>
                <div class="card-body row no-gutters flex-wrap">
                  <div class="col m-0 d-flex align-items-end cursor-pointer"
                    @click="addtoCart(item.id)">
                    <p class="bg-warning btn">
                      <i class="fas fa-shopping-basket"></i>
                    </p>
                  </div>
                  <p class="col d-flex flex-column justify-content-center text-right mb-0">
                    <del class="text-secondary h6">{{ item.origin_price | currency }}</del>
                    <span class="text-danger font-weight-bold h5">{{ item.price | currency }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row my-5" v-if="cartList.carts.length > 0">
        <div class="col-md-5 col-12 mb-5 mb-md-0">
          <h6 class="font-letter text-dark mb-3 mt-4 font-weight-bold text-center text-md-left">
            購物車清單
            <span class="badge badge-danger ml-2">{{ cartList.carts.length }}</span>
          </h6>
          <ul class="d-md-flex flex-column meun p-0 mb-5">
            <li
              class="meun-list text-dark px-3 py-2 h6 row no-gutters"
              v-for="item in cartList.carts"
              :key="item.id"
            >
              <div
                class="col-3 cart-img banner"
                :style="{backgroundImage:`url('${item.product.imageUrl}')`}"
              ></div>
              <div class="col-8 d-flex flex-column justify-content-center">
                <div class="ml-3 mb-2">
                  {{ item.product.title }}
                  <i class="fas fa-times"></i>
                  <span class="h5 mb-0">{{ item.qty }}</span>
                </div>
                <div class="ml-3 text-orange">
                  <span class="small">小計</span>
                  {{ item.final_total | currency }}
                  <small
                    class="text-grass ml-3 use-coupon d-none d-md-inline-block"
                    v-if="item.coupon"
                  >已套用優惠劵</small>
                </div>
              </div>
              <div class="col-1 d-flex align-items-center">
                <button class="btn btn-outline-danger btn-sm" @click.prevent="removeCart(item.id)">
                  <i class="fas fa-trash-alt"></i>
                </button>
              </div>
            </li>
          </ul>
          <div class="row align-items-end mb-3" v-if="cartList.final_total !== cartList.total">
            <del
              class="col h5 mb-0 text-left text-secondary d-md-none"
            >總金額 {{ cartList.total | currency}}</del>
            <div
              class="col h5 mb-0 text-left text-secondary d-none d-md-block"
            >總金額 {{ cartList.total | currency}}</div>
            <div
              class="col h4 mb-0 text-right text-orange"
            >折扣後金額 {{ cartList.final_total | currency }}</div>
          </div>
          <div class="row align-items-end mb-3" v-else>
            <div
              class="col h4 mb-0 text-right text-orange"
            >總金額 {{ cartList.final_total | currency }}</div>
          </div>
          <div class="input-group mb-3">
            <input type="text" class="form-control" v-model="coupon_code" @keyup.enter="addCupon">
            <div class="input-group-append">
              <button
                class="btn btn-orange text-grass font-letter"
                type="button"
                @click="addCupon"
              >套用優惠碼</button>
            </div>
            <p class="ml-2 mt-1 text-orange">慶開店！ 只要輸入： newopen168 ，即可立即享7折優惠！</p>
          </div>
        </div>
        <div class="col-md col-12">
          <form @submit.prevent="createOrder">
            <div class="form-group">
              <label for="email">收件人Email</label>
              <input
                type="email"
                class="form-control"
                name="email"
                id="email"
                v-model="form.user.email"
                v-validate="'required|email'"
                :class="{ 'is-invalid': errors.has('email')}"
              >
              <span class="text-danger" v-if="errors.has('email')">{{ errors.first('email')}}</span>
            </div>
            <div class="form-group">
              <label for="name">收件人姓名</label>
              <input
                type="text"
                class="form-control"
                name="name"
                id="name"
                v-model="form.user.name"
                v-validate="'required'"
                :class="{ 'is-invalid': errors.has('name')}"
              >
              <span class="text-danger" v-if="errors.has('name')">您尚未填入收件人姓名</span>
            </div>
            <div class="form-group">
              <label for="phone">收件人電話</label>
              <input
                type="tel"
                class="form-control"
                name="phone"
                id="phone"
                v-model="form.user.tel"
                v-validate="'required'"
                :class="{ 'is-invalid': errors.has('phone')}"
              >
              <span class="text-danger" v-if="errors.has('phone')">您尚未填入收件人電話</span>
            </div>
            <div class="form-group">
              <label for="address">收件人地址</label>
              <input
                type="text"
                class="form-control"
                name="address"
                id="address"
                v-model="form.user.address"
                v-validate="'required'"
                :class="{ 'is-invalid': errors.has('address')}"
              >
              <span class="text-danger" v-if="errors.has('address')">您尚未填入收件人地址</span>
            </div>
            <div class="form-group">
              <label for="message">備註</label>
              <textarea
                class="form-control"
                name="message"
                id="message"
                rows="3"
                v-model="form.message"
              ></textarea>
            </div>
            <div class="text-right">
              <button class="btn btn-outline-primary"
                type="button" @click="createOrder">送出訂單</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

.step {
  position: relative;
  z-index: 1;

  .step-point-line {
    position: relative;

    &::after {
      content: "";
      display: block;
      position: absolute;
      z-index: -1;
      right: -80px;
      top: 20px;
      width: 180px;
      height: 2px;
      border-bottom: 2px solid #a8d8b9;
    }
  }

  .step-point {
    position: relative;

    &::before {
      content: "";
      display: block;
      position: absolute;
      z-index: 0;
      right: 50px;
      top: 16px;
      width: 10px;
      height: 10px;
      background-color: #a8d8b9;
      border-radius: 500px;
      animation-name: point;
      animation-duration: 2s;
      animation-timing-function: ease;
      animation-iteration-count: infinite;
    }
  }
  @media (max-width: 769px) {
    .step-point {
      position: relative;

      &::before {
        content: "";
        display: none;
      }
    }
  }
}

@keyframes point {
  0% {
    transform: translateX(0rem);
    opacity: 0;
  }
  1% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(9rem);
    opacity: 1;
  }
}

.cart-img {
  width: 60px;
  height: 60px;
}

.use-coupon {
  border-radius: 0.25rem;
  background-color: #86c166;
  position: relative;
  padding: 3px 8px;
  z-index: 1;

  &::before {
    content: "";
    display: block;
    position: absolute;
    z-index: 0;
    top: 50%;
    left: -4px;
    background-color: #86c166;
    width: 10px;
    height: 10px;
    transform: translateY(-50%) rotate(45deg);
  }
}

.product-card {
  border: 1px solid #a8d8b9;

  .card-img-top {
    height: 200px;
  }

  .cart-btn {
    width: 30px;
    height: 30px;
    border-radius: 500px;
  }
}
</style>


<script>
import { mapGetters, mapActions } from 'vuex';
import Alert from '../components/AlertMessage.vue';

export default {
  data() {
    return {
      coupon_code: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  methods: {
    toProductPage(id) {
      const vm = this;
      vm.$router.push(`/product_page/${id}`);
    },
    addtoCart(id, qty = 1) {
      this.$store.dispatch('cartsModule/addtoCart', { id, qty });
    },
    removeCart(id) {
      this.$store.dispatch('cartsModule/removeCart', id);
    },
    addCupon() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      const vm = this;
      const coupon = {
        code: vm.coupon_code,
      };
      this.$store.commit('LOADING', true, { root: true });
      this.$http.post(api, { data: coupon }).then(() => {
        this.$store.commit('LOADING', true, { root: true });
        vm.getCart();
      });
    },
    createOrder() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      const vm = this;
      const order = vm.form;
      this.$validator.validate().then((valid) => {
        if (valid) {
          this.$http.post(api, { data: order }).then((response) => {
            if (response.data.success) {
              vm.$router.push(`/checkout_2/${response.data.orderId}`);
            }
          });
        }
      });
    },
    ...mapActions('cartsModule', ['getCart']),
    ...mapActions('productsModule', ['getProducts']),
  },
  created() {
    this.getCart();
    this.getProducts();
  },
  computed: {
    ...mapGetters(['isLoading']),
    ...mapGetters('cartsModule', ['cartList']),
    ...mapGetters('productsModule', ['products']),
  },
  components: {
    Alert,
  },
};
</script>
