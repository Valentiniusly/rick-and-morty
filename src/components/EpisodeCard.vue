<template>
  <div class="episodeCard">
    <div class="info">
      <h2>{{ episode.name }}</h2>
      <p><b>Release date:</b>{{ episode.air_date }}</p>
    </div>
    <div class="chars">
      <h2>Characters</h2>
      <div class="images">
        <router-link
          v-for="char in chars"
          :key="char.id"
          :to="{ name: 'Character', params: { id: char.id, name: char.name } }"
        >
          <img :src="char.image" :alt="char.name" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
  props: ['episode'],

  setup() {
    const store = useStore();

    const chars = computed(() => store.getters['episode/chars']);

    return { chars };
  },
};
</script>

<style lang="scss">
.episodeCard {
  display: flex;
  .chars {
    flex-grow: 1;
  }
}
</style>
