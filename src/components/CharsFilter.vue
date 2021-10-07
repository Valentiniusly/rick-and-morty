<template>
  <div class="filter">
    <div class="inputs">
      <input v-model="name" type="text" />
      <select v-model="status" :selected="status">
        <option value="" disabled>Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
    <Button v-if="isActive" @click="clear">Clear</Button>
  </div>
</template>

<script>
import { ref, watch, computed } from 'vue';
import { useStore } from 'vuex';
import Button from '../components/Button';

export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  components: { Button },

  setup(_, { emit }) {
    const store = useStore();
    const filter = store.getters['character/filter'];
    const name = ref(filter.name);
    const status = ref(filter.status || '');

    watch([name, status], (values) => {
      const filter = {
        name: values[0],
        status: values[1],
      };
      emit('update:modelValue', filter);
      store.commit('character/setFilter', filter);
    });

    const isActive = computed(() => name.value || status.value);

    return {
      name,
      status,
      isActive,
      clear() {
        name.value = '';
        status.value = '';
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.filter {
  margin: 20px 0;
  .inputs {
    display: flex;
    justify-content: center;
    input {
      font-size: 20px;
      padding: 0.2em 0.4em;
      border: none;
      outline: none;
      border-radius: 5px;
      margin: 0 8px;
      width: 100%;
      max-width: 300px;
      &:focus {
        outline: 3px solid #4d9142;
      }
    }
    select {
      cursor: pointer;
      font-size: 18px;
      border-radius: 5px;
      border: none;
      outline: none;
      width: 80px;
    }
  }
}
</style>
