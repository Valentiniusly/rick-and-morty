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
  font-size: 20px;
  display: block;
  margin: 20px auto;
  background-color: #4d9142;
  color: #fff;
  padding: 10px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  border-radius: 10px;
}
</style>
