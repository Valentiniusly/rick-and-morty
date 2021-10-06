<template>
  <Loader v-if="loading" />
  <CharCard :char="character" single="true" />
</template>

<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import CharCard from '../components/CharCard';
import Loader from '../components/Loader';
export default {
  components: { CharCard, Loader },
  setup() {
    const store = useStore();
    const route = useRoute();
    const loading = computed(() => store.getters['loading']);

    onMounted(async () => {
      await store.dispatch('loadCharacter', route.params.id);
    });

    const character = computed(() => store.getters['character']);

    return {
      character,
      loading,
    };
  },
};
</script>
<style lang="scss"></style>
