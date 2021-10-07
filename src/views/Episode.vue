<template>
  <router-link to="/" custom v-slot="{ navigate }">
    <Button @click="navigate">Home</Button>
  </router-link>
  <Loader v-if="loading" />
  <EpisodeCard :episode="episode" />
</template>

<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import EpisodeCard from '../components/EpisodeCard';
import Loader from '../components/Loader';
import Button from '../components/Button';

export default {
  components: { EpisodeCard, Loader, Button },
  setup() {
    const store = useStore();
    const route = useRoute();
    const loading = computed(() => store.getters['loading']);
    const episode = computed(() => store.getters['episode/episode']);

    onMounted(async () => {
      await store.dispatch('episode/loadEpisode', route.params.id);
    });

    return { episode, loading };
  },
};
</script>
<style lang="scss"></style>
