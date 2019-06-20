<template>
  <div>
    <Indexnavbar/>
    <router-view></router-view>
    <Indexfooter/>
  </div>
</template>

<script>
import Indexnavbar from './IndexNavbar';
import Indexfooter from './IndexFooter';

export default {
  components: {
    Indexnavbar,
    Indexfooter,
  },
};
</script>
