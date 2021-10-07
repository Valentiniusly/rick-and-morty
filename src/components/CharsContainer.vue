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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  justify-content: space-between;
  grid-gap: 20px;
}

@media screen and (max-width: 768px) {
  .chars-container {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 15px;
  }
}

@media screen and (max-width: 576px) {
  .chars-container {
    grid-template-columns: repeat(auto-fill, 100%);
  }
}
</style>
