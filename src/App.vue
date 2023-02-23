<template>
  <Header></Header>
  <CardList></CardList>
</template>

<script lang="ts">
import Header from "./components/Header/Header.vue";
import CardList from "./components/CardList/CardList.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    CardList,
  },
});
</script>
