<template>
  <div>
    <Alert/>
    <div class="vld-parent">
      <loading :active.sync="isLoading"></loading>
    </div>
    <div class="d-flex flex-column align-items-center justify-content-center vh-100">
      <header class="d-flex justify-content-center mb-5 login-header w-50">
        <router-link to="/index">
          <img src="../assets/succulentlogo.svg" alt width="200px">
        </router-link>
        <div class="cloud w-100">
          <img src="../assets/cloud.svg" alt>
        </div>
      </header>
      <form class="form-signin" @submit.prevent="signin">
        <div class="h4 title-txt text-orange text-center mb-3">請登入管理員帳號</div>
        <div class="mb-5">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input
            type="email"
            name="email"
            id="email"
            class="form-control"
            placeholder="Email address"
            v-model="user.username"
            v-validate="'required|email'"
            :class="{ 'is-invalid': errors.has('email')}"
          >
          <span class="text-danger" v-if="errors.has('email')">{{ errors.first('email')}}</span>

          <label for="inputPassword" class="sr-only">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            class="form-control"
            placeholder="Password"
            v-model="user.password"
            v-validate="'required'"
            :class="{ 'is-invalid': errors.has('password')}"
          >
          <span class="text-danger" v-if="errors.has('password')">尚未輸入密碼</span>
        </div>
        <button
          class="btn btn-lg btn-warning btn-block"
          type="submit"
          @click.prevent="signin"
        >Sign in</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Alert from '../components/AlertMessage.vue';

export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signin() {
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`;
      const vm = this;
      this.$validator.validate().then((valid) => {
        if (valid) {
          this.$http.post(api, vm.user).then((response) => {
            this.$store.commit('LOADING', true, { root: true });
            if (response.data.success) {
              vm.$router.push('/backstage/back_products');
              this.$store.dispatch('updateMessage', { message: '已成功登入', status: 'orange' }, { root: true });
            }
          });
        } else {
          this.$store.commit('LOADING', false, { root: true });
        }
      });
    },
  },
  computed: {
    ...mapGetters(['isLoading']),
  },
  components: {
    Alert,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.login-header {
  position: relative;
  z-index: 0;

  .cloud {
    position: absolute;
    left: 0;
    z-index: -1;
    animation-name: cloudFade;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes cloudFade {
    0% {
      transform: translateX(-3rem);
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
      transform: translateX(3rem);
      opacity: 0;
    }
  }
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"],
.form-signin input[type="password"] {
  margin-bottom: 5px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
