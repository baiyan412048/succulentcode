<template>
  <div>
    <div class="container checkout">
      <div class="row my-5 justify-content-center">
        <div class="col-md-7 col-12">
          <div class="row step my-md-5">
            <div class="col text-center step-point-line">
              <span
                class="border border-info bg-grass px-md-4 py-2
                rounded-pill text-info mb-3 d-inline-block"
              >STEP 1</span>
              <p class="text-info h6">確認訂單資料</p>
            </div>
            <div class="col text-center step-point-line">
              <span
                class="border border-info bg-grass px-md-4 py-2
                rounded-pill text-info mb-3 d-inline-block"
              >STEP 2</span>
              <p class="text-info h6">確認付款</p>
            </div>
            <div class="col text-center">
              <span class="bg-info px-md-4 py-2 rounded-pill
              text-grass mb-3 d-inline-block">STEP 3</span>
              <p class="text-info h6">完成訂單！</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center my-5">
        <div class="col-9 text-center success-block">
          <div class="cloud w-100">
            <img src="../assets/cloud.svg" alt>
          </div>
          <h1 class="text-orange mb-5 aboutus">已成功付款！</h1>
          <label for="order" class="h5 text-left copy">
            訂單編號 ：
            <input
              id="order"
              class="form-control mt-3 cursor-pointer"
              :class="{'is-valid':copydown}"
              type="text"
              v-model="orderId"
              @click="doCopy"
            >
            <i class="far fa-copy cursor-pointer" @click="doCopy"
            v-if="!copydown"></i>
            <p class="text-success h6 mt-2" v-if="copydown">已成功複製訂單編號</p>
          </label>

        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-3 col-sm-5 col-9">
          <div class="row no-gutters">
            <div class="col text-center">
              <router-link class="btn btn-info text-white" to="/checkout_order">
                <i class="fas fa-arrow-left mr-2"></i>查看訂單
              </router-link>
            </div>
            <div class="col text-center">
              <router-link class="btn btn-lake text-white" to="/index">
                繼續逛逛
                <i class="fas fa-arrow-right ml-2"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.copy {
  position: relative;

  &>.is-valid{
    background-position-x: 95% !important;
  }

  & > i {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
}

.success-block {
  position: relative;
  z-index: 0;

  .cloud {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    animation-name: cloudFade;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .aboutus {
    font-family: "Noto Serif TC", serif;
  }
}

@keyframes cloudFade {
  0% {
    transform: translateX(-2rem);
    opacity: 0;
  }
  1% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  100% {
    transform: translateX(2rem);
    opacity: 0;
  }
}
</style>

<script>
export default {
  data() {
    return {
      orderId: '',
      copydown: false,
    };
  },
  methods: {
    doCopy() {
      this.$copyText(this.orderId); // 複製效果
      const vm = this;
      vm.copydown = true;
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
  },
};
</script>
