<template>
  <CharsContainer :characters="characters || []" />
  <Loader v-if="loading" />
  <Button @click="addCharacters" :disabled="loading">Load more</Button>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import CharsContainer from '../components/CharsContainer';
import Loader from '../components/Loader';
import Button from '../components/Button';
export default {
  components: { CharsContainer, Loader, Button },
  setup() {
    const store = useStore();
    const loading = ref(false);

    onMounted(async () => {
      loading.value = true;
      await store.dispatch('loadCharacters');
      loading.value = false;
    });

    const addCharacters = async () => {
      loading.value = true;
      await store.dispatch('loadMoreCharacters');
      loading.value = false;
    };

    const characters = computed(() => store.getters['characters']);
    return {
      characters,
      loading,
      addCharacters,
    };
  },
};
</script>
<style lang="scss"></style>
