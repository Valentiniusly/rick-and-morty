<template>
  <Loader v-if="loading" />
  <EpisodeCard :episode="episode" />
</template>

<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import EpisodeCard from '../components/EpisodeCard';
import Loader from '../components/Loader';

export default {
  components: { EpisodeCard, Loader },
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
