<template>
  <router-view></router-view>
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
