<template>
  <div class="container">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/character/1">Character</router-link>
      <router-link to="/episode/1">Episode</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;

    &.active {
      color: #42b983;
    }
  }
}
</style>
