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
  display: block;
  margin: 0 auto;
  background-color: chartreuse;
}
</style>
