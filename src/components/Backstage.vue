<template>
  <div>
    <Alert/>
    <div class="container-fluid px-0">
      <div class="row no-gutters">
        <Sidebar class="col-md-2"/>
        <main class="col-md-10">
          <router-view class="px-4"/>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './BackSidebar';
import Alert from './AlertMessage';

export default {
  components: {
    Sidebar,
    Alert,
  },
};
</script>
