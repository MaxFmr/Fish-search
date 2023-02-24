<template>
  <Header />
  <div class="details">
    <div class="details__img"></div>
    <div class="details__content">
      <h2 class="details__title">
        {{ details["Species Name"] }}
      </h2>
      <p class="details__text"></p>
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
