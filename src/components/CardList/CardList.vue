<template>
  <Header />
  <SearchBar v-model:searchText="state.searchText" :fetchData="fetchData" />

  <div class="container">
    <Card
      v-for="specie in state.species"
      :key="specie['Scientific Name']"
      :img="specie['Species Illustration Photo']['src']"
      :name="specie['Species Name']"
    >
    </Card>
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive, onMounted } from "vue";
  import Card from "../card/Card.vue";
  import SearchBar from "../SearchBar/SearchBar.vue";
  import Header from "../Header/Header.vue";

  export default defineComponent({
    name: "CardList",
    components: {
      Card,
      SearchBar,
      Header,
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
<style lang="scss" scoped>
  @import "./CardList.style.scss";
</style>
