<template>
  <div class="container">
    <input v-model="state.searchText" @keyup.enter="fetchData" />

    <Card
      v-for="specie in state.species"
      :key="specie['Scientific Name']"
      :img="specie['Species Illustration Photo']['src']"
      :name="specie['Species Name']"
    >
      <h1>test</h1>
    </Card>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, onMounted } from "vue";
import Card from "../card/card.vue";
import "./CardList.style.scss";

export default defineComponent({
  name: "CardList",
  components: {
    Card,
  },

  setup() {
    const state = reactive({
      species: [],
      searchText: "",
    });

    const fetchData = async () => {
      const response = await fetch(
        `https://www.fishwatch.gov/api/species${
          state.searchText &&
          "/" + state.searchText.toLocaleLowerCase().replace(" ", "-")
        }`
      );
      const data = await response.json();
      state.species = data;
      console.log(state.species);
      console.log(state.searchText);
    };

    onMounted(() => {
      fetchData();
    });

    return {
      state,
      fetchData,
    };
  },
});
</script>
