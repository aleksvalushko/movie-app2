<template>
  <div :class="$style.theHeader">
    <img
      src="../assets/tmdb.svg"
      alt="logo"
    />
    <div>MOVIE APP</div>
    <div>
      <el-button type="text">
        LogIn
      </el-button>
      /
      <el-button type="text">
        Registration
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style module lang="scss">
.theHeader {
  width: 100%;
  height: 70px;
  background: #42b983;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 10%;
  }
  :global(.el-button--text) {
    color: black;
  }
  :global(.el-button--text:hover) {
    color: white;
  }
}
</style>
