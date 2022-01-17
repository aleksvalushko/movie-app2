<template>
  <div id="app">
    <the-header />
    <div id="content">
      <div id="nav">
        <router-link to="/">
          Popular movies
        </router-link>
        <router-link to="/nowPlaying">
          Now playing
        </router-link>
      </div>
      <div style="width: 80%;">
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
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');

body  {
  margin: 0;
  background-image: url("../assets/it.jpg");
  background-size: cover;
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
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  overflow-x: hidden;
}

#nav {
  padding: 30px;
  width: 20%;
  background-color: lightslategray;
  display: flex;
  flex-direction: column;
  font-size: 20px;

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
  min-height: 92%;
}
</style>
