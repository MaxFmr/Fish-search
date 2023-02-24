<template>
  <Header />
  <div class="details">
    <div class="details__img"></div>
    <div class="details__content">
      <h2 class="details__title">{{ $route.params.name }}</h2>
      <p class="details__text"></p>
    </div>
  </div>
</template>
<script lang="ts">
  import Header from "../Header/Header.vue";
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "Details",
    props: {
      img: String,
      name: String,
    },
    components: {
      Header,
    },
  });
</script>
