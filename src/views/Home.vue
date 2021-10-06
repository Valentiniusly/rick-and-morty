<template>
  <CharsFilter v-model="filter" />
  <CharsContainer :characters="characters || []" />
  <Loader v-if="loading" />
  <Button @click="addCharacters" :disabled="loading">Load more</Button>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useStore } from 'vuex';
import CharsContainer from '../components/CharsContainer';
import Loader from '../components/Loader';
import Button from '../components/Button';
import CharsFilter from '../components/CharsFilter';
export default {
  components: { CharsContainer, Loader, Button, CharsFilter },
  setup() {
    const store = useStore();
    const loading = computed(() => store.getters['loading']);
    const filter = ref({});

    onMounted(async () => {
      if (!store.getters['characters'].length) {
        await store.dispatch('loadCharacters');
      }
    });
    onUnmounted(() => {
      store.commit('setLoading', false);
    });

    const addCharacters = async () => {
      await store.dispatch('loadMoreCharacters');
    };

    const characters = computed(() =>
      store.getters['characters']
        .filter((char) => {
          if (filter.value.name) {
            return char.name.toLowerCase().includes(filter.value.name);
          }
          return char;
        })
        .filter((char) => {
          if (filter.value.status) {
            return char.status.toLowerCase() === filter.value.status;
          }
          return char;
        })
    );

    return {
      characters,
      loading,
      addCharacters,
      filter,
    };
  },
};
</script>
<style lang="scss"></style>
