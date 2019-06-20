<template>
  <div>
    <div class="p-4 bg-info meun-box font-letter">
      <h6 class="text-dark my-3 font-weight-bold text-center text-md-left">
        商品分類
        <i class="fas fa-angle-down"></i>
      </h6>
      <ul class="row flex-md-column meun p-0 no-gutters justify-content-center">
        <li class="meun-list text-dark px-3 py-2 h6 mr-2 mr-md-0"
        @click="assort('hot')">熱門商品</li>
        <li class="meun-list text-dark px-3 py-2 h6 mr-2 mr-md-0"
        @click="assort('all')">所有商品</li>
        <li class="meun-list text-dark px-3 py-2 h6 mr-2 mr-md-0"
        @click="assort('bsize')">大型多肉</li>
        <li class="meun-list text-dark px-3 py-2 h6 mr-2 mr-md-0"
        @click="assort('ssize')">小型多肉</li>
        <li class="meun-list text-dark px-3 py-2 h6 mr-2 mr-md-0"
        @click="assort('potted')">多肉盆栽</li>
        <router-link
        class="meun-list text-dark px-3 py-2 h6 mr-2 mr-md-0"
        to="/giftpage">客製禮品</router-link>
      </ul>
      <hr>
      <!-- 桌機購物車顯示 -->
      <h6 class="text-dark mb-3 mt-4 font-weight-bold text-center text-md-left">
        購物車清單
        <span class="badge badge-danger mr-2">{{ cartList.carts.length }}</span>
        <i class="fas fa-angle-down" v-if="cartList.total > 1"></i>
      </h6>
      <ul class="d-flex flex-column meun p-0">
        <li class="text-dark px-3 py-2 h6" v-if="cartList.total < 1">您尚未選購商品！</li>
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
              {{ item.qty }}
            </div>
            <div class="ml-3">
              <span class="small">小計</span>
              {{ item.final_total | currency }}
            </div>
          </div>
          <div class="col-1 d-flex align-items-center">
            <button class="btn btn-outline-danger btn-sm" @click.prevent="removeCart(item.id)">
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </li>
      </ul>
      <div class="row no-gutters align-items-end mb-4" v-if="cartList.total !== 0">
        <div class="col-7 h4 mb-0 text-grass">
          <small>總計</small>
          {{ cartList.final_total | currency }}
        </div>
        <div class="col-5">
          <router-link class="btn btn-block btn-grass" to="/checkout_1">結帳去～</router-link>
        </div>
      </div>
      <div class="d-none d-md-block">
        <hr>
        <h6 class="text-dark my-3 font-weight-bold">
          Tags
          <i class="fas fa-tags"></i>
        </h6>
        <a href="#" class="badge badge-warning mr-2 mb-2">
          <i class="fas fa-tag mr-2"></i>養護小技巧
        </a>
        <a href="#" class="badge badge-warning mr-2 mb-2">
          <i class="fas fa-tag mr-2"></i>Q&A
        </a>
        <a href="#" class="badge badge-warning mr-2 mb-2">
          <i class="fas fa-tag mr-2"></i>挑禮物
        </a>
        <a href="#" class="badge badge-warning mr-2 mb-2">
          <i class="fas fa-tag mr-2"></i>多肉植物
        </a>
        <a href="#" class="badge badge-warning mr-2 mb-2">
          <i class="fas fa-tag mr-2"></i>多肉行旅
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.meun-box {
  border-radius: 0.3rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);

  .meun {
    list-style: none;

    .meun-list {
      border-left: 2px solid #a8d8b9;
      transition: all 0.3s;
      text-decoration: none;

      .cart-img {
        width: 60px;
        height: 60px;
      }

      &:hover,
      &:focus {
        border-left: 2px solid #4a593d;
        cursor: pointer;
      }
    }
  }
}

//Vue 動畫

.dropdown-enter-active {
  animation-name: drop-down;
  animation-duration: 0.5s;
}
.dropdown-leave-active {
  animation: drop-down 0.5s reverse;
}

@keyframes drop-down {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {};
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
    showUp(item) {
      const vm = this;
      vm.showProducts = item;
    },
    assort(name) {
      this.$store.dispatch('assort', name); // 'productsModules',
    },
    ...mapActions('cartsModule', ['getCart']),
  },
  created() {
    this.getCart();
  },
  computed: {
    ...mapGetters('cartsModule', ['cartList']),
  },
};
</script>
