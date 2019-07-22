<template>
  <div class="py-5">
    <div class="container">
      <div class="newopen mx-auto my-5">
        <div class="logo"></div>
        <div class="icon d-none d-md-block">
          <div class="obj s3">
            <span></span>
          </div>
          <div class="obj s2">
            <span></span>
          </div>
          <div class="obj s1">
            <span></span>
          </div>
          <div class="obj s4">
            <span></span>
          </div>
          <div class="obj s5">
            <span></span>
          </div>
          <div class="obj s6">
            <span></span>
          </div>
          <div class="obj s7">
            <span></span>
          </div>
          <div class="obj s8">
            <span></span>
          </div>
          <div class="obj s9">
            <span></span>
          </div>
          <div class="obj s10">
            <span></span>
          </div>
          <div class="obj s11">
            <span></span>
          </div>
        </div>
        <div class="flag"></div>
        <div class="background d-none d-lg-block"></div>
        <section class="content font-letter">
          <div class="freeshopfee row justify-content-center mx-auto">
            <div class="col-12 col-md-9 d-flex justify-content-center flex-wrap flex-md-nowrap">
              <h3 class="title text-success font-weight-bold mr-md-4 h2 mb-4 mb-md-0">慶開幕！免運費！</h3>
              <div class="info bg-warning text-dark p-4">
                <p>
                  全館慶開幕，所有商品通通
                  <span class="h4 text-danger">免運費</span>
                </p>
                <p>活動時間：即日起 ～ 2045 / 12 / 31</p>
              </div>
            </div>
          </div>
          <div class="costcode row justify-content-center mx-auto">
            <div class="col-12 col-md-10 d-flex justify-content-center flex-wrap flex-md-nowrap">
              <div class="title d-flex flex-column justify-content-between
                order-md-1 ml-md-4 mb-4 mb-md-0">
                <h3 class="text-success font-weight-bold h2">輸入優惠代碼享折扣！</h3>
                <router-link class="btn btn-outline-success mt-4" to="/product">立即購！</router-link>
              </div>
              <div class="info bg-warning text-dark p-4">
                <p>
                  優惠卷代碼：
                  <span class="h4 text-danger">newopen168</span>
                </p>
                <p>
                  結帳時輸入優惠代碼，立即享
                  <span class="h3 text-danger">7</span>折 優惠！
                </p>
              </div>
            </div>
          </div>
          <div class="freegift row justify-content-center mx-auto">
            <div class="col-12 col-md-10 d-flex justify-content-center flex-wrap flex-md-nowrap">
              <div class="title d-flex flex-column justify-content-between mr-md-4 mb-4 mb-md-0">
                <h3 class="text-success font-weight-bold h2">你送禮！我再送！</h3>
                <router-link class="btn btn-outline-success mt-4" to="/giftpage">我想送！</router-link>
              </div>
              <div class="info bg-warning text-dark p-4">
                <p>現在只要購買客製禮品</p>
                <p>
                  即送
                  <span class="h4 text-danger">小型多肉 1 盆</span>！
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.newopen {
  position: relative;
  max-width: 1110px;
  height: 1400px;

  .logo {
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 3;
    background-image: url("../assets/newopen_logo.svg");
    background-size: cover;
    background-repeat: no-repeat;
    width: 300px;
    height: 129px;
    animation: updown1 3s ease-in-out alternate infinite;
  }

  .icon {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;

    .obj {
      position: absolute;
      top: 50%;
      left: 50%;
      transform-origin: left top;
      width: 100px;
      height: 100px;

      &:nth-child(1) {
        margin: -40% 0 0 -47%;
      }

      &:nth-child(2) {
        margin: -50% 0 0 30%;
      }

      &:nth-child(3) {
        margin: -12% 0 0 -42%;
      }

      &:nth-child(4) {
        margin: 5% 0 0 -20%;
      }

      &:nth-child(5) {
        margin: -19% 0 0 32%;
      }

      &:nth-child(6) {
        margin: 15% 0 0 -47%;
      }

      &:nth-child(7) {
        margin: 40% 0 0 -40%;
      }

      &:nth-child(8) {
        margin: 20% 0 0 -10%;
      }

      &:nth-child(9) {
        margin: 8% 0 0 15%;
      }

      &:nth-child(10) {
        margin: 18% 0 0 38%;
      }

      &:nth-child(11) {
        margin: 45% 0 0 45%;
      }

      & span {
        display: block;
        transform: translate(-50%, -50%);

        &::before {
          content: "";
          display: block;
          padding-top: 100%;
          background: url("../assets/newopen_icon.png") no-repeat;
          background-size: cover;
        }
      }
    }

    .s1 {
      & span {
        &::before {
          background-position: 0% top;
          animation: rotate1 1.5s ease alternate infinite;
        }
      }
    }

    .s2 {
      & span {
        &::before {
          background-position: 10% top;
          animation: rotate2 2s ease alternate infinite;
        }
      }
    }

    .s3 {
      & span {
        &::before {
          background-position: 20% top;
          animation: rotate1 1.5s ease alternate infinite;
        }
      }
    }

    .s4 {
      & span {
        &::before {
          background-position: 30% top;
          animation: rotate1 1.5s ease alternate infinite;
        }
      }
    }

    .s5 {
      & span {
        &::before {
          background-position: 40% top;
          animation: rotate1 1.5s ease alternate infinite;
        }
      }
    }

    .s6 {
      & span {
        &::before {
          background-position: 50% top;
          animation: rotate2 2s ease alternate infinite;
        }
      }
    }

    .s7 {
      & span {
        &::before {
          background-position: 60% top;
          animation: rotate1 1.5s ease alternate infinite;
        }
      }
    }

    .s8 {
      & span {
        &::before {
          background-position: 70% top;
          animation: rotate2 2s ease alternate infinite;
        }
      }
    }

    .s9 {
      & span {
        &::before {
          background-position: 80% top;
          animation: rotate2 2s ease alternate infinite;
        }
      }
    }

    .s10 {
      & span {
        &::before {
          background-position: 90% top;
          animation: rotate2 2s ease alternate infinite;
        }
      }
    }

    .s11 {
      & span {
        &::before {
          background-position: 100% top;
          animation: rotate1 1.5s ease alternate infinite;
        }
      }
    }
  }

  .flag {
    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: 1;
    width: 300px;
    height: 75px;
    transform: translateX(-50%);
    background-image: url("../assets/newopen_newopen.svg");
    background-size: cover;
    animation: updown2 2s ease-in-out alternate infinite;
  }

  .background {
    position: absolute;
    top: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-image: url("../assets/newopen_backline.png");
    background-size: cover;
    background-position-y: center;
    background-position-x: right;
  }

  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 2;

    .freeshopfee {
      position: absolute;
      top: 20%;
      width: 100%;

      @media (max-width: 767px) {
        top: 15%;
      }

      .title {
        transition: all ease-in-out 0.3s;

        &:hover {
          transform: translateY(-10px);
        }
      }

      .info {
        position: relative;
        border-radius: 1rem;
        font-size: 20px;
        transition: all ease-in-out 0.3s;

        @media (max-width: 767px) {
          font-size: 18px;
        }

        &:hover {
          transform: translateY(-10px);
        }

        & p {
          line-height: 36px;
          margin: 0;

          @media (max-width: 767px) {
            line-height: 28px;
          }
        }
      }
    }

    .costcode {
      position: absolute;
      top: 42%;
      width: 100%;

      @media (max-width: 767px) {
        top: 36%;
      }

      .title {
        & > h3 {
          transition: all ease-in-out 0.3s;

          &:hover {
            transform: translateY(-10px);
          }
        }

        & > a {
          transition: all ease-in-out 0.3s;

          &:hover {
            transform: translateY(-10px);
          }
        }
      }

      .info {
        position: relative;
        border-radius: 1rem;
        font-size: 20px;
        transition: all ease-in-out 0.3s;

        @media (max-width: 767px) {
          font-size: 18px;
        }

        &:hover {
          transform: translateY(-10px);
        }

        & p {
          line-height: 36px;
          margin: 0;

          @media (max-width: 767px) {
            line-height: 28px;
          }
        }
      }
    }

    .freegift {
      position: absolute;
      top: 73%;
      width: 100%;

      @media (max-width: 767px) {
        top: 66%;
      }

      .title {
        & > h3 {
          transition: all ease-in-out 0.3s;

          &:hover {
            transform: translateY(-10px);
          }
        }

        & > a {
          transition: all ease-in-out 0.3s;

          &:hover {
            transform: translateY(-10px);
          }
        }
      }

      .info {
        position: relative;
        border-radius: 1rem;
        font-size: 20px;
        transition: all ease-in-out 0.3s;

        @media (max-width: 767px) {
          font-size: 18px;
        }

        &:hover {
          transform: translateY(-10px);
        }

        & p {
          line-height: 36px;
          margin: 0;

          @media (max-width: 767px) {
            line-height: 28px;
          }
        }
      }
    }
  }
}

@keyframes updown1 {
  0% {
    transform: translate(-49%, -10px);
  }
  100% {
    transform: translate(-51%, 10px);
  }
}

@keyframes updown2 {
  from {
    transform: translate(-50%, -10px);
  }
  to {
    transform: translate(-50%, 10px);
  }
}

@keyframes rotate1 {
  from {
    transform: rotate(-10deg);
  }
  to {
    transform: rotate(10deg);
  }
}

@keyframes rotate2 {
  from {
    transform: rotate(15deg);
  }
  to {
    transform: rotate(-15deg);
  }
}
</style>
