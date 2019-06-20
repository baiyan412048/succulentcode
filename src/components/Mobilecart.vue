<template>
  <div>
    <div
      class="mobile-cart bg-warning d-flex d-md-none justify-content-center align-items-center"
      @click="showMobileCart = !showMobileCart"
    >
      <i class="fas fa-shopping-cart"></i>
      <span class="badge badge-pill badge-danger">{{ cartList.carts.length }}</span>
    </div>
    <div class="cartlist bg-white m-3 px-4 py-5" v-show="showMobileCart">
      <button class="btn mr-auto" type="button" @click="showMobileCart = !showMobileCart">
        <i class="fas fa-times"></i>
      </button>
      <p class="h4 font-letter mb-5 text-center">購物車列表</p>
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
        <div class="col-7 h4 mb-0 text-dark">
          <small>總計</small>
          {{ cartList.final_total | currency }}
        </div>
        <div class="col-5">
          <router-link
          class="btn btn-block btn-success text-white"
          to="/checkout_1">結帳去～</router-link>
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
.mobile-cart {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 100;
  width: 50px;
  height: 50px;
  border-radius: 500px;
  color: #4a593d;

  i {
    font-size: 20px;
  }

  span{
    position: absolute;
    top: -5px;
    right: 0;
  }
}

.cartlist {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  border-radius: 0.3rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  color: #4a593d;
  overflow-y: auto;

  & > button {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .meun {
    list-style: none;

    .meun-list {
      border-left: 2px solid #fff;
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
</style>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      productId: '',
      showMobileCart: false,
    };
  },
  methods: {
    previousPage() {
      window.history.back();
    },
    addtoCart(id, qty = 1) {
      this.$store.dispatch('cartsModule/addtoCart', { id, qty });
    },
    removeCart(id) {
      this.$store.dispatch('cartsModule/removeCart', id);
    },
    ...mapActions('cartsModule', ['getCart']),
  },
  computed: {
    ...mapGetters('cartsModule', ['cartList']),
  },
  created() {
    this.getCart();
  },
};
</script>
