<template>
  <div>
    <Alert />
    <div class="container">
      <div
        class="jumbotron p-3 p-md-5 text-white banner"
        style="background-image: url('https://images.unsplash.com/photo-1463936575829-25148e1db1b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1390&q=80')"
      >
        <div>
          <h1 class="text-hide">多肉行旅</h1>
        </div>
      </div>
    </div>

    <section
      class="font-letter container text-center
      d-flex flex-column justify-content-center mb-5 welcome-block"
      style="height: 300px"
    >
      <div class="cloud w-100">
        <img src="../assets/cloud.svg" alt>
      </div>
      <div class="aboutus h2">歡迎來到多肉行旅</div>
      <p class="arrdown h5">
        <i class="fas fa-caret-down"></i>
      </p>
      <div style="line-height: 26px">
        多肉行旅想把種植多肉植物的各種美好分享給大家，
        <br>就像好友之間訴說著彼此的種植經驗、以及對於美好生活的想像。
        <br>經歷過工作與生活的衝撞，多肉植物讓兩者產生平衡，
        <br>透過養護植物，也時時提醒著看照自己的心情，
        <br>慢下腳步感受情緒，活力有朝氣的過每一天。
      </div>
    </section>

    <section class="container my-4">
      <div class="row no-gutters enjoy-block">
        <div
          class="col-md-7 bg-info banner enjoy-img"
          style="background-image:url('https://images.unsplash.com/photo-1516908652131-368b74f427a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')"
        ></div>
        <div
          class="col-md-6 bg-warning enjoy-text
          d-flex flex-column justify-content-center font-letter"
        >
          <div class="h2 mb-4">一起享受被綠色環繞的療癒</div>
          <div class="mb-5">當你需要的時候，在自己最喜歡的角落，也有可以療癒自己的綠色。</div>
          <router-link class="btn btn-sm btn-outline-dark btn-pill ml-auto"
          to="/products">來去逛逛</router-link>
        </div>
      </div>
    </section>

    <section class="bg-white py-5">
      <swiper :options="swiperOption" class="container">
        <!-- slides -->
        <swiper-slide v-for="item in products" :key="item.id">
          <div class="row justify-content-center">
            <div class="col mb-4">
              <div class="row no-gutters shadow">
                <div class="col-7">
                  <div class="bg-white flex-md-row">
                    <div class="card-body d-flex flex-column align-items-start">
                      <span class="badge badge-pill badge-orange mb-2">熱門商品</span>
                      <h3>
                        <a class="nav-link text-dark p-0 mb-3" href="#">{{ item.title }}</a>
                      </h3>
                      <div class="d-flex align-items-end mb-4">
                        <del class="h6 mr-3"
                          v-if="item.price">{{item.origin_price | currency}} 元</del>
                        <div class="h5"
                          v-if="item.price">{{item.price | currency}} 元</div>
                      </div>
                      <div class="d-flex align-items-end">
                        <a class="btn btn-sm btn-outline-success cursor-pointer mr-2"
                          @click="toProductPage(item.id)">商品細節</a>
                        <button
                          class="btn btn-sm btn-outline-danger"
                          href="#"
                          @click="addtoCart(item.id)"
                        >加到購物車</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-5">
                  <div class="banner h-100"
                    :style="{ backgroundImage:`url('${item.imageUrl}')` }"></div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </section>

    <section class="container my-5">
      <router-link class="row no-gutters nohover blog-block" to="/blog">
        <div
          class="d-flex justify-content-center h3 banner-fix text-white p-5 w-100"
          style="background-image: url('https://images.unsplash.com/photo-1455793222120-98f37a8d4ede?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2016&q=80');border-radius: 0.5rem;"
        >
          <p class="p-3 m-0"># 多肉大事紀</p>
          <i class="fas fa-comment"></i>
        </div>
      </router-link>
    </section>

    <section class="container my-4">
      <div class="row no-gutters gift-block order-2">
        <div
          class="col-md-7 bg-info banner gift-img"
          style="background-image:url('https://images.unsplash.com/photo-1529340376075-067b25b3d7fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')"
        ></div>
        <div
          class="col-md-6 bg-cyan gift-text d-flex flex-column justify-content-center font-letter"
        >
          <div class="h2 mb-4">
            來挑選最適合那個
            <br>他 / 她的小多肉吧
          </div>
          <div>送給最重要的他，讓他最喜歡的角落，也能有想到自己的綠色。</div>
          <small class="mb-5"># たにくしょくぶつ</small>
          <router-link
            class="btn btn-sm btn-outline-dark btn-pill ml-auto"
            to="/giftpage">挑選好禮</router-link>
        </div>
      </div>
    </section>

    <section class="container my-5">
      <div class="row no-gutters bg-warning p-5 font-letter justify-content-center">
        <div class="col-md-4 col-12 h5 d-flex flex-column text-dark mb-5 mb-md-0">
          <p class="mb-3">快來訂閱「多肉行旅」 !</p>
          <p class="m-0">來接收各種優惠資訊吧 !</p>
        </div>
        <div class="col-md-6 col-12 d-flex align-items-center text-white email-block">
          <input class="form-control" type="email">
          <i class="fas fa-envelope ml-3 h4 mb-0"></i>
        </div>
      </div>
    </section>

    <section class="container my-5">
      <div class="row no-gutters font-letter justify-content-center">
        <div
          class="col-md-6 col-12 p-5 h5
          d-flex flex-column align-items-star bg-info banner salebanner-free"
        ></div>
        <div
          class="col-md-6 col-12 p-5 h5
          d-flex flex-column align-items-center bg-success banner salebanner-gift"
        ></div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.jumbotron {
  height: 500px;
}

.welcome-block {
  position: relative;
  z-index: 2;

  .cloud {
    position: absolute;
    left: 0;
    z-index: -1;
    animation-name: cloudFade;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .arrdown {
    animation-name: arrMove;
    animation-duration: 2s;
    animation-timing-function: ease;
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

@keyframes arrMove {
  0% {
    transform: translateY(-0.3rem);
    opacity: 1;
  }
  1% {
    opacity: 1;
  }
  10% {
    opacity: 1;
  }
  50% {
    transform: translateY(0.3rem);
  }
  60% {
    opacity: 1;
  }
  100% {
    transform: translateY(-0.3rem);
    opacity: 1;
  }
}

.enjoy-block {
  .enjoy-img {
    width: 100%;
    height: 200px;
    border: 5px solid #f3de8a;
  }
  .enjoy-text {
    padding: 20px;
  }
}

@media (min-width: 767px) {
  .enjoy-block {
    position: relative;
    height: 450px;

    .enjoy-img {
      margin-top: 35px;
      height: 400px;
      position: absolute;
      left: 0;
      z-index: 1;
      border: none;
    }
    .enjoy-text {
      height: 400px;
      position: absolute;
      right: 0;
      padding: 20px 40px 20px 130px;
    }
  }
}

.gift-block {
  .gift-img {
    width: 100%;
    height: 200px;
    border: 5px solid #c3e2dc;
  }
  .gift-text {
    padding: 20px;
  }
}

@media (min-width: 767px) {
  .gift-block {
    position: relative;
    height: 450px;

    .gift-img {
      margin-top: 35px;
      height: 400px;
      position: absolute;
      right: 0;
      z-index: 1;
      border: none;
    }
    .gift-text {
      height: 400px;
      position: absolute;
      left: 0;
      padding: 20px 130px 20px 40px;
    }
  }
}

.blog-block {
  i {
    opacity: 0;
    transition: ease 0.3s;
  }

  &:hover i {
    opacity: 1;
  }
}

.email-block {
  .form-control {
    position: relative;
    border: none;
    outline: none;
    background: none;
    border-bottom: 3px solid #fff;
    border-radius: 0;
  }

  i {
    position: absolute;
    right: 10px;
    cursor: pointer;
  }
}

.salebanner-free {
  background-image: url("../assets/free.jpg");
  height: 350px;
  cursor: pointer;
}

.salebanner-gift {
  background-image: url("../assets/gift.jpg");
  height: 350px;
  cursor: pointer;
}

@media (max-width: 769px) {
  .salebanner-free {
    height: 200px;
  }

  .salebanner-gift {
    background-position-y: bottom;
    height: 195px;
  }
}

.swiper-container {
  width: 100%;
}
</style>

<script>
import { mapGetters, mapActions } from 'vuex';
import Alert from '../components/AlertMessage.vue';

export default {
  data() {
    return {
      swiperOption: {
        // 所有的参数同 swiper 官方 api 参数
        // ...
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        spaceBetween: 30,
        slidesPerView: 2,
        breakpoints: {
          768: {
            slidesPerView: 1,
          },
        },
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
    ...mapActions('productsModule', ['getProducts']),
  },

  created() {
    this.getProducts();
  },
  computed: {
    ...mapGetters('productsModule', ['products']),
  },
  components: {
    Alert,
  },
};
</script>
