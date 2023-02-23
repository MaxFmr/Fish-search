<template>
  <div class="card">
    <div class="card__img">
      <img :src="img" alt="" />
    </div>
    <div class="card__content">
      <h2 class="card__title">{{ name }}</h2>
      <p class="card__text"></p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import "./Card.style.scss";

export default defineComponent({
  name: "Card",
  props: { img: String, name: String },
});
</script>
