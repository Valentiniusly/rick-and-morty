<template>
  <div class="filter">
    <input v-model="name" type="text" />
    <select v-model="status" :selected="status">
      <option value="" disabled>Status</option>
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
      <option value="unknown">Unknown</option>
    </select>
    <Button v-if="isActive" @click="clear">Clear</Button>
  </div>
</template>

<script>
import { ref, watch, computed } from 'vue';
import Button from '../components/Button';

export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  components: { Button },

  setup(_, { emit }) {
    const name = ref('');
    const status = ref('');

    watch([name, status], (values) => {
      emit('update:modelValue', {
        name: values[0],
        status: values[1],
      });
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

<style lang="scss" scoped></style>
