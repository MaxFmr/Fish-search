<template>
  <Header></Header>
</template>

<script lang="ts">
import Header from "./components/Header/Header.vue";
import { Vue } from "vue-facing-decorator";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
  },
});
</script>
