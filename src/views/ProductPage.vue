<template>
  <div>
    <Alert />
    <div class="container">
      <Mobilecart/>
      <div class="row">
        <!-- 購物車區塊 -->
        <div
          class="col-12 mb-md-5 mb-4"
          :class="{'col-md-3': cartList.total < 1,'col-md-4 ':cartList.total > 0}"
        >
          <div class="p-4 bg-info meun-box font-letter">
            <!-- 桌機購物車顯示 -->
            <h6 class="text-dark mb-3 mt-4 font-weight-bold text-center text-md-left"
            @click="showCart = !showCart">
              購物車清單
              <span class="badge badge-danger mr-2">{{ cartList.carts.length }}</span>
              <i class="fas fa-angle-down" v-if="cartList.total > 1"></i>
            </h6>
            <ul class="d-none d-md-flex flex-column meun p-0"
            :class="{'d-flex': showCart}">
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
                  <button
                    class="btn btn-outline-danger btn-sm"
                    @click.prevent="removeCart(item.id)"
                  >
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
          </div>
        </div>
        <!-- 商品區塊 -->
        <div class="col">
          <nav class="d-flex align-items-center mt-3 mb-4">
            <div class="h4 mb-0 mr-auto text-dark">{{ product.category }}</div>
          </nav>
          <!-- 產品細節 -->
          <div class="row mb-5">
            <div class="col-md-6 col-12 mb-4 mb-md-0">
              <div
                class="banner"
                style="height: 400px;"
                :style="{ backgroundImage:`url('${product.imageUrl}')` }"
              ></div>
            </div>
            <div class="col-md-6 col-12">
              <h2 class="h4 mb-4 text-dark">{{ product.title }}</h2>
              <p class="mb-2 text-secondary">——</p>
              <p
                class="text-secondary"
              >{{ product.description }}</p>
              <div class="row mt-5 text-dark">
                <div class="col-5 d-flex align-items-end">
                  <del class="h6 mb-0">原價 {{ product.origin_price | currency }} 元</del>
                </div>
                <div class="col-7 d-flex justify-content-end align-items-end">
                  <div class="h5 mb-0">現在只要 {{ product.price | currency }} 元</div>
                </div>
              </div>
              <select class="form-control mt-3" v-model="counts">
                <option
                :value="counts" v-for="counts in 10"
                :key="counts">選購 {{ counts }} {{ product.unit }}</option>
              </select>
              <div class="row my-3">
                <div class="col-12 h5 text-right">
                  <small>總計</small>
                  <strong>{{ product.price * counts | currency }}</strong>
                </div>
              </div>
              <hr>
              <div class="text-right">
                <button
                  type="button"
                  class="btn btn-outline-secondary mr-2"
                  @click="previousPage"
                >取消</button>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="addtoCart(product.id, counts)"
                >加到購物車</button>
              </div>
            </div>
          </div>
        </div>
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

.sellout-box,
.sellout-list {
  position: relative;
  &::after {
    content: "";
    display: block;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-color: #ffffff85;
  }
  &::before {
    content: "已完售";
    display: block;
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    line-height: 80px;
    width: 80px;
    height: 80px;
    border-radius: 500px;
    font-size: 18px;
    background-color: #efbb2498;
  }
}

.sellout-box {
  &::after {
    margin: 0 15px;
  }
}

.detail {
  .showbtn {
    width: 40px;
    height: 40px;
  }

  .on-hover {
    transition: all 0.3s;

    &:hover {
      border: 1px solid #efbb24;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
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

  .list {
    border: 1px solid #a8d8b9;
    border-radius: 0.25rem;

    .list-img {
      height: 100%;
    }
  }
}
</style>

<script>
import { mapGetters, mapActions } from 'vuex';
import Mobilecart from '../components/Mobilecart.vue';
import Alert from '../components/AlertMessage.vue';

export default {
  data() {
    return {
      counts: 1,
      productId: '',
      showCart: false,
    };
  },
  methods: {
    previousPage() {
      window.history.back();
    },
    getProduct(id) {
      this.$store.dispatch('productsModule/getProduct', id);
    },
    addtoCart(id, qty = 1) {
      this.$store.dispatch('cartsModule/addtoCart', { id, qty });
    },
    removeCart(id) {
      this.$store.dispatch('cartsModule/removeCart', id);
    },
    ...mapActions('cartsModule', ['getCart']),
  },
  created() {
    const vm = this;
    vm.productId = this.$route.params.productId;
    this.getProduct(vm.productId);
    this.getCart();
  },
  computed: {
    ...mapGetters(['title', 'category']),
    ...mapGetters('cartsModule', ['cartList']),
    ...mapGetters('productsModule', ['product']),
  },
  components: {
    Mobilecart,
    Alert,
  },
};
</script>
