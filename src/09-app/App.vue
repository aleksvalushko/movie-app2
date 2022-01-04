<template>
  <div id="app">
    <the-header />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import TheHeader from './views/TheHeader'

export default {
  name: 'App',
  components: { TheHeader }
}
</script>

<style lang="scss">
body  {
  margin: 0;
}

a  {
  text-decoration:none;
}

li {
  list-style-type: none; /* Убираем маркеры */
}

ul {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
