<template>
  <div>
    <div class="siderbar w-100">
      <nav class="d-md-flex flex-column align-items-center bg-white p-4 siderblock">
        <div class="d-flex d-md-block align-items-center">
          <router-link class="mb-md-3 mr-auto mr-md-0" to="/index">
            <img src="../assets/succulentlogo.svg" alt width="200px">
          </router-link>
          <button
            class="navbar-toggler d-md-none d-block"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="h3 mb-0 text-success">
              <i class="fas fa-bars"></i>
            </span>
          </button>
        </div>
        <div class="d-md-flex collapse flex-column w-100 mt-5" id="navbarToggler">
          <div class="text-dark mb-4 h5">管理員</div>
          <ul class="navbar-nav flex-column">
            <li class="mb-4 h6">
              <router-link class="text-success" to="/backstage/back_products">產品列表</router-link>
            </li>
            <li class="mb-4 h6">
              <router-link class="text-success" to="/backstage/back_orderList">訂單列表</router-link>
            </li>
            <li class="mb-5 h6">
              <router-link class="text-success" to="/backstage/back_coupon">優惠卷</router-link>
            </li>
          </ul>
          <div class="ml-auto">
            <button class="btn btn-info" type="button" @click="signout">登出</button>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.siderbar {
  position: relative;

  @media (min-width: 767px) {
    .siderblock {
      position: fixed;
      top: 0;
      bottom: 0;
    }
  }
}
</style>

<script>
import { mapGetters } from 'vuex';

export default {
  methods: {
    signout() {
      const api = `${process.env.VUE_APP_APIPATH}/logout`;
      const vm = this;
      this.$store.dispatch('LOADING', true);
      this.$http.post(api, vm.user).then((response) => {
        this.$store.dispatch('LOADING', false);
        if (response.data.success) {
          vm.$router.push('/index');
        }
      });
    },
  },
  computed: {
    ...mapGetters(['isLoading']),
  },
};
</script>
