<template>
  <div v-for="specie in species" :key="specie['Scientific Name']">
    <p>{{ specie["Scientific Name"] }}</p>
    <img
      :src="specie['Species Illustration Photo']['src']"
      :alt="specie['Species Illustration Photo']['src']"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CardList",
  data() {
    return {
      species: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch("https://www.fishwatch.gov/api/species")
        .then((response) => response.json())
        .then((data) => {
          this.species = data;
          console.log(this.species);
        });
    },
  },
});
</script>
