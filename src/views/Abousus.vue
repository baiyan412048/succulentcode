<template>
  <div>
    <div class="container">
      <div
        class="jumbotron p-3 p-md-5 text-white banner
        d-flex justify-content-center align-items-center aboutus-img"
      ></div>
    </div>

    <section
      class="font-letter container text-center
      d-flex flex-column justify-content-center mb-2 welcome-block"
    >
      <div class="cloud w-100">
        <img src="../assets/cloud.svg" alt>
      </div>

      <div class="aboutus h2">我們是「多肉行旅」</div>
      <br>
      <div style="line-height: 26px">
        多肉行旅想把種植多肉植物的各種美好分享給大家，
        <br>就像好友之間訴說著彼此的種植經驗、以及對於美好生活的想像。
        <br>經歷過工作與生活的衝撞，多肉植物讓兩者產生平衡，
        <br>透過養護植物，也時時提醒著看照自己的心情，
        <br>慢下腳步感受情緒，活力有朝氣的過每一天。
        <br>
        <br>多肉行旅想把種植多肉植物的各種美好分享給大家，
        <br>就像好友之間訴說著彼此的種植經驗、以及對於美好生活的想像。
        <br>經歷過工作與生活的衝撞，多肉植物讓兩者產生平衡，
        <br>透過養護植物，也時時提醒著看照自己的心情，
        <br>慢下腳步感受情緒，活力有朝氣的過每一天。
      </div>
      <p class="arrdown h5 mt-3">
        <i class="fas fa-caret-down"></i>
      </p>
    </section>

    <section class="container">
      <div class="row no-gutters justify-content-center mb-3">
        <div class="col-6 text-center">
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-outline-dark"
              @click="getYear(2017)"
              :class="{'active':year == 2017}"
            >2017</button>
            <button
              type="button"
              class="btn btn-outline-dark"
              @click="getYear(2018)"
              :class="{'active':year == 2018}"
            >2018</button>
            <button
              type="button"
              class="btn btn-outline-dark"
              @click="getYear(2019)"
              :class="{'active':year == 2019}"
            >2019</button>
          </div>
        </div>
      </div>
      <div class="row no-gutters">
        <div
          class="banner w-100 yeartxt shadow"
          style="background-image: url('https://images.unsplash.com/photo-1534302150185-2543f357969f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80');height: 450px"
          v-if="year == 2017"
        >
          <div class="bg-white p-2 font-letter h6">「多肉行旅」網路商店正式營運</div>
        </div>
        <div
          class="banner w-100 yeartxt shadow"
          style="background-image: url('https://images.unsplash.com/photo-1530023145520-a464f3c59969?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');height: 450px"
          v-if="year == 2018"
        >
          <div class="bg-white p-2 font-letter h6">「客製禮品」服務正式啟用</div>
        </div>
        <div
          class="banner best w-100 yeartxt shadow"
          style="background-image: url('https://images.unsplash.com/photo-1534235844982-e021907f6d39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');height: 450px"
          v-if="year == 2019"
        >
          <div class="bg-white p-2 font-letter h6">獲得「年度最佳網路商店」的殊榮 !</div>
        </div>
      </div>
    </section>

    <section class="container my-5">
      <div class="row">
        <div class="col-md-5 mb-3 mb-md-0">
          <div class="fb-block">
            <div class="fb-block-img banner p-3">
              <div class="d-flex">
                <div class="fb-sticker d-flex justify-content-center align-items-center bg-white">
                  <img src="../assets/succulentlogo.svg" width="70px" alt>
                </div>
                <div class="p-2 d-flex flex-column justify-content-center ml-2">
                  <p class="h5 text-dark">多肉行旅</p>
                  <p class="mb-0 text-dark">99,999 按讚次數</p>
                </div>
              </div>
              <div class="d-flex justify-content-between mt-3 rounded">
                <div class="px-2 bg-white text-secondary">
                  <i class="fab fa-facebook-square mr-2"></i>已說讚
                </div>
                <div class="px-2 bg-white">
                  <i class="fas fa-shopping-bag mr-2"></i>來去逛逛
                </div>
              </div>
            </div>
            <div class="fb-block-frined bg-white p-2">
              <div class="shadow-sm p-2">
                <p>你和其它 999 位朋友都說這個讚</p>
                <div class="d-flex">
                  <div>
                    <img
                      src="https://randomuser.me/api/portraits/lego/1.jpg"
                      class="align-self-start mr-3 img-fluid"
                      style="width:34px; hight:34px;"
                    >
                  </div>
                  <div>
                    <img
                      src="https://randomuser.me/api/portraits/lego/1.jpg"
                      class="align-self-start mr-3 img-fluid"
                      style="width:34px; hight:34px;"
                    >
                  </div>
                  <div>
                    <img
                      src="https://randomuser.me/api/portraits/lego/1.jpg"
                      class="align-self-start mr-3 img-fluid"
                      style="width:34px; hight:34px;"
                    >
                  </div>
                  <div>
                    <img
                      src="https://randomuser.me/api/portraits/lego/1.jpg"
                      class="align-self-start mr-3 img-fluid"
                      style="width:34px; hight:34px;"
                    >
                  </div>
                  <div>
                    <img
                      src="https://randomuser.me/api/portraits/lego/1.jpg"
                      class="align-self-start mr-3 img-fluid"
                      style="width:34px; hight:34px;"
                    >
                  </div>
                  <div>
                    <img
                      src="https://randomuser.me/api/portraits/lego/1.jpg"
                      class="align-self-start mr-3 img-fluid"
                      style="width:34px; hight:34px;"
                    >
                  </div>
                  <div>
                    <img
                      src="https://randomuser.me/api/portraits/lego/1.jpg"
                      class="align-self-start mr-3 img-fluid"
                      style="width:34px; hight:34px;"
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="ig-block bg-white p-3">
            <div class="ig-header d-flex justify-content-between mb-3">
              <div class="d-flex">
                <div class="ig-sticker-blcok d-flex justify-content-center align-items-center">
                  <div class="ig-sticker banner"></div>
                </div>
                <div class="ml-3">
                  <p class="mb-0 font-weight-bold">Fleshy_trip</p>
                  <p class="mb-0">Succulents paradise</p>
                </div>
              </div>
              <div class="btn btn-primary h6">查看個人檔案</div>
            </div>
            <div class="ig-body">
              <div class="ig-img banner"></div>
            </div>
            <div class="mt-3">
              <p class="text-primary">到 Instergram 查看更多內容</p>
              <div>
                <div class="d-flex justify-content-between">
                  <span>
                  <i class="far fa-heart fa-2x mr-3"></i>
                  <i class="far fa-comment fa-2x mr-3"></i>
                  <i class="far fa-share-square fa-2x mr-3"></i>
                  </span>
                  <i class="far fa-bookmark fa-2x"></i>
                </div>
                <hr>
                <div class="d-flex justify-content-between">
                  <p class="text-secondary">新增留言 ......</p>
                  <i class="fab fa-instagram fa-2x"></i>
                </div>
              </div>
            </div>
          </div>
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
  </div>
</template>

<style lang="scss" scoped>

.aboutus-img{
  background-image: url('../assets/aboutus.jpg');
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

    @media (max-width: 768px) {
      display: none;
    }
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

.yeartxt {
  position: relative;
  border-radius: 0.5rem;
  font-family: "Noto Serif TC", serif;

  & > div {
    position: absolute;
    left: 20px;
    bottom: 20px;
  }
}

.best {
  @media (max-width: 768px) {
    background-position: left center;
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

.fb-block {
  border-radius: 0.25rem;
  .fb-block-img {
    height: 150px;
    background-image: url("https://images.unsplash.com/photo-1463936575829-25148e1db1b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1390&q=80");
    .fb-sticker {
      width: 80px;
      height: 80px;
      position: relative;
      &::before {
        content: "";
        display: block;
        position: absolute;
        width: 72px;
        height: 72px;
        border: 1px solid #ccc;
      }
    }
  }
}

.ig-block {
  border-radius: 0.25rem;
  .ig-header {
    .ig-sticker-blcok {
      width: 40px;
      height: 40px;
      border: 2px solid #86c166;
      border-radius: 500px;

      .ig-sticker {
        width: 34px;
        height: 34px;
        border-radius: 500px;
        background-image: url("https://images.unsplash.com/photo-1516071272649-2631341fe1f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
      }
    }
  }
  .ig-body {
    .ig-img {
      height: 200px;
      background-image: url("https://images.unsplash.com/photo-1522026883130-77460b2a468f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80");
    }
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
</style>

<script>
export default {
  data() {
    return {
      year: '2017', // 年份類別控制
    };
  },
  methods: {
    getYear(num) {
      this.year = num;
    },
  },
};
</script>
