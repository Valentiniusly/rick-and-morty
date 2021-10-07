<template>
  <div class="center">
    <h1>You are lost</h1>
    <router-link to="/" custom v-slot="{ navigate }">
      <Button @click="navigate">Go home</Button>
    </router-link>
  </div>
</template>

<script>
import Button from '../components/Button';
export default {
  components: { Button },
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.center {
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -70%);
  h1 {
    color: #fff;
  }
}
</style>
