<template>
  <div>
    <div class="container">
      <header class="d-flex justify-content-center pt-3 mb-3">
        <router-link to="/index">
          <img src="../assets/succulentlogo.svg" alt width="200px">
        </router-link>
      </header>
      <div class="nav-scroller py-1 mb-3">
        <nav class="nav row align-items-center">
          <div class="info-nav col d-flex justify-content-center flex-wrap order-md-1">
            <router-link
            class="nav-link p-2 text-muted mx-2 mb-2 my-md-0 h6"
            to="/abousus">關於我們</router-link>
            <router-link
            class="nav-link p-2 text-muted mx-2 mb-2 my-md-0 h6"
            to="/blog">多肉事紀</router-link>
            <router-link
              class="nav-link p-2 text-muted mx-2 mb-2 my-md-0 h6"
              to="/product"
            >所有商品</router-link>
            <router-link
            class="nav-link p-2 text-muted mx-2 mb-2 my-md-0 h6"
            to="/giftpage">客製禮品</router-link>
          </div>
          <div class="col-md-3 col-2 d-flex justify-content-star align-items-center order-md-0">
            <router-link class="btn btn-sm btn-outline-success px-3" to="/checkout_order">
              <span class="d-none d-md-block">查看訂單</span>
              <i class="fas fa-clipboard-list d-md-none"></i>
            </router-link>
          </div>
          <div class="col-md-3 col-2 d-flex justify-content-end align-items-center order-md-2">
            <router-link class="btn btn-sm btn-outline-success ml-3 px-3" to="/admin/products">
              <span class="d-none d-md-block">管理員後台!</span>
              <i class="far fa-user d-md-none"></i>
            </router-link>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info-nav {
  .nav-link {
    transition: all 0.3s;

    &:hover {
      box-shadow: 0px 2px rgb(59, 66, 53);
    }
  }
}
</style>
