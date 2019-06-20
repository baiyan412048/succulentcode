<template>
  <div>
    <nav>
      <ul class="pagination">
        <li class="page-item" :class="{ 'disabled': !pages.has_next }">
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click.prevent="thisPage(pages.current_page - 1)"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for=" page in pages.total_pages" :pages="page" :key="page">
          <a class="page-link" href="#" @click="thisPage(page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ 'disabled': !pages.has_next }">
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click.prevent="thisPage(pages.current_page + 1)"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    pages: {
      type: Object,
    },
  },
  methods: {
    thisPage(page) {
      this.$emit('getThisPage', page);
    },
  },
};
</script>
