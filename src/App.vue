<template>
  <div id="app">
    <Loading :active.sync="isLoading"></Loading>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./assets/all";

</style>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapGetters(['isLoading']),
  },
};
</script>
