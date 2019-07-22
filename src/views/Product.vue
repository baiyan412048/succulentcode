<template>
  <div>
    <Alert />
    <div class="container">
      <Mobilecart/>
      <div class="row">
        <ProductSidebar
          class="col-12 mb-md-5 mb-4"
          :class="{'col-md-3': cartList.total < 1,'col-md-4 ':cartList.total > 0}"
        />
        <ProductList class="col"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductSidebar from '../components/ProductSidebar.vue';
import ProductList from '../components/ProductList.vue';
import Mobilecart from '../components/Mobilecart.vue';
import Alert from '../components/AlertMessage.vue';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters('cartsModule', ['cartList']),
  },
  components: {
    ProductSidebar,
    ProductList,
    Mobilecart,
    Alert,
  },
};
</script>
