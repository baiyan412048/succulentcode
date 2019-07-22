<template>
  <div>
    <Indexnavbar/>
    <router-view></router-view>
    <Indexfooter/>
  </div>
</template>

<script>
import Indexnavbar from './IndexNavbar.vue';
import Indexfooter from './IndexFooter.vue';

export default {
  components: {
    Indexnavbar,
    Indexfooter,
  },
};
</script>
