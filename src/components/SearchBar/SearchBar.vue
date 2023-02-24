<template>
  <input v-model="text" @keyup.enter="fetchData" />
</template>
<script lang="ts">
import { PropType, defineComponent } from "vue";
export default defineComponent({
  name: "SearchBar",
  props: {
    searchText: String,
    fetchData: Function as PropType<() => void>,
  },

  computed: {
    text: {
      get(): string {
        return this.searchText as string;
      },
      set(value: string) {
        this.$emit("update:searchText", value);
      },
    },
  },
  methods: {
    fetchDataProp() {
      this.fetchData?.();
    },
  },
});
</script>

<style lang="scss" scoped>
@import "./SearchBar.style.scss";
</style>
