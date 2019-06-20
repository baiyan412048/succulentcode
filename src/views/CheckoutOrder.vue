<template>
  <div>
    <div class="vld-parent">
      <loading :active.sync="isLoading"></loading>
    </div>
    <div class="container check-bg my-5 py-5">
      <div class="mb-5 row flex-column justify-content-center align-items-center orderinfo">
        <div class="p-4 orderinfo-input shadow">
          <label for="orderinfo" class="h5 text-orange">
            請輸入訂單號碼：
            <input
              type="text"
              id="orderinfo"
              class="form-control mt-3"
              v-model="orderId"
              @keyup.enter="getOrder()"
            >
          </label>
        </div>
        <div class="col-12">
          <div class="row my-5 orderinfo-block" v-if="showOrder">
            <div class="col-md-6 col-12 mb-5 mb-md-0 orderinfo-block-carts">
              <h6 class="font-letter text-dark mb-3 mt-4 font-weight-bold text-center text-md-left">
                購物車清單
                <i class="fas fa-angle-down ml-2"></i>
              </h6>
              <ul class="d-md-flex flex-column meun p-0 mb-5">
                <li
                  class="meun-list text-dark px-3 py-2 h6 row no-gutters"
                  v-for="item in order.products"
                  :key="item.id"
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
                <div class="col h4 mb-0 text-right text-orange">
                  總金額 {{ order.total | currency }}</div>
              </div>
              <hr>
            </div>
            <div class="col-md col-12 orderinfo-block-info">
              <div class="p-3">
                <table class="table">
                  <tbody>
                    <tr>
                      <th width="120">Email</th>
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
                        <span v-else class="text-orange">付款完成</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="mt-3">
                  <p class="font-weight-bold">貨物運送狀態：</p>

                  <div class="row my-5 step">
                    <div class="col text-center step-point-line">
                      <span
                        class="border border-orange bg-warning px-4 py-2
                        rounded-pill text-dark mb-3 d-inline-block"
                      >確認訂單</span>
                    </div>
                    <div class="col text-center step-point-line step-point">
                      <span
                        class="bg-orange px-4 py-2 rounded-pill
                        text-grass mb-3 d-inline-block"
                      >配送中</span>
                    </div>
                    <div class="col text-center">
                      <span
                        class="border border-orange bg-warning px-4 py-2
                        rounded-pill text-dark mb-3 d-inline-block"
                      >已送達</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row align-items-end check-bg-block">
        <div class="col-12">
          <div class="banner check-bg-img"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.check-bg {
  position: relative;
  height: 100%;
  z-index: 0;
  overflow: hidden;

  .check-bg-block {
    position: absolute;
    width: 100%;
    height: 100vh;
    bottom: 0;
    z-index: -2;
    opacity: 0.5;

    .check-bg-img {
      width: 100%;
      height: 500px;
      background-image: url("../assets/succulent-background.png");
      background-position-y: bottom;
    }
  }
  .orderinfo {
    .orderinfo-input {
      border-radius: 0.3rem;
      background-color: #ffffff85;
    }
    .orderinfo-block {
      .orderinfo-block-carts {

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
      }

      .orderinfo-block-info {

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
              width: 150px;
              height: 2px;
              border-bottom: 2px solid #efbb24;
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
              background-color: #efbb24;
              border-radius: 500px;
              animation-name: point;
              animation-duration: 2s;
              animation-timing-function: ease;
              animation-iteration-count: infinite;
            }
          }
          @media (max-width: 769px) {

            .step-point-line {
              position: relative;
              &::after {
                content: "";
                display: none;
              }
            }

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
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      isLoading: false,
      order: {
        user: {},
      },
      orderId: '',
      showOrder: false,
    };
  },
  methods: {
    getOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${
        vm.orderId
      }`;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        vm.showOrder = true;
        vm.isLoading = false;
        vm.order = response.data.order;
      });
    },
  },
};
</script>
