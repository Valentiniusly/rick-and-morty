<template>
  <div class="filter">
    <div class="inputs">
      <input v-model="name" type="text" placeholder="Character" />
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
        name: values[0].toLowerCase(),
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
    gap: 8px;
    input {
      font-size: 20px;
      padding: 6px 12px;
      border: none;
      outline: none;
      border-radius: 5px;
      width: 100%;
      max-width: 300px;
      background: #fff;
      color: #000;
      transition: all 0.1s;
      -webkit-appearance: none;
      &:focus {
        box-shadow: 0 0 0 3px #4d9142;
      }
    }
    select {
      cursor: pointer;
      font-size: 18px;
      border-radius: 5px;
      padding-left: 5px;
      border: none;
      outline: none;
      background: #fff;
      color: #000;
    }
  }
}
</style>
