<template>
  <div>
    <div class="text-right mt-4">
      <button class="btn btn-primary" @click="openCouponModal(true)">建立新優惠卷</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>優惠劵名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }} %</td>
          <td>{{ item.due_date }}</td>
          <td>
            <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <button
              class="btn btn-outline-primary btn-sm mr-1"
              @click="openCouponModal(false, item)">編輯</button>
            <button
              class="btn btn-outline-danger btn-sm"
              @click="openDelModal(item)">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination
      class="d-flex justify-content-center"
      :pages="pagination"
      @getThisPage="getCoupons"/>
    <!-- 新增優惠卷 Model -->
    <div
      class="modal fade"
      id="couponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-md" role="document">
        <div class="modal-content border-0">
          <div class="modal-header text-dark">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>優惠劵細節</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-row">
              <div class="form-group col-md-12">
                <label for="origin_price">優惠劵名稱</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  placeholder="請輸入優惠劵名稱"
                  v-model="tempCoupon.title"
                >
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="origin_price">折扣數</label>
                <input
                  type="number"
                  class="form-control"
                  id="percent"
                  placeholder="請輸入折價數"
                  v-model="tempCoupon.percent"
                >
              </div>
              <div class="form-group col-md-6">
                <label for="origin_price">到期日</label>
                <input
                  type="date"
                  class="form-control"
                  id="due_date"
                  v-model="tempCoupon.due_date"
                >
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-12">
                <label for="origin_price">折價卷代碼</label>
                <input
                  type="text"
                  class="form-control"
                  id="code"
                  placeholder="請輸入折價卷代碼"
                  v-model="tempCoupon.code"
                >
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="is_enabled"
                    v-model="tempCoupon.is_enabled"
                    :true-value="1"
                    :false-value="0"
                  >
                  <label class="form-check-label" for="is_enabled">是否啟用</label>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary"
            @click="updateCoupon">確定</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 刪除產品 Modal -->
    <div
      class="modal fade"
      id="delCoupontModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除優惠劵</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ this.tempCoupon.title }}</strong> 優惠劵(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="delCoupon">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Pagination from '@/components/Pagination.vue';

export default {
  data() {
    return {
      tempCoupon: {},
    };
  },
  methods: {
    getCoupons(page = 1) {
      this.$store.dispatch('backstageModule/getCoupons', page);
    },
    openCouponModal(isNew, item) {
      const vm = this;
      vm.tempCoupon = Object.assign({}, item);
      this.$store.dispatch('backstageModule/openCouponModal', { isNew, item });
    },
    openDelModal(item) {
      const vm = this;
      vm.tempCoupon = Object.assign({}, item);
      this.$store.dispatch('backstageModule/openCouponDelModal', item);
    },
    updateCoupon() {
      const vm = this;
      this.$store.dispatch('backstageModule/updateCoupon', vm.tempCoupon);
    },
    ...mapActions('backstageModule', ['delCoupon']),
  },
  created() {
    this.getCoupons();
  },
  computed: {
    ...mapGetters('backstageModule', ['pagination', 'coupons', 'isNew']),
  },
  components: {
    Pagination,
  },
};
</script>
