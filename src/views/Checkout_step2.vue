<template>
  <div>
    <div class="container checkout">
      <div class="row my-5 justify-content-center">
        <div class="col-md-7 col-12">
          <div class="row step">
            <div class="col text-center step-point-line">
              <span
                class="border border-info bg-grass px-4 py-2
                rounded-pill text-info mb-3 d-inline-block"
              >STEP 1</span>
              <p class="text-info h6">確認訂單資料</p>
            </div>
            <div class="col text-center step-point-line step-point">
              <span class="bg-info px-4 py-2 rounded-pill
              text-grass mb-3 d-inline-block">STEP 2</span>
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
        <div class="col-md-5 col-12 mb-5 mb-md-0" v-if="cartList.carts">
          <h6 class="font-letter text-dark mb-3 mt-4 font-weight-bold text-center text-md-left">
            購物車清單
            <i class="fas fa-angle-down ml-2"></i>
          </h6>
          <ul class="d-md-flex flex-column meun p-0 mb-5">
            <li
              class="meun-list text-dark px-3 py-2 h6 row no-gutters"
              v-for="item in order.products" :key="item.id"
            >
              <div
                class="col-3 cart-img banner"
                :style="{backgroundImage:`url('${item.product.imageUrl}')`}"
              ></div>
              <div class="col-9 d-flex flex-column justify-content-center">
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
            </li>
          </ul>
          <div class="row align-items-end mb-3">
            <div
              class="col h4 mb-0 text-right text-orange"
            >總金額 {{ order.total | currency }}</div>
          </div>
          <hr>
        </div>
        <div class="col-md col-12">
          <table class="table">
            <tbody>
              <tr>
                <th width="100">Email</th>
                <td>{{ order.user.email }}</td>
              </tr>
              <tr>
                <th>姓名</th>
                <td>{{ order.user.name }}</td>
              </tr>
              <tr>
                <th>收件人電話</th>
                <td>{{ order.user.tel }}</td>
              </tr>
              <tr>
                <th>收件人地址</th>
                <td>{{ order.user.address }}</td>
              </tr>
              <tr>
                <th>付款狀態</th>
                <td>
                  <span v-if="!order.is_paid" class="text-danger">尚未付款</span>
                  <span v-else class="text-success">付款完成</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="text-right">
            <router-link class="btn btn-outline-secondary mr-2" to="/checkout_1">取消</router-link>
            <button class="btn btn-danger" @click="payOrder">確認付款</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      order: {
        user: {},
      },
      orderId: '',
    };
  },
  methods: {
    getOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${vm.orderId}`;
      this.$http.get(api).then((response) => {
        vm.order = response.data.order;
      });
    },
    payOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${vm.orderId}`;
      this.$http.post(api).then((response) => {
        if (response.data.success) {
          vm.$router.push(`/checkout_3/${vm.orderId}`);
        }
      });
    },
    ...mapActions('cartsModule', ['getCart']),
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getCart();
    this.getOrder();
  },
  computed: {
    ...mapGetters('cartsModule', ['cartList']),
  },
};
</script>
