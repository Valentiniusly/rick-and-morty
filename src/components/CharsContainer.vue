<template>
  <div class="chars-container">
    <CharCard v-for="char in characters" :key="char.id" :char="char" />
  </div>
</template>

<script>
import CharCard from '../components/CharCard';
export default {
  components: { CharCard },
  props: ['characters'],
  setup() {},
};
</script>

<style lang="scss" scoped>
.chars-container {
  width: 100%;
  background: red;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  justify-content: space-between;
  grid-gap: 20px;
}
</style>
