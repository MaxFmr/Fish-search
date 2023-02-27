<template>
  <Header />
  <div class="details">
    <button @click="$router.push('/')">Back to Fish Search</button>

    <div class="details__img">
      <img :src="details['Species Illustration Photo'].src" alt="" />
    </div>
    <div class="details__content">
      <h2 class="details__title">
        {{ details["Species Name"] }}
      </h2>
      <span class=""> Scientific Name : {{ details["Scientific Name"] }} </span>
      <span v-html="details[`Biology`]" class="details__text"></span>
    </div>
  </div>
</template>
<script lang="ts">
  import Header from "../Header/Header.vue";
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "Details",

    components: {
      Header,
    },
    data() {
      return {
        details: {
          "Species Name": "",
          "Scientific Name": "",
          "Species Illustration Photo": {
            src: "",
          },
          Biology: "",
        },
        name: this.$route.params.name as string,
      };
    },
    mounted() {
      fetch(
        `https://www.fishwatch.gov/api/species/${this.name
          .toLocaleLowerCase()
          .replace(" ", "-")}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.details = data[0];
          console.log(this.details);
        });
    },
  });
</script>
<style lang="scss" scoped>
  @import "./Details.style.scss";
</style>
