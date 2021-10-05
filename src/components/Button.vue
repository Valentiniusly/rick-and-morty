<template>
  <button :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['disabled'],
  setup() {},
};
</script>

<style lang="scss" scoped>
button {
  background-color: chartreuse;
}
</style>
