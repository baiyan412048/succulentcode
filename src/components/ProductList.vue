<template>
  <div>
    <nav class="d-flex align-items-center mt-3 mb-4">
      <div class="h4 mb-0 mr-auto text-dark">{{ title }}</div>
      <div>
        <button
          class="showbtn btn btn-outline-warning ml-2"
          @click="showUp('box')"
          :class="{'active':showProducts=='box'}"
        >
          <i class="fas fa-th-large"></i>
        </button>
        <button
          class="showbtn btn btn-outline-warning ml-2"
          @click="showUp('list')"
          :class="{'active':showProducts=='list'}"
        >
          <i class="fas fa-list-ul"></i>
        </button>
      </div>
    </nav>
    <!-- 顯示方式：盒狀 -->
    <section class="row mb-4" v-if="showProducts === 'box'">
      <div
        class="col-md-4 col-12 mb-3 text-dark detail"
        :class="{'sellout-box':item.is_enabled === 0}"
        v-show="title === item.category || category === 'all'"
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
            <div class="col m-0 d-flex align-items-end cursor-pointer" @click="addtoCart(item.id)">
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
    </section>
    <!-- 顯示方式：列表 -->
    <section class="mb-4" v-else>
      <ul class="p-0 detail">
        <li
          class="row mb-3 on-hover no-gutters list"
          :class="{'sellout-list':item.is_enabled === 0}"
          v-show="title === item.category || category === 'all'"
          v-for="item in products"
          :key="item.id"
        >
          <div class="col-3">
            <div
            class="list-img banner cursor-pointer"
            :style="{backgroundImage:`url('${item.imageUrl}')`}"
            @click="toProductPage(item.id)"></div>
          </div>
          <div class="col">
            <div class="row ml-1 p-3 no-gutters">
              <div class="col">
                <div class="h5">{{item.title}}</div>
                <div
                  class="samll mb-4 d-none d-md-block cursor-pointer"
                  @click="toProductPage(item.id)">
                  來自例朋至四：到多升處話然文聯期奇不其可變金破陽代。
                </div>
                <p class="mb-0">
                  <del class="text-secondary h6 mr-2">{{ item.origin_price | currency }}</del>
                  <span class="text-danger font-weight-bold h5">{{ item.price | currency }}</span>
                </p>
              </div>
              <div class="col-2 d-flex justify-content-center align-items-center cursor-pointer">
                <div class @click="addtoCart(item.id)">
                  <p class="bg-warning btn mb-0">
                    <i class="fas fa-shopping-basket"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
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

export default {
  data() {
    return {
      showProducts: 'box', // 控制商品顯示方式 box 盒狀 / list 列表
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
    showUp(item) {
      const vm = this;
      vm.showProducts = item;
    },
    ...mapActions('productsModule', ['getProducts']),
  },
  created() {
    this.getProducts();
  },
  computed: {
    ...mapGetters(['category', 'title']),
    ...mapGetters('productsModule', ['products']),
  },
};
</script>
