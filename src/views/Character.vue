<template>
  <Loader v-if="loading" />
  <CharCard v-else :char="character" single />
  <router-link to="/" custom v-slot="{ navigate }">
    <Button @click="navigate">Home</Button>
  </router-link>
</template>

<script>
import { onMounted, onUnmounted, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import CharCard from '../components/CharCard';
import Loader from '../components/Loader';
import Button from '../components/Button';
export default {
  components: { CharCard, Loader, Button },
  setup() {
    const store = useStore();
    const route = useRoute();
    const loading = computed(() => store.getters['loading']);

    onMounted(async () => {
      await store.dispatch('character/loadCharacter', route.params.id);
    });
    onUnmounted(() => {
      store.commit('character/setCharacter', {});
    });

    const character = computed(() => store.getters['character/character']);

    return {
      character,
      loading,
    };
  },
};
</script>
<style lang="scss"></style>
