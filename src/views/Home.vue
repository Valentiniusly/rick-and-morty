<template>
  <CharsFilter v-model="filter" />
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
import CharsFilter from '../components/CharsFilter';
export default {
  components: { CharsContainer, Loader, Button, CharsFilter },
  setup() {
    const store = useStore();
    const loading = ref(false);
    const filter = ref({});

    onMounted(async () => {
      if (!store.getters['characters'].length) {
        loading.value = true;
        await store.dispatch('loadCharacters');
        loading.value = false;
      }
    });

    const addCharacters = async () => {
      loading.value = true;
      await store.dispatch('loadMoreCharacters');
      loading.value = false;
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
