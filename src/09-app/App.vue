<template>
  <div id="app">
    <the-header />
    <div id="content">
      <div id="nav">
        <router-link to="/">
          Home
        </router-link>
        <router-link to="/about">
          About
        </router-link>
      </div>
      <div style="width: 100%;">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from '../07-views/TheHeader'

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
  height: 100vh;
}

#nav {
  padding: 30px;
  width: 20%;
  background: lightslategray;
  display: flex;
  flex-direction: column;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 10px 0;

    &.router-link-exact-active {
      color: #42b983;
    }

    &:hover {
      color: white;
    }
  }
}
#content {
  display: flex;
  height: 92vh;
  max-height: 100%;
}
</style>
