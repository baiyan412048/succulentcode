<template>
  <div class="container">
    <table class="table mt-4">
      <thead>
        <tr>
          <th>購買時間</th>
          <th class="d-none d-md-block">Email</th>
          <th>購買品項</th>
          <th>應付金額</th>
          <th>是否付款</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item.id">
          <td>{{ item.create_at | date }}</td>
          <td class="d-none d-md-block">{{ item.user.email }}</td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} — {{ product.qty }} / {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td>{{ item.total | currency }}</td>
          <td>
            <span v-if="item.is_paid" class="text-success">已完成付款</span>
            <span v-else class="text-danger">尚未付款</span>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination
      class="d-flex justify-content-center"
      :pages="pagination"
      @getThisPage="getOrders"
      v-if="pagination.total_pages > 1"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Pagination from '../components/Pagination.vue';

export default {
  methods: {
    getOrders(page = 1) {
      this.$store.dispatch('backstageModule/getOrders', page);
    },
  },
  created() {
    this.getOrders();
  },
  computed: {
    ...mapGetters('backstageModule', ['pagination', 'orders']),
  },
  components: {
    Pagination,
  },
};
</script>
