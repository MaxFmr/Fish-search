<template>
  <div class="container">
    <div v-for="specie in species" :key="specie['Scientific Name']">
      <Card
        :img="specie['Species Illustration Photo']['src']"
        :name="specie['Scientific Name']"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Card from "../card/card.vue";
import "./CardList.style.scss";

export default defineComponent({
  name: "CardList",
  components: {
    Card,
  },
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
