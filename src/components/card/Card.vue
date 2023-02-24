<template>
  <router-link :to="{ name: 'details', params: { name } }">
    <div class="card">
      <div class="card__img">
        <img :src="img" alt="" />
        <slot></slot>
      </div>
      <div class="card__content">
        <h2 class="card__title">{{ name }}</h2>
        <p class="card__text"></p>
      </div>
    </div>
  </router-link>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Card",
    props: { img: String, name: String },
  });
</script>

<style lang="scss" scoped>
  @import "./Card.style.scss";
</style>
