<template>
  <div :class="$style.notFoundPage">
    <div :class="$style.notFoundPageBlock">
      <div :class="$style.notFoundStatus">
        <div>404</div>
        <div :class="$style.notFoundContent">
          Sorry, page not found!
        </div>
      </div>
      <el-button
        type="warning"
        round
        @click="onSubmit"
      >
        Go to main page
      </el-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'NotFound',
  data () {
    return {}
  },
  methods: {
    async onSubmit () {
      await this.$router.push('/')
    },
    ...mapActions('main', ['newToken'])
  }
}
</script>

<style module lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&display=swap');
.notFoundPage {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .notFoundPageBlock {
    font-family: 'Mochiy Pop P One', sans-serif;
    background-color: rgba(119, 136, 153, 0.5);
    border-radius: 5px;
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .notFoundStatus {
      font-size: 100px;
      color: mediumseagreen;
    }
    .notFoundContent {
      margin-top: 20px;
      font-size: 25px;
      color: mediumseagreen;
    }
    :global(.el-button) {
      font-family: 'Mochiy Pop P One', sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 12px 20px;
      width: 200px;
      color: white;
      font-size: 15px;
      background-color: mediumseagreen;
      border: none;
    }
  }
}
</style>
